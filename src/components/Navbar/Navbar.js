import React from "react";

import Santa from "../../images/santa.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navContainer">
          <li className="navItem">
            <a href="index.html">
              <img className={styles.logo} src={Santa} alt="Santa" />
              <span className={styles.logoTitle}>Secret Santa</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
