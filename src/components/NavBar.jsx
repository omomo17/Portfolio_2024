import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
    return (
        // <nav className="flex justify-between items-center p-5 bg-gray-800 text-white">
        //     <div>
        //         <h1 className="text-2xl font-bold">React App</h1>
        //     </div>
        //     <div>
        //         <ul className="flex space-x-5">
        //             <li><a href="#" className="hover:text-gray-400">Home</a></li>
        //             <li><a href="#" className="hover:text-gray-400">About</a></li>
        //             <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        //         </ul>
        //     </div>
        // </nav>
        <nav className="mb-20 flex justify-between items-center py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" />
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    );
}

export default NavBar;