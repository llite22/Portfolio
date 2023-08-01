import { useEffect, useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../../utils/navigationLinks";

const Header = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState<number>(0);

  const location = useLocation();

  useEffect(() => {
    const index = links.findIndex((link) => link.path === location.pathname);
    if (index !== -1) {
      setActiveLinkIndex(index);
    }
  }, [location.pathname]);

  return (
    <header className="flex flex-col items-center lg:flex-row justify-between mx-auto max-w-screen-xl mt-10">
      <h1 className="animated-text text-blue-500 font-extrabold text-5xl text-center pl-4 pr-4">
        llite22
      </h1>
      <div className="flex justify-center text-center">
        <ul className="flex flex-col md:flex-row text-gray-500 font-medium text-xl mt-5">
          {links.map((link, index) => (
            <li key={index} className="md:mr-8">
              <NavLink
                to={link.path}
                className={
                  index === activeLinkIndex
                    ? "text-2xl text-blue-500 outline-none"
                    : "text-gray-500"
                }
                onClick={() => {
                  setActiveLinkIndex(index);
                }}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center cursor-pointer mt-2 pl-4 pr-4">
        <Link className="animated-text2" to="https://github.com/llite22">
          <FaGithub className="w-10 h-10 mr-4 text-gray-500" />
        </Link>
        <Link className="animated-text2" to="https://t.me/llite22">
          <FaTelegram className="w-10 h-10 text-blue-500" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
