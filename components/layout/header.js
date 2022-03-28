import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import Toggle from "../toggle/Toggle";
import GridSvg from "../../assets/svg/GridSvg";

let menus = [
  {
    name: "about",
    href: "/about",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const Header = () => {
  const leftMenuRef = useRef();
  const rightMenuRef = useRef();

  const listMenuRef = useRef();
  const menuIconRef = useRef();

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  let tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  let tl2 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  let tl3 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  useIsomorphicLayoutEffect(() => {
    tl.from([leftMenuRef.current.children, rightMenuRef.current.children], {
      opacity: 0,
      stagger: 0.2,
      y: -200,
    });

    tl2.from(listMenuRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      y: 100,
    });

    tl3.from(menuIconRef.current, {
      rotateZ: 180,
      x: -15,
    });
  }, []);

  tl2.reversed(true);
  tl3.reversed(true);

  const handleClick = () => {
    tl3.reversed() ? tl3.play() : tl3.reverse();
    tl2.reversed() ? tl2.play() : tl2.reverse();
  };

  return (
    <>
      <header className="flex items-center h-20 mx-40 ">
        <nav className="flex items-center justify-between w-full">
          <div ref={leftMenuRef} className="flex items-center space-x-6">
            <h2 className="font-geometric">
              <Link href="/">home.</Link>
            </h2>
            <div className="relative">
              <button type="button" onClick={handleClick}>
                <div className="flex items-center justify-center space-x-6 font-geometric">
                  <p>menu.</p>{" "}
                  <div ref={menuIconRef}>
                    <CgChevronRight />
                  </div>
                </div>
              </button>
              <div className={`absolute top-0 left-24  h-20  z-50`}>
                <div
                  ref={listMenuRef}
                  className="flex space-x-6 font-geometric items-center"
                >
                  {menus.map((menu) => (
                    <div className="cursor-pointer" key={menu.name}>
                      <Link href={menu.href} passHref>
                        <p className="">{menu.name}.</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div ref={rightMenuRef}>
            <Toggle />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
