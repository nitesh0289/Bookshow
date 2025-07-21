import { Icon } from "@iconify/react";
import React, { useEffect } from "react";

import BrandLogo from "../../../assets/logo.png";
import styles from "./navbar.module.scss";
import Button from "../../atoms/Button";

function Navbar() {
  const handleLogin = () => {
    console.log("Login Clicked");
  };

  const handleStyle = () => {
    const navbar = document.getElementById("navbar");
    console.log(navbar);
    if (!navbar) return;
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "var(--primary)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleStyle);

    return () => {
      document.removeEventListener("scroll", handleStyle);
    };
  }, []);

  return (
    <article className={styles.navbar} id="navbar">
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
