import bestdeal from "../images/BestDeal.jpg";
import vendingMachine from "../images/vending_machine.jpg";
import defaultImg from "../images/defaultImage.png";
import uassist from "../images/uassist.png";
import mydocs from "../images/mydocs.png";
import clonetubes from "../images/clonetubes.png";


export const projects = [
  {
    image: bestdeal,
    name: "Bestdeal",
    description:"BestDeal is a Price comparator website used for comparing the e-commerce products.",
    tech: ["React", "MongoDB", "Tailwind","Django"],
    contributers:"Team",
    purpose:"College Mega Project",
    type:"Website",
  },
  {
    image: vendingMachine,
    name: "Vending Machine Simulator",
    description: "Vending Machine is a web simulation of an actual vending machine.",
    tech: ["HTML", "CSS", "Oracle Database"],
    contributers:"Team",
    purpose:"College Project",
    type:"Website",
  },
  {
    image: defaultImg,
    name: "MIARS",
    description: "Stands for 'Movie Info and Rating System' is desktop application for movie details.",
    tech: ["PostgresSQL", "Netbeans", "Java"],
    contributers:"Team",
    purpose:"College Project",
    type:"Desktop Application",
  },
  {
    image: uassist,
    name: "uAssist",
    description: "uAssist is a android application comprising of 5 small day-to-day applications like notepad, todo list, etc.",
    tech: ["Android Studio", "Java"],
    contributers:"Team",
    purpose:"College Project",
    type:"Android Application",
  },
  {
    image: clonetubes,
    name: "CloneTubes",
    description: "CloneTubes is a clone of Youtube application. The data is accessed through RapidAPI.",
    tech: ["React", "Axios", "Material UI"],
    contributers:"Solo",
    purpose:"Personal Project",
    type:"Website",
  },
  {
    image: mydocs,
    name: "MyDocs",
    description: "MyDocs is a website application to create, edit, and store documents.",
    tech: ["React", "Mongoose", "Socket.IO","Quill text editor"],
    contributers:"Solo",
    purpose:"Personal Project",
    type:"Website",
  },
];
