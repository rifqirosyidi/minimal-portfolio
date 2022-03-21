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
        <div className="absolute top-1/2 mx-auto">
          <GridSvg />
        </div>
        <h2 className="flex items-center space-x-20 mx-40 ">
          <div className="flex-1 max-w-[600px]">
            <p className="font-mono font-bold">Bio.</p>
            <p className="font-primary font-normal text-justify">
              Hi, I am Rifqi Rosyidi, i'm {new Date().getFullYear() - 1998}.
              While I'm a proficient Full-Stack Developer, my expertise is in
              Front End Development Such as HTML/CSS, Responsive Design, UI
              Design, React.js, Next.js, Gatsby.js.
            </p>
            <p className="font-primary font-normal text-justify my-5">
              Currently learning and working on the following technologies:
              Svelte.js, Three.js, and UI Design such as Figma, InkScape, Gimp.
            </p>

            <p className="font-mono font-bold">Socials.</p>
            <div className="flex items-center space-x-4 my-4">
              <Socials />
            </div>
          </div>
          <div className="flex-1 font-primary text-left md:text-2xl lg:text-7xl xl:text-8xl 2xl:text-[250px] 2xl:font-extralight">
            <p>about me.</p>
          </div>
          <p className="flex-1 max-w-[600px]">
            <p className="font-mono font-bold ">Skills.</p>
            <p className="font-primary font-normal my-4">
              Here's a list of my development skills:
            </p>
            <div className="grid grid-cols-4 gap-6">
              <RiHtml5Fill className="text-primary text-4xl" />
              <RiCss3Fill className="text-primary text-4xl" />
              <SiJavascript className="text-primary text-4xl" />
              <RiReactjsFill className="text-primary text-4xl" />
              <RiGatsbyFill className="text-primary text-4xl" />
              <SiGraphql className="text-primary text-4xl" />
              <SiGit className="text-primary text-4xl" />
              <SiPython className="text-primary text-4xl" />
              <SiPhp className="text-primary text-4xl" />
              <SiDjango className="text-primary text-4xl" />
              <SiTailwindcss className="text-primary text-4xl" />
              <SiMysql className="text-primary text-4xl" />
              <SiNodedotjs className="text-primary text-4xl" />
            </div>

            <p className="font-primary font-normal my-4">
              Here's a list of my design/multimedia skills:
            </p>
            <div className="grid grid-cols-4 gap-6">
              <SiInkscape className="text-primary text-4xl" />
              <SiGimp className="text-primary text-4xl" />
              <SiFigma className="text-primary text-4xl" />
              <SiKdenlive className="text-primary text-4xl" />
            </div>
          </p>
        </h2>
      </div>
    </Layout>
  );
};

export default About;
