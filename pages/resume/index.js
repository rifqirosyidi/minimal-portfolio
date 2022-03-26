import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Layout from "../../components/layout/layout";
import dynamic from "next/dynamic";
import Slide from "react-reveal/Slide";
import Button from "../../components/general/button/Button";
import BackToTop from "../../components/navigation/backtotop/BackToTop";
import GridSvg from "../../assets/svg/GridSvg";
import Tilt from "react-tilt";

const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});

const Index = () => {
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  const headingRef = useRef();
  const pdfRef = useRef();

  let tl = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });

  const tl2 = gsap.timeline({
    defaults: { duration: 1.5, ease: "power1.inOut" },
  });
  tl2.pause();

  useIsomorphicLayoutEffect(() => {
    tl.from(headingRef.current.children, {
      opacity: 0,
      stagger: 0.2,
      y: 200,
    });

    tl.from(pdfRef.current, {
      scale: 0,
      rotate: 45,
      opacity: 0,
    });

    tl2.to(pdfRef.current, {
      scale: 1.05,
    });

    pdfRef.current.addEventListener("mouseenter", () => {
      tl2.play();
    });

    pdfRef.current.addEventListener("mouseleave", () => {
      tl2.reverse();
    });
  }, []);
  return (
    <Layout>
      <div className="py-40 min-h-screen">
        <div className="mx-40">
          <div ref={headingRef}>
            <h2 className="text-center font-geometric text-4xl font-bold ">
              Resume.
            </h2>
            <p className="text-center mt-4 font-geometric">
              Here's a brief summary of my skills, experiences, and other
              information.
            </p>
            <div className="text-center mt-8">
              <Slide bottom>
                <Button asLink href="/rifqi-rosyidi-resume.pdf">
                  Download
                </Button>
              </Slide>
            </div>
          </div>
          <div
            ref={pdfRef}
            id="pdf-viewer"
            className="rounded my-10 mx-auto text-center font-geometric"
          >
            <FileViewer
              width="100%"
              fileType="pdf"
              filePath="/rifqi-rosyidi-resume.pdf"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-96 mx-auto -z-50">
        <GridSvg width={20} height={20} space={20} />
      </div>
      <BackToTop />
    </Layout>
  );
};

export default Index;
