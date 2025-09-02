import { useEffect } from "react";

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: Event) => void,
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchend", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchend", listener);
    };
  }, [ref, handler]);
}
