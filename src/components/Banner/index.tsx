import { IBanner, useBannerStore } from "../../lib/store/bannerStore";

// TODO: Define Error Shape for non blocking UI

const Banner = ({ banner }: { banner: IBanner }) => {
  const BANNER = {
    warning: {
      ICON: "swdc-if--warning sw:text-black",
      MESSAGE: "sw:text-black",
      BUTTON: "sw:text-black",
    },
    informational: {
      ICON: "swdc-if--information",
      MESSAGE: "sw:text-white",
      BUTTON: "sw:text-white",
    },
    success: {
      ICON: "swdc-if--done",
      MESSAGE: "sw:text-white",
      BUTTON: "sw:text-white",
    },
    error: {
      ICON: "swdc-if--error",
      MESSAGE: "sw:text-white",
      BUTTON: "sw:text-white",
    },
    generic: {
      ICON: "swdc-if--information",
      MESSAGE: "sw:text-white",
      BUTTON: "sw:text-white",
    },
  };
  const { ICON, MESSAGE, BUTTON } = BANNER[banner.type] || BANNER.generic;
  const removeBanner = useBannerStore.getState().removeBanner;

  const handleRemove = () => {
    if (banner.id) {
      removeBanner(banner.id);
    }
  };

  return (
    <div className={`swdc-banner sw:w-full swdc-banner--${banner.type}`}>
      <div className="swdc-banner__content sw:container sw:mx-auto  sw:max-w-[1440px] sw:px-8 sw:text-white">
        <div>
          <em className={`swdc-if ${ICON}`}></em>
          <div className={`swdc-banner__message ${MESSAGE}`}>
            {banner.message}
          </div>
        </div>
        <div className="swdc-banner__buttons">
          <button
            onClick={handleRemove}
            className="swdc-button swdc-button--text"
          >
            <em className={`swdc-if swdc-if--close ${BUTTON}`}></em>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
