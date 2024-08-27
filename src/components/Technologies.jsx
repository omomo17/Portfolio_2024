import { FaPython, FaKaggle, FaUnity } from "react-icons/fa";
import { SiOpencv, SiPytorch, SiCsharp, SiBlender } from "react-icons/si";
import { motion } from "framer-motion";

const icons = [
    { Component: FaPython, color: "text-cyan-600", delay: 0 },
    { Component: SiOpencv, color: "text-neutral-300", delay: 0.1 },
    { Component: SiPytorch, color: "text-orange-500", delay: 0.2 },
    { Component: SiCsharp, color: "text-purple-400", delay: 0.3 },
    { Component: FaUnity, color: "text-neutral-500", delay: 0.4 },
    { Component: SiBlender, color: "text-orange-600", delay: 0.5 },
];

const renderIcon = (IconComponent, color, delay) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: delay }}
        className="rounded-2xl border-4 border-neutral-400 p-4"
    >
        <IconComponent className={`text-7xl ${color}`} />
    </motion.div>
);

const Technologies = () => {
    return (
        <div className="border-b border-neutral-400 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {icons.map(({ Component, color, delay }, index) =>
                    renderIcon(Component, color, delay)
                )}
            </div>
        </div>
    );
};

export default Technologies;