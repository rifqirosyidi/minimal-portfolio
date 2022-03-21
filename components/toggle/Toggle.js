import React from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className=" items-center text-right group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <p className="font-geometric">{theme}.</p>
    </button>
  );
};

export default Toggle;
