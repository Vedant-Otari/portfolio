import React from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="z-10 top-0 fixed">
      <IoMenuOutline className="bg-transparent lg:hidden rounded-full text-5xl m-3 duration-500 hover:bg-slate-300 p-1" />
      <nav>
        <li className="hidden lg:block text-gray-700 w-screen border-b-[1px] h-full px-8 py-5 bg-primary">
          <a className="menu-button" href="#hero">
            Top
          </a>
          <a className="menu-button" href="#about">
            About
          </a>
          <a className="menu-button" href="#projects">
            Projects
          </a>
          <a className="menu-button" href="#contact">
            Contact
          </a>
        </li>
      </nav>
    </header>
  );
}
