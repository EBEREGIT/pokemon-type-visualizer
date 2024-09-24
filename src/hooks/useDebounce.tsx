import { useEffect, useState, useCallback } from "react";

export default function useDebounce<T>(input: T, delay: number = 1000): T {
  const [value, setValue] = useState<T>(input);

  // Memoize the timeout handler to avoid unnecessary re-creation
  const debounceHandler = useCallback(() => {
    const timeout = setTimeout(() => {
      setValue(input);
    }, delay);

    return () => clearTimeout(timeout);
  }, [input, delay]);

  useEffect(() => {
    return debounceHandler();
  }, [debounceHandler]);

  return value;
}
