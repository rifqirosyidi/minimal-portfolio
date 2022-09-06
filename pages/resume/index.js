import React, { useRef } from "react";
import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "react-use";
import Layout from "../../components/layout/layout";
import Slide from "react-reveal/Slide";
import Button from "../../components/general/button/Button";
import BackToTop from "../../components/navigation/backtotop/BackToTop";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";

const Index = () => {
  const headingRef = useRef();

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
  }, []);

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
            <div className="flex justify-center mt-20">
              <Slide bottom>
                <Button asLink href="/RESUME_RIFQI_ROSYIDI.pdf" openNewTab>
                  Download
                </Button>
              </Slide>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </Layout>
  );
};

export default Index;
