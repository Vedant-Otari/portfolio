import React from "react";
import img from "../assests/images/hero-img.png";
import blob1 from "../assests/images/blob1.svg";
import blob2 from "../assests/images/blob2.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-img bg-cover bg-left-bottom sm:bg-top landscape:bg-top bg-no-repeat bg-primary lg:bg-none flex justify-center landscape:w-full bg-fixed h-screen"
    >
      <div className="flex w-full justify-center lg:justify-between overflow-hidden flex-col lg:flex-row">
        <div className="pt-20 lg:pt-0 lg:w-3/5 flex justify-center flex-col px-7 lg:px-14">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-secondary text-7xl lg:text-8xl font-semibold"
          >
            I'm Vedant Otari
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-slate-400 md:text-slate-600  font-medium text-3xl lg:text-4xl pt-4 pl-1"
          >
            Developer | Engineer
          </motion.div>
        </div>
        <div className="hidden lg:block w-2/5 bg-transparent relative">
          <motion.img
            initial={{ opacity: 0, x: "100%", rotateZ: 45,scale:1.5}}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ delay: 1.8, duration: 1.5,type:"spring", stiffness: 50, damping: 10 }}
            className="object-contain object-bottom scale-150 top-10 h-full w-full absolute"
            src={blob2}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, x: "100%", rotateZ: 45,scale:1.5 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ delay: 2.3, duration: 1.5,type:"spring", stiffness: 50, damping: 9  }}
            className="object-contain object-center h-full w-full scale-150 top-28 absolute"
            src={blob1}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0,scale:1.25 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7, duration: 1.6 }}
            className="object-cover scale-125 object-left h-full w-full absolute"
            src={img}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
