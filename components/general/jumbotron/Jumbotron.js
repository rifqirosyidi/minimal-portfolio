import React from "react";
import GridSvg from "../../../assets/svg/GridSvg";

const Jumbotron = ({ firstLabel, secondLabel, description }) => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="absolute top-1/2 mx-auto -z-50">
        <GridSvg />
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col font-primary ">
          <p className="text-blue-500 dark:text-blue-400 font-light md:text-2xl lg:text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight">
            {firstLabel}
          </p>

          <p className="font-light md:text-2xl lg:text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight">
            {secondLabel}
          </p>
          {description && (
            <p className="font-geometry mt-4 place-self-end text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
