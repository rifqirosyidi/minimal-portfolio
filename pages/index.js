import { gsap } from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import GridSvg from "../assets/svg/GridSvg";
import Layout from "../components/layout/layout";
import Socials from "../components/socials/Socials";

export default function Home() {
  const hiRef = useRef();
  const summaryRef = useRef();
  const socialRef = useRef();
  const gridRef = useRef([]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const isMobile = useWindowSize().width < 768;

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
    // animate first name
    tl.from(firstNameRef.current, {
      opacity: 0,
      y: -200,
      rotateX: -90,
    }).from(firstNameRef.current, {
      x: isMobile ? 15.5 : -200,
    });

    tl.from(hiRef.current, {
      opacity: 0,
      y: -100,
      rotateX: -90,
    }).from(hiRef.current, {
      x: -100,
    });

    tl2
      .from(lastNameRef.current, {
        opacity: 0,
        rotateX: -90,
        y: 200,
      })
      .from(lastNameRef.current, {
        x: isMobile ? 15.5 : 200,
      });

    tl2
      .from(summaryRef.current, {
        opacity: 0,
        y: 100,
        rotateX: -90,
      })
      .from(summaryRef.current, {
        x: isMobile ? 15 : 100,
      });

    tl3
      .from([gridRef.current[0], gridRef.current[1]], {
        opacity: 0,
        scale: isMobile ? 1.5 : 4,
        y: 200,
        x: isMobile ? 0 : 40,
        stagger: 0.5,
      })
      .from([gridRef.current[0], gridRef.current[1]], {
        rotate: -180,
        stagger: 0.5,
      });

    tl3.from(socialRef.current.children, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });
  }, []);

  const size = useWindowSize();
  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
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
        <div className="flex flex-col">
          <p ref={hiRef} className="font-geometric text-left p-2.5">
            hi, i am
          </p>
          <h2 className="flex flex-wrap sm:flex-nowrap items-center sm:space-x-10 font-primary font-normal text-left text-7xl lg:text-7xl xl:text-8xl xl:font-light 2xl:text-[250px] 2xl:font-extralight">
            <p className="text-blue-500" ref={firstNameRef}>
              RIFQI{" "}
            </p>
            <p ref={lastNameRef}>ROSYIDI</p>
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
            <div ref={socialRef} className="flex item-center space-x-4">
              <Socials />
            </div>

            <p
              ref={summaryRef}
              className="font-geometric text-right p-0 my-4 sm:my-0 sm:p-2.5 order-first sm:order-last"
            >
              front-end web developer
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
