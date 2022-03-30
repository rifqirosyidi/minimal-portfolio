import React, { useState, useEffect } from "react";
import { CgArrowLeft } from "react-icons/cg";
import { Fade } from "react-reveal";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollPosition(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="fixed bottom-16 right-8 sm:right-40">
      <div>
        {scrollPosition > 100 ? (
          <Fade right>
            <button onClick={handleBackToTop} className="font-geometric">
              top.{" "}
            </button>
          </Fade>
        ) : (
          <div className="flex items-center space-x-2 -rotate-90">
            <Fade bottom>
              <CgArrowLeft />
              <p className="font-geometric">scroll</p>
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackToTop;
