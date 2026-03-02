import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

export default function Loader({ onComplete }) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    // console.log("loader mounted");
    const ctx = gsap.context(() => {
      const dop = document.querySelector(".text");
      gsap.set(dop, { visibility: "hidden" });

      const split = new SplitText(".text", { type: "words" });

      const tl = gsap.timeline({
        paused: true,
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Force GPU layer to avoid stutter
      tl.set("#name", { willChange: "transform, opacity" });

      // Show text AFTER splitting
      tl.set(dop, { visibility: "visible", display: "block" });

      // Initial state
      // tl.set("#name", { opacity: 0, y: 50 });
      tl.set(split.words, { opacity: 0, y: 20 });

      // Name reveal
      tl.to("#name", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // DOP split text reveal
      tl.to(
        split.words,
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // exit
      tl.to(["#name", ".text"], {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 1,
        ease: "power2.out",
      });

      // hold ||  keep the animation (black screen) running for a bit longer
      tl.to({}, { duration: 1 });

      // 🚀 Start AFTER fonts + first paint
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          tl.play();
        });
      });
    }, comp);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <section
      ref={comp}
      className="w-full h-svh flex justify-center items-center"
    >
      <div className="flex flex-col text-center">
        <h1
          id="name"
          className="opacity-0 translate-y-12 text-2xl md:text-2xl tracking-wider font-light"
        >
          Prateek <span className="font-medium">Bachwani</span>
        </h1>
        <div id="dop" className="text-center tracking-wide font-work text-sm">
          <p className="text hidden">Design & Development</p>
        </div>
      </div>
    </section>
  );
}
