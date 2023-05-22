import { useEffect, useState } from "react";

export const useProgressBar = (): number => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight + 30;
      const progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateProgress);
  }, []);

  console.log(scrollProgress);

  return scrollProgress;
};
