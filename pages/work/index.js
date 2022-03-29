import Image from "next/image";
import React, { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Tilt from "react-tilt";
import Layout from "../../components/layout/layout";

const listProjects = [
  {
    name: "Personal Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Front-End Web Development",
  },
  {
    name: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Design",
  },
  {
    name: "Personal Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Front-End Web Development",
  },
  {
    name: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Design",
  },
  {
    name: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Design",
  },
  {
    name: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Design",
  },
  {
    name: "UI Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore cum officia incidunt nesciunt. Tempora dolore",
    defaultImage: "https://picsum.photos/1000/300",
    minimalImage: "https://picsum.photos/1000/300",
    link: "https://picsum.photos/1000/300",
    type: "Personal",
    category: "Design",
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
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useIsomorphicLayoutEffect(() => {
    rafId = requestAnimationFrame(() => skewScrolling());

    if (scrollContainer.current === null) {
      return cancelAnimationFrame(rafId);
    }
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
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
        <div ref={scrollContainer} className="pt-40">
          <div className="mx-40 ">
            <h2 className="text-center font-geometric text-4xl font-bold ">
              Work & Projects.
            </h2>
            <p className="font-geometric text-center mt-4 text-zinc-500">
              I have a lot of projects and work that I have done.
              <br />
              here is a list of some of them.
            </p>

            <div className="mb-96">
              {listProjects.map((project, i) => (
                <div key={i} className="text-center mt-20">
                  <div className="w-fit mx-auto">
                    <Tilt options={{ max: 20, width: 800 }}>
                      <Image
                        className="rounded mx-auto"
                        src="https://picsum.photos/1000/300"
                        alt="project1"
                        width={800}
                        height={300}
                      />
                    </Tilt>
                  </div>
                  <h3 className="font-geometric text-2xl my-4">
                    {project.name}
                  </h3>
                  <p className="w-1/3 mx-auto font-primary text-zinc-400 dark:text-zinc-500">
                    {project.description}
                  </p>

                  <p className="mt-4 italic font-geometric">
                    {project.category}
                  </p>

                  <button className="bg-blue-500 text-white font-geometric hover:bg-primary-600 font-bold py-2 px-4 rounded shadow-lg shadow-blue-500/50 mt-4">
                    More
                  </button>

                  <div className="border-b w-1/2 border-zinc-300 dark:border-zinc-500 mx-auto mt-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
