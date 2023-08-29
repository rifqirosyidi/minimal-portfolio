import React from "react";

import { Fade } from "react-reveal";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";

const About = () => {
  const size = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <Jumbotron
        firstLabel="BLOG"
        secondLabel="WRITING."
        description="Here are some of the things I've written."
      />
      <BackToTop />
    </Layout>
  );
};

export default About;
