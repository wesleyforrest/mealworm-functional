import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import Logo from "../../assets/plate-secondary.png";

const NavBar = () => {
  return (
    <div>
      <section className={styles.layout}>
        <img src={Logo} alt="Mealworm Logo" />
        <h1>MealWorm</h1>
      </section>
    </div>
  );
};
export default NavBar;
