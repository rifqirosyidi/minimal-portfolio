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
import GridSvg from "../../assets/svg/GridSvg";
import Layout from "../../components/layout/layout";
import Socials from "../../components/socials/Socials";

const About = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="absolute top-1/2 mx-auto -z-50">
          <GridSvg />
        </div>
        <div className="flex items-center justify-center ">
          <p className="font-primary font-light md:text-2xl lg:text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight">
            <span className="text-blue-500">BIO</span>
            <br />
            <span>GRAPHY</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
