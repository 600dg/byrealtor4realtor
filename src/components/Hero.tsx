import { smoothScrollTo } from "@/lib/utils";
import { WelcomeCard } from "@/pages/Form";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-start overflow-hidden bg-black pt-28 md:pt-40 pb-12 md:pb-24">
      {/* Background with blurred image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background main.png"
          alt="Real estate background"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
          {/* Embedded form from Form.tsx */}
          <div id="lead-capture" className="w-full flex justify-center">
            <WelcomeCard />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
