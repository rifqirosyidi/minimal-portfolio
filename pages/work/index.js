import Image from "next/image";
import React from "react";
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
];

const Index = () => {
  return (
    <Layout>
      <div className="pt-40 min-h-screen">
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
                <Image
                  className="rounded mx-auto"
                  src="https://picsum.photos/1000/300"
                  alt="project1"
                  width={800}
                  height={300}
                />

                <h3 className="font-geometric text-2xl my-4">{project.name}</h3>
                <p className="w-1/3 mx-auto font-primary text-zinc-400 dark:text-zinc-500">
                  {project.description}
                </p>

                <p className="mt-4 italic font-geometric">{project.category}</p>

                <button className="bg-blue-500 text-white font-geometric hover:bg-primary-600 font-bold py-2 px-4 rounded shadow-lg shadow-blue-500/50 mt-4">
                  More
                </button>

                <div className="border-b w-1/2 mx-auto mt-10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-40">
        <p className="font-primary transform -rotate-90 ">less.</p>
      </div>
      <div className="fixed top-1/2 right-40">
        <p className="font-primary transform -rotate-90 ">more.</p>
      </div>
    </Layout>
  );
};

export default Index;
