import { useState, useEffect } from "react";
import assets from "../assets/imges";
import { navlinks } from "../content";
import styles from "../style";
import Mobilmenu from "./Mobilmenu";
import React, { useRef } from "react";


const Navbar = () => {
  const [toogol, settoggol] = useState(false);
  const [transtion, settranstion] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Added state for active section
  const hamza = `${toogol ? "" : "<HaMza />"}`;

  function handelmenu() {
    settoggol((prev) => !prev);
  }

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        settoggol(false);
      }
    };
    settranstion(true)

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handelclose = () => {
    settoggol(false);
  };


  return (
    <nav
      className={`lg:px-8 ${styles.flexBetween}`}
      style={{
        transition: "opacity 0.5s ease-in-out", 
        opacity: transtion ? 1 : 0, 
      }}
    >
      <h1 className="text-3xl not-italic font-bold leading-9 tracking-[-0.0375rem] font-Inter text-Gray_900">
        {hamza}
      </h1>
      <div className="lg:flex items-center hidden">
        <ul className="inline-flex gap-6 py-[0.38rem] mr-6">
          {navlinks.map((nav) => (
            <li
              key={nav.id}
              className={`${styles.Body2}  ${
                activeSection === nav.id ? "!text-Gray_900 " : "" // Apply different color to active section link
              } duration-500 hover:text-Gray_900 text-[#D1D5DB]`}
            >
              <a  href={`#${nav.id}`} onClick={() => handleSectionClick(nav.id)}>{nav.titel}</a>
            </li>
          ))}
        </ul>
        <div className="inline-flex gap-4 pl-6 border-l border-Gray_100 border-solid">
          <div className="inline-flex gap-4">
            <a target="_blank"  className = {`p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`} href="https://github.com/ess-maker"><img src={assets.github} alt="github" className="w-4 h-4" /></a>
        <a target="_blank"  className = {`p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`} href="https://www.linkedin.com/in/hamza-abd-rahim-42bb93267/"><img src={assets.linkedin} alt="linkedin" className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
      <img
        src={assets.menu}
        onClick={handelmenu}
        alt="menu"
        className="h-10 w-10 lg:hidden cursor-pointer"
      />
      <Mobilmenu open={toogol} handelclose={handelclose} />
    </nav>
  );
};

export default Navbar;