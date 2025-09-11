import { useState, useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

export const useDebouncedValue = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  const debouncedSet = useMemo(
    () =>
      debounce((value: string) => {
        setDebounced(value);
      }, delay),
    [delay, value]
  );
  useEffect(() => {
    debouncedSet(value);
    return () => debouncedSet.cancel();
  }, [value, debouncedSet]);

  return debounced;
};
