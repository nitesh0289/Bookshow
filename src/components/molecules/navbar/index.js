import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

import fetchUser from "../../../store/actions/user.actions";
import { logoutUser } from "../../../apis/users";
import BrandLogo from "../../../assets/logo.png";
import styles from "./navbar.module.scss";
import Button from "../../atoms/Button";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      if (user.email) {
        const res = await logoutUser();
        console.log({ res });
        if (res.status === 200) {
          toast.success("User logged out successfully!");
          dispatch(fetchUser());
        } else {
          toast.error("Something went wrong!");
        }
        return;
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("Logout Error: ", { error });
      toast.error("Something went wrong!");
    }
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
        <Button text={user.email ? "Log Out" : "Log In"} clickHandler={handleLogin} />
      </div>
    </article>
  );
}

export default Navbar;
