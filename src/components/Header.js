import React, { useState, useEffect } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  
    const header_list = document.getElementById("header_list");
    if (header_list) {
      if (scrollPosition > window.innerHeight * 0.2) {
        header_list.classList.add("shadow-md");
      }
      if (scrollPosition === 0) {
        header_list.classList.remove("shadow-md");
      }
    }
  
    const aboutElement = document.getElementById("about");
    const projectsElement = document.getElementById("projects");
    const contactElement = document.getElementById("contact");
  
    if (aboutElement && projectsElement && contactElement) {
      const aboutOffset = aboutElement.offsetTop - window.innerHeight * 0.4;
      const projectsOffset = projectsElement.offsetTop - window.innerHeight * 0.4;
      const contactOffset = contactElement.offsetTop - window.innerHeight * 0.4;
  
      if (scrollPosition < aboutOffset) {
        setActiveLink("hero");
      } else if (scrollPosition < projectsOffset) {
        setActiveLink("about");
      } else if (scrollPosition < contactOffset) {
        setActiveLink("projects");
      } else {
        setActiveLink("contact");
      }
    }
  };

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if(targetElement)targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => handleScroll, []);

  return (
    <header className="z-10 top-0 fixed"><nav>
        <li
          id="header_list"
          className="flex justify-evenly transition-colors lg:justify-start md:text-lg text-sm list-none uppercase duration-[500] text-secondary w-screen md:px-8 py-2 font-medium bg-primary bg-opacity-70 backdrop-blur-sm"
        >
          <a
            className={`menu-button ${
              activeLink === "hero" ? "active-component" : ""
            }`}
            href="#hero"
            onClick={(e) => handleClick(e, 'hero')}
          >
            Home
          </a>
          <a
            className={`menu-button ${
              activeLink === "about" ? "active-component" : ""
            }`}
            href="#about"
            onClick={(e) => handleClick(e, 'about')}
          >
            About
          </a>
          <a
            className={`menu-button ${
              activeLink === "projects" ? "active-component" : ""
            }`}
            href="#projects"
            onClick={(e) => handleClick(e, 'projects')}
          >
            Projects
          </a>
          <a
            className={`menu-button ${
              activeLink === "contact" ? "active-component" : ""
            }`}
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </nav>
    </header>
  );
}
