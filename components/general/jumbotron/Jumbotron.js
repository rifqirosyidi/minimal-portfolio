import React from "react";
import GridSvg from "../../../assets/svg/GridSvg";

const Jumbotron = ({ firstLabel, secondLabel }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="absolute top-1/2 mx-auto -z-50">
        <GridSvg />
      </div>
      <div className="flex items-center justify-center ">
        <p className="font-primary font-light md:text-2xl lg:text-7xl xl:text-8xl 2xl:text-[250px] xl:font-light 2xl:font-extralight">
          <span className="text-blue-500">{firstLabel}</span>
          <br />
          <span>{secondLabel}</span>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
