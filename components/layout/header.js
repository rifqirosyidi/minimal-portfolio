import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Toggle from "../toggle/Toggle";

const Header = () => {
  const leftMenuRef = useRef();
  const rightMenuRef = useRef();

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power1.inOut" },
    });

    tl.from([leftMenuRef.current.children, rightMenuRef.current.children], {
      opacity: 0,
      stagger: 0.2,
      y: -200,
    });
  }, []);
  return (
    <>
      <header className="flex items-center h-40 mx-40 ">
        <nav className="flex items-center justify-between w-full">
          <h2 className="font-geometric" ref={leftMenuRef}>
            <Link href="/">home.</Link>
          </h2>
          <div ref={rightMenuRef}>
            <Toggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
