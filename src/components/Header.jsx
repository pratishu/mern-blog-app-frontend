import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
  const [Mobileopen, setMobileopen] = useState(false);
  return (
    <div className="container">
      <div className="sticky flex justify-between items-center border-2 h-16 ">
        <h1 className="logo">BLOG</h1>
        <nav className="nav">
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
            to="profile"
            className={({ isActive }) =>
              `nav ${isActive ? "text-primary" : "text-gray-500"} `
            }
          >
            profile
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
        <div className="mobile-nav hidden max-md:inline-block  border-2">
          <button
            onClick={() => {
              setMobileopen((prev) => !prev);
            }}
          >
            {Mobileopen ? (
              <RxHamburgerMenu size={25} className="text-accent" />
            ) : (
              <RxCross1 size={25} className="text-accent" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
