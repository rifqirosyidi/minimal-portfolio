import React from "react";
import { useTheme } from "next-themes";

const Toggle = ({ to, label, name }) => {
  const { setTheme } = useTheme();
  return (
    <button
      className="relative bg-red-300 w-24 text-right group"
      onClick={() => setTheme(to)}
    >
      <p
        className={`absolute right-0 ${
          label === "NM" && `top-8`
        } transition duration-500 ease-in-out group-hover:invisible-alpha`}
      >
        {label}
      </p>
      <p
        className={`absolute right-0 ${
          label === "NM" && `top-8`
        } transition duration-500 ease-in-out hover:delay-500 invisible-alpha group-hover:visible-alpha`}
      >
        {name}
      </p>
    </button>
  );
};

export default Toggle;
