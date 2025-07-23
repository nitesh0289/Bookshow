import React, { useState } from "react";
import { NavLink } from "react-router";

import Button from "../../components/atoms/Button";
import MarvelBG from "../../assets/hero.png";
import Logo from "../../assets/logo.png";
import styles from "./login.module.scss";

import { loginUser } from "../../apis/users";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    if (formData.email === "" || formData.password === "") return;

    const result = await loginUser(formData);
    toast.success(result.data.result);
    console.log({ result });
  };

  return (
    <main className={styles.container}>
      <div className={styles.leftPane} style={{ backgroundImage: `url(${MarvelBG})` }}>
        <div className={styles.overlay}>
          <h1>
            Welcome to <img src={Logo} alt="Logo" className={styles.logo} />
          </h1>
          <p>Explore Marvel Movies & More!</p>
        </div>
      </div>

      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>
            Login to <img src={Logo} alt="Logo" className={styles.logo} />
          </h2>

          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <Button text={"Login"} />

          <p>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
