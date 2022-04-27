import React, { Component } from "react";
import recipes from "../../data/recipes";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { strMeal, strInstructions, ingredients } = props.recipe;

  let cleanInstructions =
    recipes[1].strInstructions.length > 300
      ? recipes[1].strInstructions.substring(0, 300)
      : recipes[1].strInstructionss;
  return (
    <section className={styles.cardBack}>
      <h2>{strMeal}</h2>
      <h3>Instructions</h3>
      <p>{cleanInstructions}...</p>
      <h3>Ingredients</h3>
      <p>{ingredients}</p>
    </section>
  );
};

export default CardBack;
