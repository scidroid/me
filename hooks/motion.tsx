import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

    const listener = (event: any) => {
      setPrefersReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
};

export { usePrefersReducedMotion };
