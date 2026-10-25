import { useState } from "react";
import { NavLink } from "react-router-dom";
import burger from "/src/assets/imgs/burger.png"
import logo from "/src/assets/imgs/logo.png"
import styles from "./Navbar.module.css"
const links = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About Us",
    path: "/about"
  },
  {
    title: "Academics",
    path: "/"
  },
  {
    title: "Admissions",
    path: "/"
  },
  {
    title: "Student Life",
    path: "/"
  },
  {
    title: "Contact",
    path: "/"
  }
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.links}>
          {links.map((item, i) =>
            <li
              className={`${styles.link} ${item.title.toLowerCase() === 'home' && styles.home}`}
              key={i}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>)}
        </ul>
        <div className={styles.burger} onClick={() => setIsOpen(prev => !prev)}>
          <button ><img src={burger} alt="links menu" />
          </button>
        </div>
      </nav>
      {isOpen && <ul className={styles["mobile-links"]}>
        {links.map((item, i) =>
          <li
            className={styles.link}
            onClick={() => { setIsOpen(prev => !prev) }}
            key={i}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>)}
      </ul>}
    </div>


  )
}

export default Navbar;