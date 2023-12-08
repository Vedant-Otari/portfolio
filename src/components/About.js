import React from "react";
import img from "../assests/images/about-img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function About() {
  return (
    <section className="bg-gray-100 pt-3" id="about">
      <div className="flex flex-col lg:flex-row overflow-hidden m-6 shadow-md shadow-gray-400 bg-white rounded-xl">
        <h3 className="text-center text-2xl pb-4 font-mono">Profile</h3>
        <img className="mx-auto rounded-2xl shadow-sm w-1/2" src={img} alt="" />
        <div className="flex flex-col py-5 px-7 lg:w-3/4">
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
        <div className="bg-gray-400 flex w-full px-5 py-2 justify-around text-3xl">
          <a
            href="https://www.linkedin.com/in/vedant-otari/ "
            rel="noreferrer"
            target="_blank"
            >
            <FaLinkedin className="text-white hover:text-blue-500 hover:text-4xl duration-300" />
          </a>
          <a
            href="https://github.com/Vedant-Otari// "
            rel="noreferrer"
            target="_blank"
            >
            <FaGithubSquare className="text-white hover:text-gray-700 hover:text-4xl duration-300 " />
          </a>
          <a
            href="https://leetcode.com/Vedant_Otari/ "
            rel="noreferrer"
            target="_blank"
          >
            <SiLeetcode className="text-white  hover:text-orange-500 hover:text-4xl duration-300 " />
          </a>
        </div>
      </div>

      <div className="bg-slate-400 p-5 text-white">
        <h2 className="text-center text-4xl w-full">About Me</h2>
        <article className="pt-5 text-center">
          Committed to enhancing organizational excellence, I aspire to embody
          the company culture, amplify my skills, and become an indispensable
          contributor.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, soluta! Molestiae nesciunt fugit iure maxime, iste labore! Maiores, alias necessitatibus?
        </article>
      </div>
    </section>
  );
}
