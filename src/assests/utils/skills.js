import { FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import CLogo from "../images/c.svg"
import CPPLogo from "../images/cpp.svg"
import MaterialUi from "../images/material-ui.svg"
import { FaAws } from "react-icons/fa";

export const skills = [
    { name: "C langaue", icon: <img className="h-24" alt="C logo" src={CLogo}/>},
    { name: "CPP langaue", icon: <img className="h-20" alt="CPP logo" src={CPPLogo}/>},
    { name: "ReactJS", icon: <FaReact className="text-cyan-500"/> },
    { name: "Git", icon: <FaGitSquare className="text-gray-600"/> },
    { name: "AWS", icon: <FaAws className="text-gray-600"/> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400"/> },
    { name: "Mongodb", icon: <SiMongodb className="text-green-500"/> },
    { name: "Tailwindcss", icon: <SiTailwindcss className="text-cyan-500"/> },
    { name: "Material UI", icon: <img className="h-24" alt="CPP logo" src={MaterialUi}/>},
    { name: "Docker", icon: <FaDocker className="text-blue-600"/> },
];
