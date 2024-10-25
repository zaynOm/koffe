import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, 250);

    return () => clearTimeout(handler);
  }, [value]);

  return debounced;
}
