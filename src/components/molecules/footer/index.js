import React from "react";

import PlayStore from "../../../assets/play-store.png";
import AppStore from "../../../assets/app-store.png";
import BrandLogo from "../../../assets/logo.png";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Row */}
      <div className={styles.top}>
        <div className={styles.column1}>
          <div className={styles["footer-logo"]}>
            <img src={BrandLogo} alt={"brand-logo"} />
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className={styles["app-install"]}>
            <img src={PlayStore} alt={"playstore-logo"} />
            <img src={AppStore} alt={"appstore-logo"} />
          </div>
        </div>
        <div className={styles.column2}>
          <h3>Company</h3>

          <div>
            <a>Home</a>
            <a>About us</a>
            <a>Contact us</a>
            <a>Privacy policy</a>
            <a>Terms & Condition</a>
          </div>
        </div>
        <div className={styles.column2}>
          <h3>Get in touch</h3>

          <div>
            <a>+1-212-456-7890</a>
            <a>contact@example.com</a>
          </div>
        </div>
      </div>
      {/* Bottom Row */}
      <div className={styles.subFooter}>Copyright 2025 © GreatStack. All Right Reserved.</div>
    </footer>
  );
}

export default Footer;
