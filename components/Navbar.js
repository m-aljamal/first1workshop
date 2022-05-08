import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import useScroll from "./useScroll";
import Image from "next/image";
const Navbar = ({ isSticky }) => {
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
      className={` w-full py-2  ${
        !isMoved
          ? "  z-50   bg-black text-white"
          : "bg-white text-black   fixed dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur transition duration-500  ease-in-out  z-50      "
      }`}
    >
      <div className="   container  justify-between items-center">
        {isMoved ? (
          <div className="flex justify-center">
            <Image
              src="/black_logo03.png"
              priority
              width={300}
              height={50}
              objectFit="contain"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <Image
              src="/white_logo.png"
              width={100}
              height={100}
              priority
              objectFit="contain"
            />
          </div>
        )}

        <div>
          <div className=" flex justify-center gap-3    ">
            {links.map(({ to, label }) => (
              <Nav to={to} label={label} key={label} />
            ))}
          </div>
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
