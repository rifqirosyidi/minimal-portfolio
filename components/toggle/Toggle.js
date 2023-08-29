import React from "react";
import { useTheme } from "next-themes";
import { TbMoon, TbSun } from "react-icons/tb"

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className=" items-center text-right group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <p className="font-geometric">{
        theme == "light" ? <TbSun /> :
        theme == "dark" ? <TbMoon /> : 
        theme
      }</p> 
    </button>
  );
};

export default Toggle;
