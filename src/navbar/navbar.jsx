import { useState } from "react";
import headerLogo from '../assets/images/whiteLogo.png';
import data from '../blogsData/blogsData.js'
import NavbarIcon from "./navbarIcon";
import SearchAppBar from "./searchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navClassName, setnavClassName] = useState("hidden md:flex md:flex-row  flex-col justify-center items-center  m-auto  text-white");
  const [iconClassName, setIconClassName] = useState("float-right md:hidden text-3xl bg-slate-500 p-2 text-white rounded-md m-[20px]")
  const [sideBarClassName, setSideBarClassName] = useState("hidden")
  
  const sideMenu = () => {
      const newNavClassName = navClassName === "hidden md:flex md:flex-row  flex-col justify-center items-center  m-auto  text-white"
        ? "md:flex flex md:flex-row flex-col  float-right text-white"
        : "hidden md:flex md:flex-row  flex-col justify-center items-center  m-auto  text-white";

    const newIconClassName = iconClassName === "float-right md:hidden text-3xl bg-slate-500 p-2 text-white rounded-md  m-[20px]"
      ? "float-right md:hidden text-3xl bg-slate-500 p-2 text-white rounded-md m-[20px]"
      : "float-right md:hidden text-3xl bg-slate-500 p-2 text-white rounded-md  m-[20px]";
    
    const newSideBarClassName = sideBarClassName ==="hidden"
    ? "border-l-2  flex-col float-right h-screen p-2 gap-4 md:hidden flex bg-[#161819] z-auto w-[50vw]"
    :"hidden"

    setnavClassName(newNavClassName);
    setIconClassName(newIconClassName);
    setSideBarClassName(newSideBarClassName)
  };

  
  
  return (
    <div className="bg-[#161819] w-screen">
      <nav
        id="navbar"
        className="
          flex
          flex-wrap
          justify-between
          m-auto
          border-b-[1px]
          p-4
          md:justify-around
          
          
          
        "
      >
        <Link to="/Story-Time" className="w-[20%] lg:w-[15%] float-left my-auto">
          <img src={headerLogo} alt="Logo Not Found " className="w-[100%] h-auto lg:w-[60%]" />
        </Link>

        <div id="links" className="md:flex md:justify-between">
          
          <div id="link" className="hidden md:flex md:flex-row space-x-2 float-right m-auto text-center text-white">
            <Link className="hover:border-white hover:border-b-[2px] p-2  hover:text-white m-auto " to="/Story-Time">
              Home
            </Link>
            <Link className="hover:border-white hover:border-b-[2px] p-2  hover:text-white m-auto " to="/New-Blog">
              New blog
            </Link>
            <SearchAppBar data={data} />
          </div>
          <button id="icon" onClick={sideMenu} className={iconClassName}>
            <NavbarIcon />
          </button>
        </div>
        
      </nav>
      <div id="sidebar" className={sideBarClassName}>
      <div id="link" className={navClassName}>
            <Link className="hover:bg-slate-700 p-4 rounded-md hover:text-white m-auto" to="/Story-Time">
              Home
            </Link>
            <Link className="hover:bg-slate-700 p-4 rounded-md hover:text-white m-auto" to="/New-Blog">
              New blog
            </Link>
            <SearchAppBar data={data} />
          </div>
        </div>
    </div>
  );
};

export default Navbar;
