"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LenisScrollProvider = ({ children }) => {
  // const lenisRef = useRef(undefined);
  // const rafHandleRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // if (!lenisRef.current) {
    //   // lenisRef.current = new Lenis({
    //   //   duration: 1.2,
    //   //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   // });
    //   lenisRef.current = new Lenis();
    //   const raf = (time) => {
    //     lenisRef.current?.raf(time);
    //     rafHandleRef.current = requestAnimationFrame(raf);
    //   };
    //   rafHandleRef.current = requestAnimationFrame(raf);
    // }
    // return () => {
    //   if (lenisRef.current) {
    //     lenisRef.current.destroy();
    //     lenisRef.current = undefined;
    //   }
    //   if (rafHandleRef.current) {
    //     cancelAnimationFrame(rafHandleRef.current);
    //     rafHandleRef.current = null;
    //   }
    // };
  }, []);
  return children;
};

export default LenisScrollProvider;
