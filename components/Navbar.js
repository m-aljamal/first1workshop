import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import useScroll from "./useScroll";

const Navbar = () => {
  const { isMoved } = useScroll();

  const links = [
    {
      label: "Home",
      to: "home",
    },
    {
      label: "Services",
      to: "services",
    },
    {
      label: "Pricing",
      to: "pricing",
    },
  ];

  return (
    <div
      className={` w-full z-50 py-4 bg-black text-white ${
        isMoved &&
        "bg-white text-black py-0 fixed dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur transition duration-500  ease-in-out"
      }`}
    >
      <div className="flex justify-around items-center">
        <img
          src={`/${!isMoved ? "logo.png" : "small.png"}`}
          className="w-52"
        />
        <div className=" flex justify-center gap-3 ">
          {links.map(({ to, label }) => (
            <Nav to={to} label={label} key={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Nav = ({ to, label }) => {
  return (
    <Link
      to={to}
      smooth
      activeClass="active"
      spy
      className="   cursor-pointer font-bold"
    >
      {label}
    </Link>
  );
};

export default Navbar;
