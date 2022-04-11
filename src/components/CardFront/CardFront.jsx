import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = () => {
  return (
    <div className={styles.cardFront}>
      <img
        src="https://wwwthemealdb.com/images/media/meals/sstssx1487349585.jpg"
        alt="Thai Green Curry"
      />
      <section classNmae={styles.recepieDetails}>
        <h2>Thai Green Currry</h2>
        <p>
          <span>Thai</span>
        </p>
        <div class={styles.links}>
          <a href="">Full Recipe</a>
          <a href="">YouTube</a>
        </div>
      </section>
    </div>
  );
};

export default CardFront;
