import { FormEvent, useState } from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/solid";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function JoinTeamSection() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    // TODO: replace with your submit handler (fetch/axios)
    console.log(Object.fromEntries(fd.entries()));
    setTimeout(() => setLoading(false), 800); // demo only
  };

  return (
    <section
      id="lead-capture"
      className="relative isolate py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(164,52,52,0.15) 0%, rgba(164,52,52,0.2) 50%, rgba(164,52,52,0.25) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Eyebrow */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6"
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
          >
            <BuildingOfficeIcon className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Join the Team and Grow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
            Start Becoming a <span className="text-[#a43434]">Top Producer</span> Today
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: pitch + proof */}
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="mt-4 text-black text-lg">
              Get instant access to resources, mentorship, and a personal plan to grow your
              real estate business.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Exclusive market insights report",
                "1:1 consult with a top producer",
                "Lead-gen system access",
                "Free marketing templates & ad assets",
                "30-day success plan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-[#a43434] shrink-0" />
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-3 text-sm text-black">
              <ShieldCheckIcon className="h-5 w-5 text-[#a43434]" />
              <span>Trusted by 2,500+ realtors • Your information stays private</span>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="rounded-2xl border border-rose-200/60 bg-white/70 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_1px_0_#fff_inset,0_12px_32px_rgba(0,0,0,.06)] p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-black">
                Start Your <span className="text-[#b69532]">Success Journey</span>
              </h3>
              <p className="mt-1 text-black">
                Fill out the form to get your welcome kit and a consultation.
              </p>

              <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black">
                    Full Name *
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                      placeholder="Enter your full name"
                    />
                    <UserIcon className="h-5 w-5 text-[#b69532] absolute right-3 top-3" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black">
                    Email Address *
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                      placeholder="your.email@example.com"
                    />
                    <EnvelopeIcon className="h-5 w-5 text-[#b69532] absolute right-3 top-3" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-black">
                    Phone Number *
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                      placeholder="(555) 123-4567"
                    />
                    <PhoneIcon className="h-5 w-5 text-[#b69532] absolute right-3 top-3" />
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-black">
                    Real Estate Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your experience level
                    </option>
                    <option>Beginner</option>
                    <option>1–3 years</option>
                    <option>3–7 years</option>
                    <option>7+ years</option>
                  </select>
                </div>

                {/* Package interest */}
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-black">
                    Package Interest
                  </label>
                  <select
                    id="package"
                    name="package"
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a package
                    </option>
                    <option>90/10 Standard</option>
                    <option>80/20 Rising Star</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* Goals */}
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-black">
                    What are your income goals?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-neutral-200 bg-white/80 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b69532] focus:border-[#b69532]"
                    placeholder="Tell us about your goals and what success looks like to you..."
                  />
                </div>

                {/* Consent */}
                <label className="flex items-start gap-3 text-sm text-black">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#a43434] focus:ring-[#a43434]"
                  />
                  <span>
                    By submitting, you agree to be contacted by email/SMS. No spam. Opt out anytime.
                  </span>
                </label>

                <Button
                  type="submit"
                  disabled={loading}
                  variant="outline"
                  className="w-full group font-bold"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {loading ? "Submitting..." : "Get My Welcome Kit"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
