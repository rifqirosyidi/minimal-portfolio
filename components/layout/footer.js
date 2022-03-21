import React, { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Footer = () => {
  const menuRef = useRef();

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power1.inOut" },
    });

    tl.from(menuRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      y: -200,
    });
  }, []);

  return (
    <div ref={menuRef} className="flex items-center justify-center space-x-4">
      <Link href="/" className="font-mono">
        home.
      </Link>
      <Link href="/about" className="font-mono">
        about.
      </Link>
      <p className="font-mono">work.</p>
      <p className="font-mono">blog.</p>
      <p className="font-mono">contact.</p>
    </div>
  );
};

export default Footer;
