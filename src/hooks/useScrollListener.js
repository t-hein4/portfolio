import { useEffect, useState } from "react";

export function useScrollListener() {
  const [scrollY, setScrollY] = useState(0);

  function listenScrollEvent() {
    if (window.scrollY > 0) {
      setScrollY(window.scrollY);
    } else {
      setScrollY(0);
    }
  }

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", listenScrollEvent);
    }

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return {
    scrollY,
  };
}
