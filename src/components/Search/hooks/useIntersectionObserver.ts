import { useEffect, useState } from "react";

type TIntersectionObserverOptions = {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
};

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: TIntersectionObserverOptions = { threshold: 0 },
) => {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new window.IntersectionObserver(([entry]) => {
      // If intersectionRatio < 1, element is "stuck" (not fully in view)
      setIsStuck(entry.intersectionRatio < 1);
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  return isStuck;
};
