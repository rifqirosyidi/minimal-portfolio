import React, { useRef } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Layout from "../../components/layout/layout";
import dynamic from "next/dynamic";
import Slide from "react-reveal/Slide";
import Button from "../../components/general/button/Button";
import BackToTop from "../../components/navigation/backtotop/BackToTop";
import GridSvg from "../../assets/svg/GridSvg";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";

const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});

const Index = () => {
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

  const size = useWindowSize();
  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <div className="py-20 min-h-screen">
        <div className="mx-40">
          <Jumbotron
            firstLabel="RESUME"
            secondLabel="FOLIO."
            description="Here&lsquo;s a brief summary of my skills, experiences, and other
              information."
          />

          <div ref={headingRef}>
            <div className="flex justify-center mt-8">
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

      <BackToTop />
    </Layout>
  );
};

export default Index;
