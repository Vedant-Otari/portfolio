import React, { useState, useEffect } from "react";
// import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const header_list = document.getElementById("header_list");
    if (scrollPosition > window.innerHeight * 0.2)
      header_list.classList.add("shadow-md");
    if (scrollPosition === 0) header_list.classList.remove("shadow-md");
    const aboutOffset =
      document.getElementById("about").offsetTop - window.innerHeight * 0.4;
    const projectsOffset =
      document.getElementById("projects").offsetTop - window.innerHeight * 0.4;
    const contactOffset =
      document.getElementById("contact").offsetTop - window.innerHeight * 0.4;

    if (scrollPosition < aboutOffset) {
      setActiveLink("hero");
    } else if (scrollPosition < projectsOffset) {
      setActiveLink("about");
    } else if (scrollPosition < contactOffset) {
      setActiveLink("projects");
    } else {
      setActiveLink("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => handleScroll, []);

  return (
    <header className="z-10 top-0 fixed">
      {/* <IoMenuOutline onClick={()=>{headerOpen?setHeaderOpen(false):setHeaderOpen(true)}} className="bg-transparent lg:hidden rounded-full text-5xl m-3 duration-100 active:bg-tertiary active:text-white p-1" /> */}
      <nav>
        <li
          id="header_list"
          className="flex justify-evenly lg:block md:text-lg text-sm list-none uppercase duration-500 text-secondary w-screen md:px-8 md:py-5 py-3 font-medium bg-primary bg-opacity-100"
        >
          <a
            className={`menu-button ${
              activeLink === "hero" ? "active-component" : ""
            }`}
            href="#hero"
          >
            Home
          </a>
          <a
            className={`menu-button ${
              activeLink === "about" ? "active-component" : ""
            }`}
            href="#about"
          >
            About
          </a>
          <a
            className={`menu-button ${
              activeLink === "projects" ? "active-component" : ""
            }`}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={`menu-button ${
              activeLink === "contact" ? "active-component" : ""
            }`}
            href="#contact"
          >
            Contact
          </a>
        </li>
      </nav>
    </header>
  );
}
