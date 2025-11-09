import { useState } from "react";
import DarkVeil from "@/components/DarkVeil";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ShinyText from "@/components/ShinyText";
import Stepper, { Step } from "@/components/Stepper";

const Form = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <DarkVeil />
      </div>

      {/* Overlay form: its own container (no surrounding card) */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 text-white">
        <div className="w-full flex flex-col items-center gap-6">
          {/* Placeholder logo on top */}
          <img src="/placeholder.svg" alt="Logo" className="h-16 w-auto opacity-90" />
          <FormStepper />
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

const FormStepper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("beginner");
  const [obstacle, setObstacle] = useState("");
  const [notes, setNotes] = useState("");
  const [completeSignal, setCompleteSignal] = useState(0);

  const handleComplete = () => {
    console.log("Form submitted", { name, email, phone, experience, obstacle, notes });
  };

  const isStepValid = (step: number) => {
    if (step === 2) {
      return name.trim().length > 1 && /.+@.+\..+/.test(email) && phone.trim().length >= 7;
    }
    if (step === 3) {
      return experience.length > 0 && obstacle.trim().length > 2;
    }
    return true;
  };

  return (
    <Stepper
      initialStep={1}
      onStepChange={() => {}}
      onFinalStepCompleted={handleComplete}
      isStepValid={isStepValid}
      hideNextOnLastStep={true}
      completeSignal={completeSignal}
      backButtonText="Previous"
      nextButtonText="Next"
      renderCompleted={() => (
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Thank you!</h2>
          <p className="text-white/80">We will be in touch soon.</p>
        </div>
      )}
    >
      <Step>
        <div className="text-center py-2">
          <h2 className="text-3xl font-bold mb-2">Welcome!</h2>
          <p className="text-white/80">Let’s learn a bit about you and help you take the first step toward becoming a real estate rising star.</p>
        </div>
      </Step>

      <Step>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Name<span className="text-red-400"> *</span></Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="bg-white/10 text-white placeholder:text-white/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone<span className="text-red-400"> *</span></Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 555-5555" className="bg-white/10 text-white placeholder:text-white/50" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email<span className="text-red-400"> *</span></Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="bg-white/10 text-white placeholder:text-white/50" />
          </div>
        </div>
      </Step>

      <Step>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Situation</h2>
          <div className="space-y-2">
            <Label className="text-white">Experience Level<span className="text-red-400"> *</span></Label>
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
          <div className="space-y-2">
            <Label htmlFor="obstacle" className="text-white">What’s holding you back?</Label>
            <Input id="obstacle" value={obstacle} onChange={(e) => setObstacle(e.target.value)} placeholder="Leads, consistency, skills, time..." className="bg-white/10 text-white placeholder:text-white/50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-white">Notes</Label>
            <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything else we should know?" className="bg-white/10 text-white placeholder:text-white/50 min-h-[120px]" />
          </div>
        </div>
      </Step>

      <Step>
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold">Your first step to becoming a real estate rising star</h2>
          <Button type="button" className="w-full font-bold py-6 text-lg" onClick={() => setCompleteSignal((n) => n + 1)}>
            <ShinyText text="Submit" speed={3} />
          </Button>
        </div>
      </Step>
    </Stepper>
  );
};
