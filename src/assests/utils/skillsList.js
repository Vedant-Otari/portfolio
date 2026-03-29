import { FaLock, FaReact } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStripe } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si"; 
import { FaVial } from "react-icons/fa";

export const skills = [
    { name: "Laravel", icon: <SiLaravel className="text-red-600"/> },
    { name: "PHP", icon: <SiPhp className="text-indigo-500"/> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-500"/> },
    { name: "ReactJS", icon: <FaReact className="text-cyan-500"/> },
    { name: "JavaScript ", icon: <IoLogoJavascript className="text-yellow-400"/> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600"/> },
    { name: "Mongodb", icon: <SiMongodb className="text-green-500"/> },
    { name: "Tailwindcss", icon: <SiTailwindcss className="text-cyan-500"/> },
    { name: "Stripe", icon: <SiStripe className="text-purple-600"/> }, 
    { name: "PHPUnit", icon: <FaVial className="text-green-700"/> },
    { name: "RESTful API", icon: <FaServer className="text-gray-500"/> },
    { name: "Authentication (JWT)", icon: <FaLock className="text-yellow-500" />},
    { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500"/> },
    { name: "Git", icon: <FaGitSquare className="text-gray-600"/> },
];
