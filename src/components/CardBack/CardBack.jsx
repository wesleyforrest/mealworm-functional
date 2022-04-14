import React, { Component } from "react";
import styles from "./CardBack.module.scss";
import recipes from "../../data/recipes";

const CardBack = () => {
  console.log(recipes[0].strInstructions.length);

  let cleanedInstructions =
    recipes[0].strInstructions.length > 300
      ? recipes[0].strInstructions.substring(0, 300)
      : recipes[0].strInstructions;

  return (
    <div className={styles.cardBack}>
      <section className={styles.instructions}>
        <h2>{recipes[0].strMeal} </h2>
        <h3>Instructions</h3>
        <p>{cleanedInstructions}...</p>
        <h3>Ingredients</h3>
      </section>
    </div>
  );
};
export default CardBack;
