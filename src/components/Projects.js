import React, { useState } from "react";
import { projects } from "../assests/utils/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === projects.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-screen bg-slate-300">
      <h2 className="py-6 text-4xl text-center">My Projects</h2>
      <div className="flex h-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-200 flex flex-col  w-full ${index === currentIndex ? "" : "hidden"}`}
          >
            <h4 className="text-center text-2xl">{project.name}</h4>
            <img className="w-full" key={index} alt={`carousel-${index}`} src={project.image} />
          </div>
        ))}
      </div>

      <button
        className="absolute bg-white left-0 top-1/2 transform -translate-y-1/2"
        onClick={handlePrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 96 960 960"
          width="50"
          color="white"
        >
          <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
        </svg>
      </button>
      <button
        className="absolute bg-white right-0 top-1/2 transform -translate-y-1/2"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50"
          viewBox="0 96 960 960"
          width="50"
          color="white"
        >
          <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
