import React, { useState } from "react";
import DarkVeil from "@/components/DarkVeil";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Form = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <DarkVeil speed={1.5} />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-0 sm:p-2 text-white w-full">
        <div className="w-full flex flex-col items-center gap-3 sm:gap-6">
          <WelcomeCard />
          {/* Social links */}
          <div className="mt-2 flex items-center gap-6 opacity-90">
            <a href="#" aria-label="Instagram" className="text-white hover:opacity-100 opacity-80" target="_blank" rel="noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:opacity-100 opacity-80" target="_blank" rel="noreferrer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.15h-1.1c-1.08 0-1.41.67-1.41 1.36V12h2.4l-.38 2.9h-2.02v7A10 10 0 0 0 22 12z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

const WelcomeCard = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  // Step 1 fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Step 2 fields
  const [experience, setExperience] = useState("beginner");
  const [obstacle, setObstacle] = useState("");
  const [notes, setNotes] = useState("");
  // Seminar dates — add new dates here
  const seminarDates: { value: string; label: string }[] = [
    { value: "2025-12-13", label: "Dec 13, 2025" },
  ];
  const [seminarDate, setSeminarDate] = useState("none");
  const [submitting, setSubmitting] = useState(false);

  const postToSheets = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbzlfHt8qAF2tr1DsQ2kMpfkgpBTYKrbJ4mSAGObwYKgnNSGPRQis7Z0MhritYOVYbkZ/exec';
    const payload = {
      firstName,
      lastName,
      phone,
      email,
      experience,
      obstacle,
      notes,
      seminarDate,
    };
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
    } catch (e) {
      // swallow errors to avoid blocking UX
      // console.error('Sheets submission failed', e);
    }
  };

  const goNext = async () => {
    if (step === 0) return setStep(1);
    if (step === 1) return setStep(2);
    if (step === 2) {
      if (!step2Valid || submitting) return;
      setSubmitting(true);
      await postToSheets();
      setSubmitting(false);
      return setStep(3);
    }
    setStep(3);
  };
  const goPrev = () => setStep((s) => (s === 2 ? 1 : s));

  // Validation rules
  const emailOk = /.+@.+\..+/.test(email.trim());
  const phoneOk = phone.replace(/\D/g, "").length >= 7;
  const step1Valid = firstName.trim().length > 0 && lastName.trim().length > 0 && emailOk && phoneOk;
  const step2Valid = ["beginner", "part-time", "full-time"].includes(experience);

  // Persist selections across refresh
  const STORAGE_KEY = "welcomeFormState";
  const STEP_KEY = "welcomeFormStep";

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        const ONE_HOUR = 60 * 60 * 1000;
        if (typeof saved._ts === "number" && Date.now() - saved._ts > ONE_HOUR) {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(STEP_KEY);
        } else {
          if (typeof saved.firstName === "string") setFirstName(saved.firstName);
          if (typeof saved.lastName === "string") setLastName(saved.lastName);
          if (typeof saved.phone === "string") setPhone(saved.phone);
          if (typeof saved.email === "string") setEmail(saved.email);
          if (typeof saved.experience === "string") setExperience(saved.experience);
          if (typeof saved.obstacle === "string") setObstacle(saved.obstacle);
          if (typeof saved.notes === "string") setNotes(saved.notes);
          if (typeof saved.seminarDate === "string") setSeminarDate(saved.seminarDate);
        }
      }
      const savedStep = localStorage.getItem(STEP_KEY);
      if (savedStep !== null) {
        const n = Number(savedStep);
        if ([0, 1, 2, 3].includes(n)) setStep(n as 0 | 1 | 2 | 3);
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    const payload = { firstName, lastName, phone, email, experience, obstacle, notes, seminarDate, _ts: Date.now() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      localStorage.setItem(STEP_KEY, String(step));
    } catch {}
  }, [firstName, lastName, phone, email, experience, obstacle, notes, seminarDate, step]);

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6">
      <div className={`w-full ${step === 3 ? 'max-w-xl' : 'max-w-3xl'} rounded-2xl px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl`}>
        {/* Logo inside (no box) */}
        <div className="mb-6 flex justify-center">
          <img src="/By.png" alt="BY Logo" className="h-16 w-auto opacity-90" />
        </div>

        {step === 0 && (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome.</h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Let's learn a bit more about you to put you on the path to becoming a real estate rising star.
            </p>
            <div className="mt-8">
              <Button type="button" className="px-6 py-3 text-base md:text-lg font-bold" onClick={goNext}>
                <ShinyText text="Get started" speed={2} />
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Tell us about you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" className="bg-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" className="bg-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" className="bg-white/10 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="bg-white/10 text-white placeholder:text-white/50" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 mt-8">
              <Button type="button" variant="secondary" onClick={() => setStep(0)}>Previous</Button>
              <Button type="button" onClick={goNext} disabled={!step1Valid}>Next</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Your experience</h2>
            <div className="space-y-2 mb-4">
              <Label>Experience level</Label>
              <RadioGroup value={experience} onValueChange={setExperience} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-start gap-3 rounded-md border border-white/10 p-3">
                  <RadioGroupItem value="beginner" id="exp-beginner" />
                  <Label htmlFor="exp-beginner" className="text-white">Beginner</Label>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-white/10 p-3">
                  <RadioGroupItem value="part-time" id="exp-part" />
                  <Label htmlFor="exp-part" className="text-white">Part-time Realtor</Label>
                </div>
                <div className="flex items-start gap-3 rounded-md border border-white/10 p-3">
                  <RadioGroupItem value="full-time" id="exp-full" />
                  <Label htmlFor="exp-full" className="text-white">Full-time Realtor</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2 mb-4">
              <Label htmlFor="obstacle">What’s holding you back right now?</Label>
              <Textarea id="obstacle" value={obstacle} onChange={(e) => setObstacle(e.target.value)} placeholder="Leads, consistency, skills, time..." className="bg-white/10 text-white placeholder:text-white/50 min-h-[120px]" />
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="notes">Notes</Label>
              <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything else we should know?" className="bg-white/10 text-white placeholder:text-white/50 min-h-[120px]" />
            </div>

            <div className="space-y-2 mb-2">
              <Label>Choose a seminar date <span className="text-white/60">(optional)</span></Label>
              <Select value={seminarDate} onValueChange={setSeminarDate}>
                <SelectTrigger className="bg-white/10 text-white border-white/20">
                  <SelectValue placeholder="Select a date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {seminarDates.map((d) => (
                    <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-3 mt-8">
              <div className="flex gap-3">
                <Button type="button" variant="secondary" onClick={goPrev}>Previous</Button>
              </div>
              <div className="flex gap-3">
                <Button type="button" onClick={goNext} disabled={!step2Valid || submitting}>{submitting ? 'Submitting...' : 'Next'}</Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank you!</h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              You’ve taken your first step to becoming a real estate rising star.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
