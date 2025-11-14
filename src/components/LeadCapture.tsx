import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { goToGettingStarted } from "@/lib/utils";

export default function JoinTeamSection() {
  return (
    <section id="lead-capture" className="relative isolate py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl text-white">
          <div className="mb-6 flex justify-center">
            <img src="/By.png" alt="BY Logo" className="h-16 w-auto opacity-90" />
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome.</h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Let&apos;s learn a bit more about you to put you on the path to becoming a real estate rising star.
            </p>
            <div className="mt-8">
              <Button
                type="button"
                className="px-6 py-3 text-base md:text-lg font-bold"
                onClick={() => goToGettingStarted(1)}
              >
                <ShinyText text="Get started" speed={2} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
