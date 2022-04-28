import React from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import library from "./data/fa-library";
import recipes from "./data/recipes";

const App = () => {
  const getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe}>
      <Card recipe={recipe} />
    </div>
  );

  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>{recipes.map(getCardJsx)}</section>
    </>
  );
};

export default App;
