import React from "react";
import styles from "./List.module.scss";

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
