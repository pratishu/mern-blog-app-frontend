import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="fixed top-0 left-0 w-full flex justify-around items-center border-2 h-16 px-8 bg-background max-md:justify-between ">
        <h1 className="logo">BLOG</h1>
        {/* this is desktop nav menu */}
        <nav className="nav px-2 relative ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="articles"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            Article
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            contact
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            about
          </NavLink>
          <NavLink
            to="faq"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            Faq
          </NavLink>
        </nav>
        {/* this is mobile menu */}
        <div className="mobile-nav border-2 hidden max-md:block ">
          {console.log(isOpen)}
          <button
            onClick={() => {
              setIsOpen(toggleMenu);
            }}
            className="hidden max-md:inline-block"
          >
            {isOpen ? (
              <RxCross1 size={25} className="text-accent" />
            ) : (
              <RxHamburgerMenu size={25} className="text-accent" />
            )}
          </button>
          <div
            className={`md:hidden left-0 top-[64px] p-10  w-full bg-slate-100 text-lg font-medium font-poppins text-primary ${
              isOpen ? "absolute" : "hidden"
            }`}
          >
            <ul className="flex flex-col w-full items-center justify-center gap-8 ">
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="articles">Articles</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="about">about</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="contact">Contact</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>
                <Link to="faq">Faq</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
