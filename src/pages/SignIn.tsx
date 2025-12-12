import { FormEvent, useEffect, useState } from "react";
import DarkVeil from "@/components/DarkVeil";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DEFAULT_SCRIPT_URL } from "@/pages/Form";

const SIGN_IN_SHEET_DETAILS = {
  sheetName: "Sign In",
  sheetGid: "0",
  spreadsheetId: "16w2Z3cn1Po_Uuzqxi_mK69fBube3UJqH4MFSsMExQJ4",
  formName: "sign-in",
};

const SIGN_IN_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbySeO_Th8a6Jm4KE3YG1jAJrYDtKs1Moq-zi2T4MbquxcZENFADmW_A7rZQYG7DXdY/exec";

const LUCKY_NUMBER_SLOTS = 6;

const SignIn = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Sign In";
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <DarkVeil speed={1.5} />
      </div>
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6">
        <div className="w-full max-w-3xl space-y-8">
          <div className="flex flex-col items-center text-center space-y-3">
            <img src="/By.png" alt="BY Logo" className="h-16 w-auto sm:h-20" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Event Sign In
            </p>
          </div>
          <div className="mt-4">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [scores, setScores] = useState<string[]>(Array(LUCKY_NUMBER_SLOTS).fill(""));
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const [luckyInfoOpen, setLuckyInfoOpen] = useState(false);

  const emailOk = /.+@.+\..+/.test(email.trim());
  const phoneOk = phone.replace(/\D/g, "").length >= 7;
  const formValid = firstName.trim() !== "" && lastName.trim() !== "" && emailOk && phoneOk;

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setScores(Array(LUCKY_NUMBER_SLOTS).fill(""));
  };

  const handleScoreChange = (idx: number, rawValue: string) => {
    let raw = rawValue.replace(/\D/g, "");
    if (raw.length > 2) raw = raw.slice(0, 2);

    let nextValue = raw;
    if (raw !== "") {
      let num = Number(raw);
      if (num > 49) {
        num = 49;
      }
      nextValue = String(num);
    }

    setScores((prev) => {
      const clone = [...prev];
      clone[idx] = nextValue;
      return clone;
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formValid || submitting) {
      setMessage("Please complete all required fields.");
      setMessageType("error");
      return;
    }

    setSubmitting(true);
    setMessage(null);

    const payload = {
      firstName,
      lastName,
      phone,
      email,
      scores,
      ...SIGN_IN_SHEET_DETAILS,
    };

    try {
      await fetch(SIGN_IN_SCRIPT_URL || DEFAULT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setMessage("Sign in recorded. You can submit another entry at any time.");
      setMessageType("success");
      resetForm();
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      id="sign-in-form"
      onSubmit={handleSubmit}
      className="w-full rounded-2xl border border-border/30 bg-black/80 px-5 py-6 text-white shadow-2xl backdrop-blur-md sm:px-8 sm:py-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">
            First name <span className="text-[#b69532]">*</span>
          </Label>
          <Input
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className="bg-white text-black placeholder:text-black/40"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">
            Last name <span className="text-[#b69532]">*</span>
          </Label>
          <Input
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            className="bg-white text-black placeholder:text-black/40"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone number <span className="text-[#b69532]">*</span>
          </Label>
          <Input
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className="bg-white text-black placeholder:text-black/40"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email address <span className="text-[#b69532]">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="bg-white text-black placeholder:text-black/40"
            required
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <TooltipProvider>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Label>Lucky numbers</Label>
              <span className="text-white/60 text-sm">(optional)</span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/lotto-649-logo-png-transparent.png"
                alt="Lotto 6/49 logo"
                className="h-6 w-auto rounded-sm bg-white/10 px-1 py-0.5"
              />
              <Tooltip open={luckyInfoOpen} onOpenChange={setLuckyInfoOpen}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-black/40 text-xs text-white/80 hover:bg-black/60"
                    aria-label="Lucky numbers info"
                    onClick={() => setLuckyInfoOpen((prev) => !prev)}
                  >
                    i
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top" align="end" className="max-w-xs text-center">
                  We&apos;ll buy a Lotto 6/49 ticket for everyone who signs up for the event. Give us the 6 lucky
                  numbers you think will win.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
        <div className="flex flex-wrap justify-center md:justify-between gap-2 sm:gap-3">
          {scores.map((value, idx) => (
            <Input
              key={idx}
              type="number"
              min={0}
              max={49}
              step={1}
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-10 sm:w-12 md:w-16 bg-white text-black placeholder:text-black/40 text-center border border-black/10"
              value={value}
              onChange={(e) => handleScoreChange(idx, e.target.value)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={!formValid || submitting}>
          {submitting ? "Submitting..." : "Sign In"}
        </Button>
        {message && (
          <p className={`text-sm ${messageType === "success" ? "text-green-300" : "text-red-300"}`}>{message}</p>
        )}
      </div>
    </form>
  );
};

export default SignIn;
