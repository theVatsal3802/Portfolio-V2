import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { data } from "../data";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  function toggleNav() {
    setNav(!nav);
  }

  function closeNav() {
    setNav(false);
  }

  const getRoutePath = (title) => {
    const routeMap = {
      Home: "/",
      About: "/about",
      Education: "/education",
      Experience: "/experience",
      Projects: "/projects",
      Skills: "/skills",
      Achievements: "/achievements",
      Contact: "/contact",
    };
    return routeMap[title] || "#";
  };

  const isActive = (link) => {
    if (link.isRedirectLink) return false;
    const routePath = getRoutePath(link.title);
    return location.pathname === routePath;
  };

  return (
    <div className="z-50 fixed flex justify-center w-full font-medium bg-bg-primary dark:bg-bg-primary border-b border-border-primary dark:border-border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between w-full">
            <ul className="flex flex-row space-x-6 lg:space-x-8">
              {data.navLinks.map((link, index) => {
                if (link.isRedirectLink) {
                  return (
                    <li key={index}>
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm lg:text-base transition-colors duration-200 text-accent hover:text-blue-600 dark:hover:text-blue-400 flex flex-row items-center justify-center"
                      >
                        {link.title}
                        <span className="ml-2">
                          <HiOutlineExternalLink size={18} />
                        </span>
                      </a>
                    </li>
                  );
                }
                const routePath = getRoutePath(link.title);
                return (
                  <li key={index}>
                    <Link
                      to={routePath}
                      className={`text-sm lg:text-base transition-colors duration-200 ${
                        isActive(link)
                          ? "text-accent font-semibold"
                          : "text-text-primary dark:text-text-primary hover:text-text-secondary dark:hover:text-text-secondary"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleNav}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800 border border-border-primary dark:border-border-primary"
              aria-label="Toggle menu"
            >
              {nav ? (
                <AiOutlineClose className="w-6 h-6 text-text-primary dark:text-text-primary" />
              ) : (
                <AiOutlineMenu className="w-6 h-6 text-text-primary dark:text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-bg-primary dark:bg-bg-primary transform transition-transform duration-300 z-40 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-4">
          <ul className="flex flex-col items-center space-y-6">
            {data.navLinks.map((link, index) => {
              if (link.isRedirectLink) {
                return (
                  <li key={index}>
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl lg:text-2xl transition-colors duration-200 text-accent hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={closeNav}
                    >
                      {link.title}
                    </a>
                  </li>
                );
              }
              const routePath = getRoutePath(link.title);
              return (
                <li key={index}>
                  <Link
                    to={routePath}
                    className={`text-xl lg:text-2xl transition-colors duration-200 ${
                      isActive(link)
                        ? "text-accent font-semibold"
                        : "text-text-primary dark:text-text-primary hover:text-text-secondary dark:hover:text-text-secondary"
                    }`}
                    onClick={closeNav}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
