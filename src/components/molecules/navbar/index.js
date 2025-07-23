import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Icon } from "@iconify/react";

import BrandLogo from "../../../assets/logo.png";
import styles from "./navbar.module.scss";
import Button from "../../atoms/Button";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef("");

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleStyle = () => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "var(--primary)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  };

  const handleSearch = () => {
    if (!searchOpen) {
      setSearchOpen((prev) => !prev);
      return;
    } else if (searchRef.current.value.length) {
      setSearchOpen(false);
      navigate(`/search?query=${searchRef.current.value}`);
      return;
    }
    setSearchOpen(false);
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
        <a href="/">Home</a>
        <a href="/#movies">Movies</a>
        <a href="/my-bookings">Bookings</a>
        <a href="/wishlist">Wishlist</a>
      </nav>

      {/* Right */}
      <div className={styles.right}>
        <div className={styles.search} onMouseLeave={() => setSearchOpen(false)}>
          <input
            autoFocus
            type={"text"}
            placeholder="Seach Movies"
            ref={searchRef}
            className={searchOpen ? styles.searchbar : styles.hideSearchbar}
          />
          <Icon
            onClick={handleSearch}
            icon={"ic:outline-search"}
            className={searchOpen ? styles.active : ""}
          />
        </div>
        <Button text="Log In" clickHandler={handleLogin} />
      </div>
    </article>
  );
}

export default Navbar;
