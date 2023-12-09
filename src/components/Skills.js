import React from "react";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="py-3 px-3 bg-gray-200">
      <h2 className="text-3xl py-4 text-center">My Skills</h2>
      <section className="grid grid-cols-2 gap-3">
        <div className="hover:shadow-[20px] duration-500 flex bg-white pt-4 pb-2 rounded-lg shadow-inner shadow-black flex-col items-center w-full">
          <FaReact className=""/>
          <span className="text-2xl">C</span>
        </div>
        <div className="hover:shadow-[20px] duration-500 flex bg-white pt-4 pb-2 rounded-lg shadow-inner shadow-black flex-col items-center w-full">
          <FaReact className=""/>
          <span className="text-2xl">CPP</span>
        </div>
        <div className="hover:shadow-[20px] duration-500 flex bg-white pt-4 pb-2 rounded-lg shadow-inner shadow-black flex-col items-center w-full">
          <FaReact className=""/>
          <span className="text-2xl">Javascript</span>
        </div>
        <div className="hover:shadow-[20px] duration-500 flex bg-white pt-4 pb-2 rounded-lg shadow-inner shadow-black flex-col items-center w-full">
          <FaReact className=""/>
          <span className="text-2xl">React</span>
        </div>
        <div className="hover:shadow-[20px] duration-500 flex bg-white pt-4 pb-2 rounded-lg shadow-inner shadow-black flex-col items-center w-full">
          <FaReact className=""/>
          <span className="text-2xl">Git</span>
        </div>
      </section>
    </div>
  );
}
