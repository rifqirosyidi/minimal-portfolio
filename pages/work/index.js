import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Tilt from "react-parallax-tilt";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import { Fade } from "react-reveal";

const listProjects = [
  {
    name: "Devtoopia.",
    description:
      "A Simple web to write and share my articles. You can find my articles here. I've write about web development, design, and more.",
    builtWith: "Gatsby.js, TailwindCSS, Strapi",
    date: "2020",
    defaultImage: "/assets/project-img/devtoopia.png",
    link: "https://devtoopia.com",
    type: "Personal",
    category: "Web Development",
  },
  {
    name: "Quranin UI Design.",
    description:
      "UI Design for the Quranin App. This is a UI Design/Prototype for the Quranin App.",
    builtWith: "Figma",
    date: "2021",
    defaultImage: "/assets/project-img/quraninui.png",
    link: "#",
    type: "Personal",
    category: "UI Design",
  },
  {
    name: "Quranin.",
    description:
      "A Simple Quran App. Inspired by the Quranly app. This app is a simple and easy to use Quran app.",
    builtWith: "Gatsby.js, TailwindCSS, Firebase",
    date: "2021",
    defaultImage: "/assets/project-img/quranin.png",
    link: "https://quranin.gatsbyjs.io",
    type: "Personal",
    category: "Web Development",
  },
  {
    name: "Personal Portfolio.",
    description:
      "My First Personal Portfolio, I was so happy for being able to fully deploy my portfolio at the first time back then :)",
    builtWith: "HTML, CSS, JavaScript",
    date: "2018",
    defaultImage: "/assets/project-img/personal-portfolio.png",
    link: "https://rifqirosyidi.github.io",
    type: "Personal",
    category: "Front-End Web Development",
  },

  {
    name: "Any Recipes.",
    description:
      "A simple recipe web. You can find recipes here. Built using Edamam API",
    builtWith: "React.js, Material UI",
    date: "2019",
    defaultImage: "/assets/project-img/recipes.png",
    link: "https://any-recipes.netlify.app",
    type: "Personal",
    category: "Web Development",
  },
  {
    name: "3D First-Person Experiment",
    description:
      "3d First-Person Experiment. This is my three.js project, (I'm not a 3D Artist). This is just a simple 3D Web Using First-Person Camera.",
    builtWith: "HTML, CSS, Three.js, GSAP",
    date: "2020",
    defaultImage: "/assets/project-img/3dportfolio.png",
    link: "https://tiny-sable-9f4f93.netlify.app/",
    type: "Personal",
    category: "3D Web Development",
  },

  {
    name: "Rief Planetary",
    description:
      "After learning three.js after a while, i've gain a good understanding of how three.js work, Object, Position, Rotation, Lighting, Scene, Camera, Shader and many more.",
    builtWith: "HTML, CSS, Three.js, GSAP",
    date: "2022",
    defaultImage: "/assets/project-img/planetary.png",
    link: "https://riefplanetary.netlify.app",
    type: "Personal",
    category: "3D Web Development",
  },
];

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

  return (
    <Layout>
      <div ref={appRef}>
        <div>
          <div className="sm:mx-40">
            <Jumbotron
              firstLabel="WORK"
              secondLabel="EXP."
              description="I have a lot of projects and work that I have done. here is a list of some of them."
            />

            <div className="mb-96">
              {listProjects.map((project, i) => (
                <div key={i} className="text-center mt-20">
                  <Fade bottom>
                    <div className="hidden lg:block relative w-fit h-full mx-auto cursor-pointer group">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        passHref
                      >
                        <Image
                          className="mx-auto blur-sm transition duration-1000 group-hover:blur-none brightness-50 group-hover:brightness-100"
                          src={project.defaultImage}
                          alt="project1"
                          width={800}
                          height={300}
                        />
                        <h3 className="absolute top-1/2 left-1/2 group-hover:opacity-0 transition duration-500 -translate-x-1/2 -translate-y-1/2 font-geometric text-white text-5xl">
                          {project.name}
                        </h3>
                      </a>
                    </div>
                    <div className="lg:hidden relative">
                      <a href={project.link} passHref>
                        <Image
                          className="rounded-sm"
                          src={project.defaultImage}
                          alt="project1"
                          width={800}
                          height={400}
                        />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        passHref
                      >
                        <h3 className="text-left sm:text-center font-geometric text-3xl my-4">
                          {project.name}
                        </h3>
                      </a>
                    </div>
                    <div className="my-6">
                      <p className="hidden sm:block font-geometric mb-2">
                        {project.date}
                      </p>
                      <p className="font-primary text-left sm:text-center text-zinc-500 w-full sm:w-[420px] mx-auto">
                        {project.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 items-start text-left sm:text-center justify-items-stretch gap-6 mx-auto">
                      <div>
                        <p className="font-geometric">category.</p>
                        <p className="font-primary text-zinc-500 dark:text-zinc-500">
                          {project.category}
                        </p>
                      </div>
                      <div>
                        <p className="font-geometric">built with.</p>
                        <p className="font-primary text-zinc-500 dark:text-zinc-500">
                          {project.builtWith}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BackToTop />

      {/* <div className="fixed top-1/2 left-40">
        <p className="font-primary transform -rotate-90 ">less.</p>
      </div>
      <div className="fixed top-1/2 right-40">
        <p className="font-primary transform -rotate-90 ">more.</p>
      </div> */}
    </Layout>
  );
};

export default Index;
