import React from "react";
import wave1 from "../assests/images/wave1.svg";
import wave2 from "../assests/images/wave2.svg";
import resume from "../assests/resumes/Vedant_Otari_resume.pdf";
import { IoIosMail } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-secondary flex flex-col justify-between pt-16 lg:pt-24 min-h-[62vh]"
    >
      <div>
        <h2 class="mb-4  text-3xl md:text-5xl  font-bold text-center text-white">Contact</h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Here are my some of my social links. Feel free to contact me.
          <div className="text-white pt-10 w-fit mx-auto">
            <a
              rel="noreferrer"
              href="mailto:vedantmotari24@gmail.com"
              target="_blank"
              className="w-fit flex justify-center px-5 py-3 md:py-4 group active:text-2xl"
            >
              <div className="flex items-center gap-3">
                <IoIosMail />
                vedantmotari24@gmail.com
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vedant-otari/ "
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
              className="w-fit flex justify-center px-5 py-3 md:py-4 group active:text-2xl"
            >
              <div className="flex items-center gap-3">
                <FaLinkedin />
                LinkedIn
              </div>
            </a>
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              title="LinkedIn"
              className="w-fit flex justify-center px-5 py-3 md:py-4 group active:text-2xl"
            >
              <div className="flex items-center gap-3">
                <IoDocumentTextSharp />
                My Resume
              </div>
            </a>
          </div>
        </p>
      </div>
      <div className="relative">
        <img className="absolute scale-x-[-1] opacity-90" src={wave2} alt="" />
        <img className="" src={wave1} alt="" />
      </div>
    </section>
  );
}
