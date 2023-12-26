import React, { useRef } from "react";
import img from "../assests/images/about-img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, useInView } from "framer-motion";

export default function About() {
  const refLinks = useRef(null);
  const linkIsInView = useInView(refLinks, { once: true });
  const refInfo = useRef(null);
  const infoIsInView = useInView(refInfo, { once: true });
  const refPhoto = useRef(null);
  const photoIsInView = useInView(refPhoto, { once: true });
  const refAbout = useRef(null);
  const aboutIsInView = useInView(refAbout, { once: true });
  return (
    <section className="bg-white pt-14 md:pt-16" id="about">
      <h2 className="text-center font-bold text-secondary md:mb-8  text-3xl md:text-5xl  md:py-3">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto auto auto]">
        <motion.img
          ref={refPhoto}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{
            opacity: photoIsInView ? 1 : 0,
            x: photoIsInView ? 0 : "-100%",
          }}
          transition={{ duration: 1 }}
          className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 mx-auto w-1/3 lg:w-1/5 rounded-xl mt-6 md:mt-0"
          src={img}
          alt="Profile"
        />
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: infoIsInView ? 1 : 0,
            x: infoIsInView ? 0 : "100%",
          }}
          transition={{ duration: 1 }}
          ref={refInfo}
          className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 flex lg:text-lg flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:w-full md:w-2/3 py-5 mx-auto px-7"
        >
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
        </motion.div>
        <motion.div
          ref={refLinks}
          initial={{ opacity: 0, x: "-100%" }}
          animate={{
            opacity: linkIsInView ? 1 : 0,
            x: linkIsInView ? 0 : "-100%",
          }}
          transition={{ duration: 1 }}
          className="md:col-start-1 items-center md:col-end-4 md:row-start-3 md:row-end-4 bg-secondary flex w-full justify-around text-3xl"
        >
          <a
            href="https://www.linkedin.com/in/vedant-otari/ "
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
            className="w-full flex justify-center px-5 py-3 md:py-4 group active:text-4xl"
          >
            <FaLinkedin className="text-white w-full group-active:text-blue-500 duration-300" />
          </a>
          <a
            href="https://github.com/Vedant-Otari// "
            rel="noreferrer"
            target="_blank"
            title="Github"
            className="w-full flex justify-center px-5 py-3 md:py-4 group active:text-4xl"
          >
            <FaGithubSquare className="text-white group-active:text-gray-400 duration-300 " />
          </a>
          <a
            href="https://leetcode.com/Vedant_Otari/ "
            rel="noreferrer"
            target="_blank"
            title="Leetcode"
            className="w-full flex justify-center px-5 py-3 md:py-4 group active:text-4xl"
          >
            <SiLeetcode className="text-white group-active:text-orange-500 duration-300 " />
          </a>
        </motion.div>
        <motion.article
        ref={refAbout}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: aboutIsInView ? 1 : 0,
          x: aboutIsInView ? 0 : "100%",
        }}
        transition={{ duration: 1 }}
        className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 p-5 md:rounded-tl-3xl bg-tertiary flex items-center md:text-left md:p-10 text-white mx-auto md:text-xl text-center">
          Passionate CSE graduate with expertise in web development. Dedicated to creating efficient and user-friendly applications.
          <br />
          <br />
          Skilled problem-solver with a strong understanding of software development methodologies and best practices.
          <br />
          <br />
          Committed to enhancing organizational excellence, I aspire to embody the company culture, amplify my skills, and become an indispensable contributor.
        </motion.article>
      </div>
    </section>
  );
}
