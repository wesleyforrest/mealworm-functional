import React, { Component } from "react";
import styles from "./CardBack.module.scss";

const CardBack = () => {
  return (
    <div className={styles.cardBack}>
      <section className={styles.instructions}>
        <h2>Thai Green Curry</h2>
        <h3>Instructions</h3>
        <p>
          Put the potatos in a pan of boiling water and cook for 5 minutes.
          Throw in the beans and cook for a further 3 minutes, by which time
          both should be just tender but not to soft. Drain and put to one...
        </p>
        <h3>Ingredients</h3>
      </section>
    </div>
  );
};
export default CardBack;
