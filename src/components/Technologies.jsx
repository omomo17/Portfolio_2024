import { FaPython } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { SiBlender } from "react-icons/si";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaPython className="text-7xl text-cyan-600" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiOpencv className="text-7xl text-neutral-300" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiPytorch className="text-7xl text-orange-500" />
                </div>
                {/* <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaKaggle className="text-7xl text-cyan-500" />
                </div> */}
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiCsharp className="text-7xl text-purple-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaUnity className="text-7xl text-neutral-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <SiBlender className="text-7xl text-orange-600" />
                </div>
            </div>
        </div>
    )
}

export default Technologies
