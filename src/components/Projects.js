import { projects } from "../assests/utils/projectsList"

const Projects = () => {
  return (
    <section id="projects" className="bg-primary pt-10">
      <h2 className="text-3xl text-center py-5">Projects</h2>
      <div className="grid grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {
          projects.map((project,index)=>(
            <div className="bg-white flex shadow-md  active:scale-[1.01] shadow-gray-600 flex-col rounded-md overflow-hidden" key={index}>
              <img className="w-full aspect-video object-cover" src={project.image} alt={project.name} />
              <div className="bg-gray-700 h-full p-4 text-white">
                <h4 className=" text-center text-2xl">{project.name}</h4>
                <p className="py-2">{project.description.slice(0,200)}</p>
                <div className="font-bold">Technologies:</div>
                {project.tech.map((t)=>(t+" "))}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects