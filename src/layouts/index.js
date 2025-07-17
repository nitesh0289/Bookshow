import React from "react";
import { Outlet } from "react-router";

import Footer from "../components/molecules/footer";
import Navbar from "../components/molecules/navbar";
import styles from "./layout.module.scss";

function Layout() {
  return (
    <main className={styles.container}>
      {/* Header */}
      <Navbar />

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Layout;
