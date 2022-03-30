import React, { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Button from "../../components/general/button/Button";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";

const Index = () => {
  const size = useWindowSize();
  const appRef = useRef();
  const scrollContainer = useRef();
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      document.body.style.height = `${
        scrollContainer.current !== null &&
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }, 2000);
  }, [size.height]);

  useIsomorphicLayoutEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 15;
    if (scrollContainer.current !== null) {
      scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg)`;
    }
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <Layout>
      <div
        ref={appRef}
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden"
      >
        <div ref={scrollContainer} className="mx-40">
          <Jumbotron
            firstLabel="SAY"
            secondLabel="HELLO."
            description="If you have any questions or just want to say hi. please fill out the form below."
          />

          <div className="flex items-center justify-center mt-6 sm:w-1/2 mx-auto min-h-screen">
            <form>
              <h2 className="text-4xl font-geometric font-medium mb-20">
                contact form.
              </h2>
              <div className="flex items-center space-x-4 my-4 ">
                <div className="flex sm:flex-col space-y-2 flex-1">
                  <label className="font-geometric text-sm font-normal">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="border p-2 border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded font-geometric text-sm"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2">
                  <label className="font-geometric text-sm font-normal">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border p-2 border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded font-geometric text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-geometric text-sm font-normal">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  className="border p-2 border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded font-geometric text-sm"
                />
              </div>
              <div className="justify-end mt-4">
                <Button>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default Index;
