import React from "react";
import { skills } from "../assests/utils/skillsList";

export default function Skills() {
  return (
    <div className="py-3 px-3 bg-white">
      <h2 className="text-3xl py-4 text-center">My Skills</h2>
      <section className="grid grid-cols-3 gap-5 lg:grid-cols-5 lg:w-5/6 mx-auto">
        {skills.map((skill) => (
          <div key={skill.name} className="select-none flex flex-col group relative">
            <div className="p-4 bg-slate-100 w-full h-full items-center text-8xl justify-center flex">{skill.icon}</div>
            <p className="bg-gray-700 bg-opacity-50 absolute bottom-0 right-0 left-0 h-0 skill-hover duration-300 invisible flex items-center justify-center text-lg py-2 text-white">{skill.name}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
