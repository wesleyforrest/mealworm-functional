import React from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import recipes from "./data/recipes";

const App = () => {
  const getCardFrontJsx = (recipe) => (
    <CardFront recipe={recipe} key={recipe.idMeal} />
  );
  const getCardBackJsx = (recipe) => <CardBack recipe={recipe} />;

  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        {/* <CardFront recipe={recipes[1]} /> */}
        {recipes.map(getCardFrontJsx)}
        {/* <CardBack recipe={recipes[1]} /> */}
        {recipes.map(getCardBackJsx)}
      </section>
    </>
  );
};

export default App;
