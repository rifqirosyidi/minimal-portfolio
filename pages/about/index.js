import React from "react";
import {
  RiCss3Fill,
  RiGatsbyFill,
  RiHtml5Fill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiDjango,
  SiFigma,
  SiGimp,
  SiGit,
  SiGraphql,
  SiInkscape,
  SiJavascript,
  SiKdenlive,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import GridSvg from "../../assets/svg/GridSvg";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import Layout from "../../components/layout/layout";

const About = () => {
  const size = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <Jumbotron firstLabel="BIO" secondLabel="GRAPHY" />
    </Layout>
  );
};

export default About;
