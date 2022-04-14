import React, { Component } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div>
      <section className={styles.layout}>
        <img
          src="src/components/NavBar/images/tree-736885_1280.jpg"
          alt="Mealworm Logo"
        />
        <h1>MealWorm</h1>
      </section>
    </div>
  );
};
export default NavBar;
