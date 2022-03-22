import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import Toggle from "../toggle/Toggle";
import GridSvg from "../../assets/svg/GridSvg";

let menus = [
  {
    name: "home",
    href: "/",
  },
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
  const menuModalRef = useRef();

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  let tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  let tl2 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  useIsomorphicLayoutEffect(() => {
    tl2.pause();

    tl.from([leftMenuRef.current.children, rightMenuRef.current.children], {
      opacity: 0,
      stagger: 0.2,
      y: -200,
    });

    tl2.from(menuModalRef.current, {
      opacity: 0,
      x: "-100%",
    });
  }, []);

  const handleClick = () => {
    tl2.play();
  };

  const handleClose = () => {
    tl2.reverse();
  };

  return (
    <>
      <header className="flex items-center h-40 mx-40 ">
        <nav className="flex items-center justify-between w-full">
          <div ref={leftMenuRef} className="flex items-center space-x-4">
            <h2 className="font-geometric">
              <Link href="/">home.</Link>
            </h2>
            <button type="button" onClick={handleClick}>
              <p className="font-geometric">menu.</p>
            </button>
          </div>
          <div ref={rightMenuRef}>
            <Toggle />
          </div>
        </nav>
      </header>

      <div
        ref={menuModalRef}
        className="fixed top-0 left-0 min-h-screen text-zinc-900 bg-white dark:text-white dark:bg-zinc-900 w-screen z-50"
      >
        <div className="grid grid-cols-5">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 "
            >
              <Link href={menu.href} passHref>
                <p className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center">
                  {menu.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <GridSvg />
        </div>
        <div className="absolute top-1/4 left-1/4">
          <GridSvg />
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="absolute left-0 bottom-20 right-0 mx-auto cursor-pointer"
        >
          <CgClose className="text-black dark:text-white mx-auto" />
        </button>
      </div>
    </>
  );
};

export default Header;
