type TopBannerProps = {
  showFormLink?: boolean;
};

const TopBanner = ({ showFormLink = true }: TopBannerProps) => {
  return (
    <div className="w-full bg-[#a43434] text-white text-center py-2 px-4 text-xs sm:text-sm md:text-base">
      <span className="font-semibold tracking-wide">
        Live Event • December 13
      </span>
      <span className="mx-2">·</span>
      <span>
        Reserve your spot by{" "}
        {showFormLink ? (
          <a
            href="/getting-started"
            className="font-semibold text-[#b69532] underline-offset-2 hover:underline"
          >
            filling out the form
          </a>
        ) : (
          <span className="font-semibold text-[#b69532]">
            filling out the form below
          </span>
        )}
        .
      </span>
    </div>
  );
};

export default TopBanner;

