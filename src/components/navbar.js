import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../libs/constants";
import React from "react";
function Navbar() {
  return (
    <header className="bg-[#2b2b2b] text-white flex  gap-4 py-3">
      {navbarLinks.map((item, index) => {
        console.log(item, index);
        return (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive ? "mx-2 text-2xl text-[#f1e941fb]" : "mx-2 text-2xl"
            }
          >
            <React.Fragment>{item.title}</React.Fragment>
          </NavLink>
        );
      })}
    </header>
  );
}

export default Navbar;
