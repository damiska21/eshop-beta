import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // krátké zpoždění kvůli lazy load/render závodům
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // nebo "auto" pro hned
      });
    }, 50); // 50-100ms bývá safe

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
