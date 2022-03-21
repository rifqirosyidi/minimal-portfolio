import React, { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CgClose } from "react-icons/cg";
import GridSvg from "../../assets/svg/GridSvg";
import Link from "next/link";

const Footer = () => {
  const menuRef = useRef();
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

    tl.from(menuRef.current.children, {
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
      <div
        ref={menuRef}
        className="flex items-center justify-between space-x-4 mx-40"
      >
        <button type="button" onClick={handleClick}>
          <p className="font-geometric">menu.</p>
        </button>
        <button type="button" onClick={handleClick}>
          <p className="font-geometric flex items-center space-x-2">
            <span className="rotate-180 inline-block">&copy;</span>
            <span>{new Date().getFullYear()} Rifqi.</span>
          </p>
        </button>
      </div>
      <div
        ref={menuModalRef}
        className="fixed top-0 left-0 min-h-screen text-zinc-900 bg-white dark:text-white dark:bg-zinc-900 w-screen"
      >
        <div className="grid grid-cols-5">
          <div className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 ">
            <Link
              href="/"
              className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center"
            >
              home
            </Link>
          </div>
          <div className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 ">
            <Link
              href="/about"
              className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center"
            >
              about
            </Link>
          </div>
          <div className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 ">
            <Link
              href="/work"
              className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center"
            >
              work
            </Link>
          </div>
          <div className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 ">
            <Link
              href="/resume"
              className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center"
            >
              resume
            </Link>
          </div>
          <div className="min-h-screen w-full flex items-center justify-center transition-all ease-in-out duration-500 ">
            <Link
              href="/contact"
              className="font-geometric tracking-widest cursor-pointer transition-all duration-1000 ease-in-out hover:underline py-20 px-10 text-center"
            >
              contact
            </Link>
          </div>
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

export default Footer;
