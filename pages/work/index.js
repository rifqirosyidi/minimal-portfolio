import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Tilt from "react-parallax-tilt";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import styles from "./styles.module.css";
import Button from "../../components/general/button/Button";

const listProjects = [
  {
    name: "Devtoopia.",
    description:
      "A Simple web to write and share my articles. You can find my articles here. I've write about web development, design, and more.",
    builtWith: "Gatsby.js, TailwindCSS, Strapi",
    date: "2020",
    defaultImage: "/assets/project-img/devtoopia.png",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
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
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
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
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Web Development",
  },
  {
    name: "Personal Portfolio.",
    description:
      "My First Personal Portfolio, A Simple Portfolio to show my skills and projects.",
    builtWith: "HTML, CSS, JavaScript",
    date: "2018",
    defaultImage: "/assets/project-img/personal-portfolio.png",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
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
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://any-recipes.netlify.app",
    type: "Personal",
    category: "Web Development",
  },
  {
    name: "3D First-Person Portfolio",
    description:
      "3d First-Person Portfolio. This is my first 3D Web Project, (I'm not a 3D Artist). This is just a simple 3D Portfolio.",
    builtWith: "HTML, CSS, Three.js, GSAP",
    date: "2020",
    defaultImage: "/assets/project-img/3dportfolio.png",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "3D Web Development",
  },
  {
    name: "Landing Page UI",
    description:
      "Landing Page UI. This is a simple Landing Page UI for a company.",
    builtWith: "Figma",
    date: "2021",
    defaultImage: "/assets/project-img/landing.png",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Team",
    category: "UI Design",
  },
];

let rafId;
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
        <div ref={scrollContainer}>
          <div className="mx-40 ">
            <Jumbotron
              firstLabel="WORK"
              secondLabel="EXPERIENCE"
              description={
                <p>
                  I have a lot of projects and work that I have done.
                  <br />
                  here is a list of some of them.
                </p>
              }
            />

            <div className="mb-96">
              {listProjects.map((project, i) => (
                <div key={i} className="text-center mt-20">
                  <div className="relative w-fit mx-auto cursor-pointer group">
                    <a href={project.link} passHref>
                      <Tilt
                        className={styles.parallaxEffect}
                        perspective={1000}
                      >
                        <Image
                          className="rounded-md mx-auto blur-sm transition duration-1000 group-hover:blur-none brightness-50 group-hover:brightness-100"
                          src={project.defaultImage}
                          alt="project1"
                          width={800}
                          height={300}
                        />
                        <h3
                          className={`${styles.parallaxInnerElement} absolute parallax-inner-element drop-shadow-md top-0 bottom-0 left-0 right-0 font-geometric text-white text-5xl`}
                        >
                          {project.name}
                        </h3>
                      </Tilt>
                    </a>
                  </div>
                  <div className="my-6">
                    <p className="font-geometric text-blue-500 dark:text-blue-400 mb-2">
                      description.
                    </p>
                    <p className="font-primary text-center w-[400px] mx-auto">
                      {project.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 items-start justify-items-stretch gap-6 w-[800px] mx-auto">
                    <p className="font-geometric text-blue-500 dark:text-blue-400">
                      category.
                    </p>
                    <p className="font-geometric text-blue-500 dark:text-blue-400">
                      created at.
                    </p>
                    <p className="font-geometric text-blue-500 dark:text-blue-400">
                      built with.
                    </p>
                    <p className="font-geometric text-blue-500 dark:text-blue-400">
                      type.
                    </p>

                    <p className="font-primary text-zinc-500 dark:text-zinc-500">
                      {project.category}
                    </p>
                    <p className="font-primary text-zinc-500 dark:text-zinc-500">
                      {project.date}
                    </p>
                    <p className="font-primary text-zinc-500 dark:text-zinc-500">
                      {project.builtWith}
                    </p>
                    <p className="font-primary text-zinc-500 dark:text-zinc-500">
                      {project.type}
                    </p>
                  </div>
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
