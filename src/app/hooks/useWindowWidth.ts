import { useEffect, useState } from "react";

export function useWindowWidth() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return widthScreen;
}
