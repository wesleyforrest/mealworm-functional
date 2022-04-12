import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = () => {
  return (
    <div className={styles.cardFront}>
      <img
        src="https://wwwthemealdb.com/images/media/meals/sstssx1487349585.jpg"
        alt="Thai Green Curry"
      />
      <section className={styles.recipeDetails}>
        <h2>Thai Green Curry</h2>
        <p>
          <span>Thai</span>
        </p>
        <div className={styles.links}>
          <a href="">Full Recipe</a>
          <a href="">YouTube</a>
        </div>
      </section>
    </div>
  );
};

export default CardFront;
