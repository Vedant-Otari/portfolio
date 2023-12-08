import React from "react";
import img from "../assests/images/hero-img.png";
import blob1 from "../assests/images/blob1.svg";
import blob2 from "../assests/images/blob2.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-img bg-cover bg-left-bottom sm:bg-top landscape:bg-top bg-no-repeat bg-primary lg:bg-none flex justify-center landscape:w-full bg-fixed h-screen">
      <div className="flex w-full justify-center overflow-hidden flex-col lg:flex-row">
        <div className="pt-20 lg:pt-0 lg:w-2/3 flex justify-center flex-col px-7 lg:px-14">
          <motion.div
            initial={{opacity:0,x:'-100%'}}
            animate={{opacity:1,x:0}}
            transition={{duration:1.5,delay:0.2}}
            className="text-white text-7xl lg:text-8xl font-semibold"
          >
            I'm Vedant Otari
          </motion.div>
          <motion.div
            initial={{opacity:0,x:'-100%'}}
            animate={{opacity:1,x:0}}
            transition={{duration:1.5,delay:1.2}}
             className="text-gray-800 font-medium text-3xl lg:text-4xl pt-4 pl-1">
            Developer | Engineer
          </motion.div>
        </div>
        <div className="hidden mr-14 lg:block w-1/3 bg-transparent relative">
          <img className="object-cover h-full w-full scale-125 absolute" src={blob1} alt="" />
          <img className="object-contain h-full scale-125 w-full absolute" src={blob2} alt="" />
          <img className="object-cover h-full w-full absolute" src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
