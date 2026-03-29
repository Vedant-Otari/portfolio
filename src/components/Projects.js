import { useRef, useState } from "react";
import { projects } from "../assests/utils/projectsList";
import { motion, useInView } from "framer-motion";
import ProjectDetail from "./ProjectDetail";
import defaultImage from "../assests/images/defaultImage.png";

const Projects = ({ istouch }) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedProject, setClickedProject] = useState(null);
  const delay = istouch ? 0 : 0.1;
  return (
    <>
      {showModal && (
        <ProjectDetail
          setShowModal={setShowModal}
          clickedProject={clickedProject}
        />
      )}
      <section id="projects" className="bg-primary pt-10">
        <h2 className=" text-3xl md:text-5xl text-secondary text-center py-5 font-bold">
          Projects
        </h2>
        <div className="grid grid-cols-1 p-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {projects.map((project, index) => (
            <EachProject
              project={project}
              key={index}
              delay={delay * index}
              setClickedProject={setClickedProject}
              setShowModal={setShowModal}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

const EachProject = ({ project, delay, setClickedProject, setShowModal }) => {
  const refProject = useRef(null);
  const projectIsInView = useInView(refProject, {
    once: true,
  });
  const projectImage = project.image || defaultImage;

  return (
    <motion.div
      onClick={() => {
        setClickedProject(project);
        setShowModal(true);
      }}
      whileHover={{
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          duration: 0.0,
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          duration: 0.0,
        },
      }}
      initial={{ opacity: 0, y: "50%" }}
      animate={{
        opacity: projectIsInView ? 1 : 0,
        y: projectIsInView ? 0 : "50%",
        transition: { duration: 0.8, delay: delay, ease: "easeOut" },
      }}
      ref={refProject}
      className="relative bg-white flex shadow-md active:scale-[1.01] shadow-gray-600 flex-col rounded-md overflow-hidden"
    >
      {project.is_work && (
        <div className="absolute top-0 right-0">
          <div className="w-0 h-0 
            border-t-[60px] border-t-tertiary
            border-l-[60px] border-l-transparent">
          </div>
          <span className="absolute top-3.5 right-1 text-[11px] font-bold text-white rotate-45">
            WORK
          </span>
        </div>
      )}
      <img
        className="w-full  aspect-[16/7] object-cover"
        src={projectImage}
        alt={project.name}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = defaultImage;
        }}
      />
      <div className="bg-gray-700 h-full p-4 text-white">
        <h4 className=" text-center text-2xl">{project.name}</h4>
        <p className="py-2">
          {project.description[0].split(" ").slice(0, 13).join(" ")}...
        </p>
        <div className="font-bold">Technologies:</div>
        {project.tech.join(", ")}
      </div>
    </motion.div>
  );
};
