"use client";

import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef } from "react";

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      //   anchors: true, // 👈 this is the key
      //   lerp: 0.06, // 👈 snappier scroll
      //   wheelMultiplier: 1.2,
      //   smoothWheel: true,
      //   smoothTouch: false,
      //   anchors: true,

      lerp: 0.07,
      duration: 1.2, // adds easing feel
      wheelMultiplier: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
