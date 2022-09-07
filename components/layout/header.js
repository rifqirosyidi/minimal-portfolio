import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";
import { CgChevronLeft } from "react-icons/cg";
import Link from "next/link";
import Toggle from "../toggle/Toggle";
import { useMediaQuery } from "react-responsive";
import { Controls, PlayState, Tween } from "react-gsap";

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

  const [playState, setPlayState] = useState(PlayState.pause);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let tl = gsap.timeline({
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

    tl3.from(menuIconRef.current, {
      rotateZ: 180,
      x: -15,
    });
  }, []);

  // tl2.reversed(true);
  tl3.reversed(true);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setPlayState(PlayState.play);
    } else {
      setPlayState(PlayState.reverse);
    }
  };

  return (
    <>
      <header className="relative flex items-center h-20 container mx-auto px-4 z-50">
        <nav className="flex items-center justify-between w-full">
          <div ref={leftMenuRef} className="flex items-center sm:space-x-6">
            <div className="relative">
              <button type="button" onClick={handleClick}>
                <div className="flex items-center justify-center sm:space-x-6 font-geometric">
                  <p>menu.</p>{" "}
                  <Tween
                    playState={playState}
                    to={{ rotation: 180 }}
                    ease="power1.inOut"
                  >
                    <div className="hidden sm:block">
                      <CgChevronLeft />
                    </div>
                  </Tween>
                </div>
              </button>
              <div
                className={`absolute top-14 left-0 sm:top-0 sm:left-24 sm:h-20 z-50`}
              >
                <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-6 font-geometric sm:items-center">
                  <Tween
                    playState={playState}
                    from={{ y: "100px", opacity: 0 }}
                    stagger={0.2}
                    ease="power1.inOut"
                  >
                    {menus.map((menu) => (
                      <div
                        className="z-50 cursor-pointer text-zinc-900 dark:text-white shadow-sm sm:shadow-none dark:shadow-none bg-white sm:bg-transparent dark:bg-zinc-800 sm:dark:bg-transparent rounded-md border-zinc-500 p-2 sm:p-0 sm:border-none"
                        key={menu.name}
                      >
                        <Link href={menu.href} passHref>
                          <p className="">{menu.name}.</p>
                        </Link>
                      </div>
                    ))}
                  </Tween>
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
