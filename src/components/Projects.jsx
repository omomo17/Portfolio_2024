import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div className="border-b border-neutral-400 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={project.image} width={200} height={200} alt={project.title} className="mb-6 rounded"/>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-bold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.technologies.map((technology, index) => (
                                    <span 
                                        key={index} 
                                        className="rounded-full bg-neutral-700 text-neutral-200 px-4 py-1 text-sm mr-2 mb-2 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                    </div>
                </div>
            ))    
            }
            </div>
        </div>
    )
}

export default Projects
