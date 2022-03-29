import React, { useRef } from "react";
import { gsap } from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";

const Footer = () => {
  const menuRef = useRef();

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
        className="flex items-center justify-center space-x-4 mx-40"
      >
        <p className="font-geometric text-sm flex items-center justify space-x-2">
          <span className="rotate-180 inline-block">&copy;</span>
          <span>{new Date().getFullYear()} Rifqi.</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
