import { useRef } from "react";
import { projects } from "../assests/utils/projectsList";
import { motion, useInView } from "framer-motion";

const Projects = ({istouch}) => {
  const delay = istouch?0:0.2

  return (
    <section id="projects" className="bg-primary pt-10">
      <h2 className=" text-3xl md:text-5xl text-secondary text-center py-5 font-bold">
        Projects
      </h2>
      <div className="grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {projects.map((project, index) => (
          <EachProject project={project} key={index} delay={delay * index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

const EachProject = ({ project,delay }) => {
  const refProject = useRef(null);
  const projectIsInView = useInView(refProject, { once: true, margin: "-50px 0px 0px 0px" });
  return (
    <motion.div
      initial={{ opacity: 0, y: "50%" }}
      animate={{
        opacity: projectIsInView ? 1 : 0,
        y: projectIsInView ? 0 : "50%",
      }}
      transition={{ duration: 0.8,delay:delay,ease:"easeOut"}}
      ref={refProject}
      className="bg-white flex shadow-md  active:scale-[1.01] shadow-gray-600 flex-col rounded-md overflow-hidden"
      
    >
      <img
        className="w-full aspect-video object-cover"
        src={project.image}
        alt={project.name}
      />
      <div className="bg-gray-700 h-full p-4 text-white">
        <h4 className=" text-center text-2xl">{project.name}</h4>
        <p className="py-2">{project.description.slice(0, 200)}</p>
        <div className="font-bold">Technologies:</div>
        {project.tech.map((t) => t + ' ')}
      </div>
    </motion.div>
  );
};
