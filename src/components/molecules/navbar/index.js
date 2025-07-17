import { Icon } from "@iconify/react";
import React from "react";

import BrandLogo from "../../../assets/logo.png";
import styles from "./navbar.module.scss";
import Button from "../../atoms/Button";

function Navbar() {
  const handleLogin = () => {
    console.log("Login Clicked");
  };

  return (
    <article className={styles.navbar}>
      {/* Left */}
      <img src={BrandLogo} alt="BookShow" />

      {/* Middle */}
      <nav className={styles.nav}>
        <a>Home</a>
        <a>Movies</a>
        <a>Theaters</a>
        <a>Releases</a>
      </nav>

      {/* Right */}
      <div className={styles.right}>
        <Icon icon={"ic:outline-search"} />
        <Button text="Log In" clickHandler={handleLogin} />
      </div>
    </article>
  );
}

export default Navbar;
