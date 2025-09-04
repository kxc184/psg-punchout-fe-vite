import Banner from ".";
import { useBannerStore } from "../../lib/store/bannerStore";

const BannerBoundry = () => {
  const banners = useBannerStore((state) => state.banners);
  //   No empty bannerstate
  if (!banners.length) {
    return null;
  }

  return (
    <div className="sw:w-full">
      {banners.map((banner) => (
        <Banner key={banner.id} banner={banner} />
      ))}
      {/* Demo of Variants */}
      {Array.from({ length: 5 }).map((_, index) => {
        const types = [
          "warning",
          "informational",
          "success",
          "error",
          "generic",
        ];
        return (
          <Banner
            key={index}
            banner={{
              id: index,
              message: `Banner variant ${types[index]} ${index}`,
              type: types[index] as
                | "error"
                | "warning"
                | "informational"
                | "success"
                | "generic",
              blocking: false,
            }}
          />
        );
      })}
    </div>
  );
};

export default BannerBoundry;
