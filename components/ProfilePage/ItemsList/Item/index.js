import React from "react";
import styles from "./styles.module.css";

const CollectionItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.text}>{props.text}</div>
      <span className={styles.icon}>{props.icon}</span>
    </div>
  );
};

export default CollectionItem;
