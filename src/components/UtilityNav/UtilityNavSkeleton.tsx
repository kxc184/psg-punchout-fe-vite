const SkeletonLine = ({ width = "sw:w-10", height = "sw:h-1" }) => (
  <div className={`${width} sw:bg-gray-300 sw:animate-pulse ${height}`}></div>
);

const SkeletonIcon = () => (
  <div className="sw:w-4 sw:h-4 sw:bg-gray-300 sw:animate-pulse sw:rounded"></div>
);

const UtilityNavSkeleton = () => (
  <div className="sw:container sw:min-h-[80px] sw:min-w-[1090px] sw:max-w-[1440px] sw:bg-white sw:px-8 sw:flex sw:justify-between">
    <ul className="sw:flex sw:w-full sw:justify-center sw:items-center sw:gap-4">
      <li className="sw:flex sw:justify-center sw:items-center sw:gap-2">
        <SkeletonIcon />
        <div className="sw:flex sw:gap-1 sw:flex-col sw:items-start">
          <SkeletonLine />
          <SkeletonLine />
        </div>
      </li>
      <li className="sw:flex sw:justify-start sw:items-center sw:w-full sw:gap-2">
        <SkeletonIcon />
        <div className="sw:flex sw:gap-1 sw:flex-col sw:items-start">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </div>
      </li>
    </ul>
    <div className="sw:flex">
      <ul className="sw:flex sw:items-center sw:py-1 sw:gap-1">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            className="sw:flex sw:justify-center sw:items-center sw:gap-2"
          >
            <SkeletonIcon />
            <div className="sw:flex sw:gap-1 sw:flex-col sw:items-start">
              <SkeletonLine height="sw:h-2" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default UtilityNavSkeleton;
