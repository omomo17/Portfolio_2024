import { HERO_CONTENT } from "../constants";
import profilePciture from "../assets/kirbyIcon.png";
import { motion } from "framer-motion";

const animationParams = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay},
    }
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-400 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={animationParams(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">Akiyoshi Omomo</motion.h1>
                        <motion.span variants={animationParams(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Project Engineer</motion.span>
                        <motion.p variants={animationParams(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-20">
                    <div className="flex justify-center">
                        <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 1.4, delay: 1.2}}
                            className="border-r-emerald-50 rounded-lg shadow-lg filter brightness-75"
                            src={profilePciture}
                            alt="profile image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;