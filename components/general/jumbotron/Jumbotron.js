import gsap from "gsap";
import React, { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import GridSvg from "../../../assets/svg/GridSvg";

const Jumbotron = ({ firstLabel, secondLabel, description }) => {
  const firstLabelRef = useRef();
  const secondLabelRef = useRef();
  const descriptionRef = useRef();
  const gridRef = useRef([]);

  const isMobile = useWindowSize().width < 768;

  const innerText =
    description &&
    description
      .split(" ")
      .map((desc) => `<span class="inline-block">${desc}</span>`);

  const tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });
  const tl2 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });
  const tl3 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  useIsomorphicLayoutEffect(() => {
    tl.from(firstLabelRef.current, {
      opacity: 0,
      y: -200,
      rotateX: -90,
    }).from(firstLabelRef.current, {
      x: isMobile ? 10 : -200,
    });

    tl2
      .from(secondLabelRef.current, {
        opacity: 0,
        rotateX: -90,
        y: 200,
      })
      .from(secondLabelRef.current, {
        x: isMobile ? 20 : 200,
      });

    tl2.from(descriptionRef.current.children, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });

    tl3
      .from([gridRef.current[0], gridRef.current[1]], {
        opacity: 0,
        y: 100,
        stagger: 0.5,
      })
      .from([gridRef.current[0], gridRef.current[1]], {
        rotate: -180,
        stagger: 0.5,
      });
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div
        ref={(el) => {
          gridRef.current[0] = el;
        }}
        className="absolute top-1/2 left-10 sm:left-40"
      >
        <GridSvg />
      </div>

      <div
        ref={(el) => {
          gridRef.current[1] = el;
        }}
        className="absolute bottom-1/2 right-10 sm:right-40"
      >
        <GridSvg />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col font-primary">
          <p
            ref={firstLabelRef}
            className="text-blue-500 dark:text-blue-400 font-medium text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight"
          >
            {firstLabel}
          </p>

          <p
            ref={secondLabelRef}
            className="font-medium text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight"
          >
            {secondLabel}
          </p>
          {description && (
            <p
              ref={descriptionRef}
              dangerouslySetInnerHTML={{
                __html: innerText.join(" "),
              }}
              className="font-geometri text-right mt-4 place-self-end text-zinc-600 dark:text-zinc-300 w-[350px]"
            ></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
