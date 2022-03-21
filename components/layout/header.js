import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
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
          <h2
            ref={leftMenuRef}
            className="flex flex-col font-mono text-md tracking-widest"
          >
            <button className="relative group">
              <p className="absolute transition duration-500 ease-in-out group-hover:invisible-alpha">
                RF
              </p>
              <p className="absolute transition duration-500 ease-in-out hover:delay-500 invisible-alpha group-hover:visible-alpha">
                Rifqi
              </p>
            </button>
            <button className="relative group">
              <p className="absolute top-8 transition duration-500 ease-in-out group-hover:invisible-alpha">
                RS
              </p>
              <p className="absolute top-8 transition duration-500 ease-in-out hover:delay-500 invisible-alpha group-hover:visible-alpha">
                Rosyidi
              </p>
            </button>
          </h2>
          <div
            ref={rightMenuRef}
            className="flex flex-col items-end justify-end font-mono text-md tracking-widest"
          >
            <Toggle to="light" label="LM" name="Light Mode" />
            <Toggle to="dark" label="NM" name="Night Mode" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
