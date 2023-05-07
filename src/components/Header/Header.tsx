import {FC, useEffect, useState} from "react";
import {FaGithub, FaTelegram} from "react-icons/fa";
import styles from './Header.module.scss'
import {NavLink, useLocation} from "react-router-dom";
import '../../index.scss'

const Header: FC = () => {
    const [activeLinkIndex, setActiveLinkIndex] = useState(0);
    const links = [
        {text: "Главная", path: "/"},
        {text: "Обо мне", path: "/About"},
        {text: "Cтэк", path: "/TechStack"},
        {text: "Проекты", path: "/Projects"},
        {text: "Контакт", path: "/Contact"},
    ];

    const location = useLocation();

    useEffect(() => {
        const index = links.findIndex((link) => link.path === location.pathname);
        if (index !== -1) {
            setActiveLinkIndex(index);
        }
    }, [location.pathname]);

    return (
        <header
            className={`${styles.header} flex flex-col md:flex-row items-center justify-between mx-auto max-w-screen-xl mt-10`}>
            <h1 className='animated-text'>llite22</h1>
            <ul className='flex items-center flex-col md:flex-row'>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={index === activeLinkIndex ? styles.activeLink : ""}
                            onClick={() => {
                                setActiveLinkIndex(index);
                            }}
                        >
                            {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className={`${styles.icons} flex items-center justify-content-center cursor-pointer`}>
                <a className='animated-text2' href="https://github.com/llite22">
                    <FaGithub className={`${styles.icon} ${styles.github}`}/>
                </a>
                <a className='animated-text2' href="https://t.me/llite22">
                    <FaTelegram className={`${styles.icon} ${styles.telegram}}`}/>
                </a>
            </div>
        </header>
    )
};

export default Header;