import React from "react";
import img from "../assests/images/about-img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-white pt-14" id="about">
      <h2 className="text-center text-4xl md:mb-8 md:text-5xl md:py-3 w-full">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div></div>
        <img
          className="md:row-start-1 mx-auto md:col-start-1 md:col-end-3 w-1/3 lg:w-1/4 rounded-xl my-6 md:my-0"
          src={img}
          alt="Profile"
        />
        <div className="flex lg:text-lg flex-col md:row-start-2 md:col-start-1 col-end-3 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:w-full md:w-2/3 py-5 mx-auto px-7">
          <div className="py-2">
            <span className="font-semibold">Name: </span>
            <span className="font-normal text-gray-500">
              {" "}
              Vedant Milind Otari{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Email: </span>
            <span className="font-normal text-gray-500">
              {" "}
              <a
                rel="noreferrer"
                href="mailto:vedantmotari24@gmail.com"
                target="_blank"
              >
                <i> vedantmotari24@gmail.com</i>
              </a>{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Phone: </span>
            <span className="font-normal text-gray-500">
              {" "}
              <a rel="noreferrer" href="tel:+91 9049269139" target="_blank">
                +91 9049269139
              </a>{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Location: </span>
            <span className="font-normal text-gray-500">
              <a
                rel="noreferrer"
                href="https://maps.app.goo.gl/kGFDNpo88pMtSsc87"
                target="_blank"
              >
                {" "}
                Kolhapur, Maharashtra, India
              </a>{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Degree: </span>
            <span className="font-normal text-gray-500">
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1vbrvwHnIUqgse3--5G3Czbe892FofvtD/view?usp=sharing"
                target="_blank"
              >
                {" "}
                B.Tech. ( Computer Science and Engineering )
              </a>{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Education: </span>
            <span className="font-normal text-gray-500">
              <a
                rel="noreferrer"
                href="https://www.kitcoek.in/"
                target="_blank"
              >
                {" "}
                KIT's College of Engineering, Kolhapur
              </a>{" "}
            </span>
          </div>
        </div>
        <div></div>
        <div className="md:row-start-4 md:col-start-1 md:col-end-4 h-fit bg-secondary flex w-full px-5 py-3 md:py-4 justify-around text-3xl">
          <a
            href="https://www.linkedin.com/in/vedant-otari/ "
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin className="text-white hover:text-blue-500 hover:text-4xl duration-300" />
          </a>
          <a
            href="https://github.com/Vedant-Otari// "
            rel="noreferrer"
            target="_blank"
            title="Github"
          >
            <FaGithubSquare className="text-white hover:text-gray-700 hover:text-4xl duration-300 " />
          </a>
          <a
            href="https://leetcode.com/Vedant_Otari/ "
            rel="noreferrer"
            target="_blank"
            title="Leetcode"
          >
            <SiLeetcode className="text-white  hover:text-orange-500 hover:text-4xl duration-300 " />
          </a>
        </div>
        <article className="p-5 w-screen md:w-auto md:rounded-tl-3xl bg-tertiary md:col-start-3 md:row-start-1 md:row-end-3 flex items-center md:text-left md:p-10 text-white mx-auto md:text-xl text-center">
          Committed to enhancing organizational excellence, I aspire to embody
          the company culture, amplify my skills, and become an indispensable
          contributor.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          soluta! Molestiae nesciunt fugit iure maxime, iste labore! Maiores,
          alias necessitatibus?
        </article>
      </div>
    </section>
  );
}
