import React from "react";
import { Outlet } from "react-router";

import styles from "./layout.module.scss";

function Layout() {
  return (
    <main className={styles.container}>
      {/* Header */}

      {/* Outlet */}
      <Outlet />

      {/* Footer */}
    </main>
  );
}

export default Layout;
