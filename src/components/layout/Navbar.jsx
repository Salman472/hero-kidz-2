import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import { BsCartPlus } from "react-icons/bs";

const Navbar = () => {
  const linkClass =
    "hover:bg-transparent focus:bg-transparent active:bg-transparent !bg-transparent";

  const links = (
    <>
      <li>
        <NavLink href="/" exact className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href="/products" className={linkClass}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink href="/blog" className={linkClass}>
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink href="/contact" className={linkClass}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* mobile menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow [&>li>a:hover]:bg-transparent"
          >
            {links}
          </ul>
        </div>

        <Logo />
      </div>

      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 [&>li>a:hover]:bg-transparent gap-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <BsCartPlus className="btn btn-primary py-2"/>
        <button className="btn btn-primary btn-outline">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
