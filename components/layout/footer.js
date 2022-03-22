import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CgClose } from "react-icons/cg";
import GridSvg from "../../assets/svg/GridSvg";
import Link from "next/link";

const Footer = () => {
  const menuRef = useRef();

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  let tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  useIsomorphicLayoutEffect(() => {
    tl.from(menuRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      y: -200,
    });
  }, []);

  return (
    <>
      <div
        ref={menuRef}
        className="flex items-center justify-between space-x-4 mx-40"
      >
        <button type="button">
          <p className="font-geometric flex items-center space-x-2">
            <span className="rotate-180 inline-block">&copy;</span>
            <span>{new Date().getFullYear()} Rifqi.</span>
          </p>
        </button>
        <button type="button">
          <p className="font-geometric">top. </p>
        </button>
      </div>
    </>
  );
};

export default Footer;
