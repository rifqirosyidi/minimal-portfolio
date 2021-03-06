import React, { useRef } from "react";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";
import { CgChevronRight } from "react-icons/cg";
import Link from "next/link";
import Toggle from "../toggle/Toggle";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react/cjs/react.production.min";

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

  const listMenuRef = useRef();
  const menuIconRef = useRef();

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 240px)",
  });

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
      <header className="relative flex items-center h-20 container mx-auto px-4 z-50">
        <nav className="flex items-center justify-between w-full">
          <div ref={leftMenuRef} className="flex items-center sm:space-x-6">
            <h2 className="hidden sm:block font-geometric">
              <Link href="/">home.</Link>
            </h2>
            <div className="relative">
              <button type="button" onClick={handleClick}>
                <div className="flex items-center justify-center sm:space-x-6 font-geometric">
                  <p>menu.</p>{" "}
                  <div ref={menuIconRef}>
                    <div className="hidden sm:block">
                      <CgChevronRight />
                    </div>
                  </div>
                </div>
              </button>
              <div
                className={`absolute top-14 left-0 sm:top-0 sm:left-24 sm:h-20 z-50`}
              >
                <div
                  ref={listMenuRef}
                  className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 font-geometric sm:items-center"
                >
                  {menus.map((menu) => (
                    <div
                      className="cursor-pointer bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-b border-zinc-300 p-2 sm:p-0 sm:border-none"
                      key={menu.name}
                    >
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
