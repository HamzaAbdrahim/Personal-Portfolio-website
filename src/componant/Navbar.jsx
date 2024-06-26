import { useState, useEffect, Suspense } from "react";
import assets from "../assets/imges";
import { navlinks } from "../content";
import styles from "../style";
import Mobilmenu from "./Mobilmenu";
import React, { useRef } from "react";
import Toggle_switch from "./Toggle_switch";
import Loding from "./Loding";
import Social_media_links from "./Social_media_links";


const Navbar = ({}) => {
  const [toogol, settoggol] = useState(false);
  const [transtion, settranstion] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("class", localTheme);
  }, [theme]);


  return (
    <Suspense fallback={<Loding />}>
    <nav
      className={`lg:px-8 dark ${styles.flexBetween} container  bg-transparent`}
      style={{
        transition: "opacity 0.5s ease-in-out", 
        opacity: transtion ? 1 : 0, 
      }}
    >
          <h1 className={`text-3xl not-italic font-bold leading-9 tracking-[-0.0375rem] font-Inter  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{hamza}</h1>
        <ul className="hidden xl:inline-flex gap-6 py-[0.38rem] mr-6">
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
      <div className="lg:flex items-center hidden">
        <Toggle_switch theme = {theme} onClick={handleToggle} />

      </div>
      <img
        src={assets.menu}
        onClick={handelmenu}
        alt="menu"
        className="h-10 w-10 lg:hidden cursor-pointer"
      />
      <Mobilmenu open={toogol} handeltheme = {handleToggle} handelclose={handelclose} />
    </nav>
    <Social_media_links />
    </Suspense>
  );
};

export default Navbar;