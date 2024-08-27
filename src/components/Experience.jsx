import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
            <div key={index} className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={experience.logo} alt={experience.company} className="w-20 h-20" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
                <h4 className="text-lg font-light">{experience.company}</h4>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{experience.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
