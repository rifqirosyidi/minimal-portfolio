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
import { Line } from "rc-progress";
import Image from "next/image";

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
          <div className="grid grid-cols-7 gap-6">
            <div className="relative">
              <Line
                percent={95}
                strokeWidth={4}
                trailColor="#fc4a0bdd"
                strokeColor="#fc4a0bdd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/html.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={95}
                strokeWidth={4}
                trailColor="#2195f2dd"
                strokeColor="#2195f2dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/css-3.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={90}
                strokeWidth={4}
                trailColor="#ffde00dd"
                strokeColor="#ffde00dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/js.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={86}
                strokeWidth={4}
                trailColor="#757ab2dd"
                strokeColor="#757ab2dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/php.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={84}
                strokeWidth={4}
                trailColor="#0f7d93dd"
                strokeColor="#0f7d93dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/mysql.png"
                  layout="fixed"
                  width={50}
                  objectFit="cover"
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={90}
                strokeWidth={4}
                trailColor="#f14e32dd"
                strokeColor="#f14e32dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/git.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="relative">
              <Line
                percent={95}
                strokeWidth={4}
                trailColor="#5bd1f0dd"
                strokeColor="#5bd1f0dd"
                strokeLinecap="square"
              />
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/skill-logo/react.png"
                  layout="fixed"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>

          <div ref={headingRef}>
            <div className="flex justify-center mt-20">
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
