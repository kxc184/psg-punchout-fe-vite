import { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

export const useDebouncedValue = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  const debouncedSet = useMemo(
    () =>
      debounce((value: string) => {
        if (value.length < 3) {
          return;
        }
        setDebounced(value);
      }, delay),
    [delay]
  );
  useEffect(() => {
    debouncedSet(value);
    return () => debouncedSet.cancel();
  }, [value, debouncedSet]);

  return debounced;
};
