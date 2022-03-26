import React from "react";

const Button = ({
  type = "button",
  asLink = false,
  href,
  children,
  ...props
}) => {
  return (
    <>
      {asLink ? (
        <a
          href={href}
          className="block mx-auto w-fit font-geometric bg-blue-600 hover:bg-primary-600 text-white py-2 px-4 rounded shadow-lg shadow-blue-500/50"
        >
          {children}
        </a>
      ) : (
        <button
          {...props}
          className="block mx-auto w-fit font-geometric bg-blue-600 hover:bg-primary-600 text-white py-2 px-4 rounded shadow-lg shadow-blue-500/50"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
