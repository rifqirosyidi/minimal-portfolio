import React from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Layout from "../../components/layout/layout";

const Index = () => {
  const size = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    document.body.style.height = `${size.height}px`;
  }, [size.height]);

  return (
    <Layout>
      <div className="pt-40 min-h-screen">
        <div className="mx-40">
          <h2 className="text-center font-geometric text-4xl font-bold ">
            Get in touch.
          </h2>
          <p className="font-primary font-normal text-center mt-4 w-1/2  mx-auto">
            If you have any questions or just want to say hi. I&lsquo;m always
            open to discussing new projects and opportunities.
          </p>

          <div className="mt-6 w-1/2 mx-auto">
            <form>
              <div className="flex items-center space-x-4 my-4 ">
                <div className="flex flex-col space-y-2 flex-1">
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
              <div className="text-right mt-4">
                <button className="bg-blue-500 dark:bg-blue-400 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded shadow-lg shadow-blue-500/50">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
