import React from "react";
import {
  RiFacebookFill,
  RiGithubLine,
  RiEarthLine,
  RiInstagramLine,
  RiLinkedinFill,
  RiStackOverflowFill,
} from "react-icons/ri";
import { FaHackerrank, FaDev, FaMediumM } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <div>
        <a
          className="block"
          href="https://github.com/rifqirosyidi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiGithubLine className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400 " />
        </a>
      </div>
      <div>
        <a
          href="https://stackoverflow.com/users/9675410/rief"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiStackOverflowFill className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>

      <div>
        <a
          href="https://www.hackerrank.com/rief_rosyidi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>

      <div>
        <a
          href="https://id.linkedin.com/in/rifqi-rosyidi-125804169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>
      <div>
        <a
          href="https://medium.com/@rief.rosyidi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMediumM className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>
      <div>
        <a
          href="https://devtoopia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiEarthLine className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/rief_01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramLine className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>
      <div>
        <a
          href="https://web.facebook.com/rifqi.n.rifqi.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookFill className="text-primary text-lg hover:scale-125 transform transition duration-500 hover:text-blue-500 dark:hover:text-blue-400" />
        </a>
      </div>
    </>
  );
};

export default Socials;
