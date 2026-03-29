import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion, useInView } from "framer-motion";

export default function About() {
  const refLinks = useRef(null);
  const linkIsInView = useInView(refLinks, { once: true });
  const refInfo = useRef(null);
  const infoIsInView = useInView(refInfo, { once: true });
  const refAbout = useRef(null);
  const aboutIsInView = useInView(refAbout, { once: true });
  return (
    <section className="bg-white pt-14 md:pt-16" id="about">
      <h2 className="text-center font-bold text-secondary md:mb-8  text-3xl md:text-5xl  md:py-3">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto]">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: infoIsInView ? 1 : 0,
            x: infoIsInView ? 0 : "100%",
          }}
          transition={{ duration: 1 }}
          ref={refInfo}
          className="flex flex-col gap-1 px-7 py-5 mx-auto w-full max-w-3xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:text-lg md:px-10 md:py-8"
        >
          <div className="py-2">
            <span className="font-semibold">Name: </span>
            <span className="font-normal text-gray-500">
              Vedant Milind Otari
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Email: </span>
            <span className="font-normal text-gray-500">
              <a
                rel="noreferrer"
                href="mailto:vedantmotari24@gmail.com"
                target="_blank"
              >
                <i> vedantmotari24@gmail.com</i>
              </a>
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Location: </span>
            <span className="font-normal text-gray-500">
              <a
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                href="https://www.kitcoek.in/"
                target="_blank"
              >
                {" "}
                KIT's College of Engineering, Kolhapur
              </a>{" "}
            </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Passout: </span>
            <span className="font-normal text-gray-500"> 2023 </span>
          </div>
          <div className="py-2">
            <span className="font-semibold">Currently Working: </span>
            <span className="font-normal text-gray-500">
              Mobifilia Software India LLP (2+ yrs)
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
          className="order-3 items-center py-2 bg-secondary flex w-full justify-around text-4xl md:col-span-2"
        >
          <a
            href="https://www.linkedin.com/in/vedant-otari/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-full flex justify-center px-5 py-3 md:py-4 
                      group transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedin className="text-white transition-colors duration-300 group-hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/Vedant-Otari/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            className="w-full flex justify-center px-5 py-3 md:py-4 
                      group transition-transform duration-300 hover:scale-125"
          >
            <FaGithubSquare className="text-white transition-colors duration-300 group-hover:text-gray-200" />
          </a>
          <a
            href="https://leetcode.com/Vedant_Otari/"
            target="_blank"
            rel="noopener noreferrer"
            title="Leetcode"
            className="w-full flex justify-center px-5 py-3 md:py-4 
                      group transition-transform duration-300 hover:scale-125"
          >
            <SiLeetcode className="text-white transition-colors duration-300 group-hover:text-amber-500" />
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
          className="mx-auto flex items-center bg-tertiary p-5 text-center text-white md:rounded-tl-xl md:p-10 md:text-left md:text-xl"
        >
          Software Developer with hands-on experience building scalable
          full-stack applications using React, Node.js, Laravel, and Vue.js.
          <br />
          <br />
          Strong focus on designing RESTful APIs, optimizing database
          performance, and developing efficient, maintainable systems.
          <br />
          <br />
          Experienced in integrating third-party services like Stripe,
          ShipStation, and SendGrid, with a focus on delivering reliable and
          production-ready solutions.
        </motion.article>
      </div>
    </section>
  );
}
