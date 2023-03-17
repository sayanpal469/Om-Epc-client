import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import classNames from "classnames";

const Nav = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname);
    // console.log(pathname);
  }, [location]);

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setIsAdmin(false);
  };
  useEffect(() => {
    if (localStorage.getItem("user") || location.state?.isLoggedIn) {
      setLoggedIn(true);
      const user = JSON.parse(localStorage.getItem("user"));
     if(user.role === "admin"){
        setIsAdmin(true)
     }
    } else {
      setLoggedIn(false);
    }
  }, [location]);

  const navbarClasses = classNames(
    "fixed w-full z-50 transition-colors duration-500 navbar lg:px-10 py-10",
    {
      "bg-transparent": !scrolled,
      "bg-white": scrolled,
    }
  );

  const menu = (
    <>
      {isAdmin && loggedIn ? (
        <>
          <li
            className={`font-medium ${activeLink === "/admin" ? "active" : ""}`}
          >
            <Link to="/admin">Admin</Link>
          </li>
          <li className="font-medium">
            <Link onClick={logout} to="/login">
              Log out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className={`font-medium ${activeLink === "/" ?"active" : ""}`}
          onClick={()=>{console.log(activeLink)}}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={`font-medium ${activeLink === "/about" ? "active" : ""}`}
            onClick={()=>{console.log(activeLink)}}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/service" ? "active" : ""
            }`}
          >
            <Link to="/service">Service</Link>
          </li>
          <li
            className={`font-medium ${activeLink === "/ups" ? "active" : ""}`}
          >
            <Link to="/ups">UPS & Backup</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/computer" ? "active" : ""
            }`}
          >
            <Link to="/computer">Computer</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/printer" ? "active" : ""
            }`}
          >
            <Link to="/printer">Printer</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/surveillance" ? "active" : ""
            }`}
          >
            <Link to="/surveillance">Survillence</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/refurbished" ? "active" : ""
            }`}
          >
            <Link to="/refurbished">Refurbished</Link>
          </li>
          <li
            className={`font-medium ${
              activeLink === "/accesories" ? "active" : ""
            }`}
          >
            <Link to="/accesories">Accesories</Link>
          </li>
          <li tabIndex={0} className={`font-medium ${activeLink === '/myOrder' ? 'active' : ''}`}>
                    <a className="justify-between">
                        My Account
                    </a>
                    <ul className="p-2 shadow menu bg-base-100 mt-2">
                        <li><Link to='/myOrder'> My Orders</Link></li>
                        <li><Link to='/myService'>Service Request</Link></li>
                    </ul>
                </li>

           <li className={`font-medium ${activeLink === '/career' ? 'active' : ''}`}><Link to='/career'>Career</Link></li>

          {loggedIn ? (
            <li className="font-medium">
              <Link onClick={logout} to="/login">
                Log out
              </Link>
            </li>
          ) : (
            <>
              <li
                className={`font-medium ${
                  activeLink === "/login" ? "active" : ""
                }`}
              >
                <Link to="/login">Login</Link>
              </li>
              <li
                className={`font-medium ${
                  activeLink === "/" ? "register" : ""
                }`}
              >
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </>
      )}
    </>
  );
  return (
    <div className="mt-0 nav-bar">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar lg:px-20 sticky transition-colors duration-500 bg-opacity-30 z-50 backdrop-filter backdrop-blur-lg bg-white">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <img
                  className="logo"
                  src="https://i.ibb.co/7Xt1RPG/1674998575548.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menu}
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;