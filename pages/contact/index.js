import React, { useRef } from "react";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Button from "../../components/general/button/Button";
import Jumbotron from "../../components/general/jumbotron/Jumbotron";
import Layout from "../../components/layout/layout";
import BackToTop from "../../components/navigation/backtotop/BackToTop";

const Index = () => {
  return (
    <Layout>
      <Jumbotron
        firstLabel="SAY"
        secondLabel="HELLO."
        description="If you have any questions or just want to say hi. please fill out the form below."
      />

      <div className="flex items-center justify-center mt-6 sm:w-1/2 mx-auto min-h-screen">
        <form
          className="w-full"
          action="https://getform.io/f/f001cd14-47b1-45f9-822a-8a3275d54df7"
          method="POST"
        >
          <h2 className="text-4xl font-geometric font-medium mb-20">
            contact form.
          </h2>
          <div className="flex flex-col sm:flex-row items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 my-4 ">
            <div className="flex flex-col space-y-2 flex-1 w-full">
              <label className="font-geometric text-sm font-normal">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border p-2 border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded font-geometric text-sm"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 w-full">
              <label className="font-geometric text-sm font-normal">
                Email
              </label>
              <input
                type="email"
                name="email"
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
              name="message"
              className="border p-2 border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded font-geometric text-sm"
            />
          </div>
          <div className="justify-end mt-4">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default Index;
