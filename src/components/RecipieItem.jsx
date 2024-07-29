import React from "react";
import styles from "./RecipeItem.module.css";
import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className={styles.recipeItem}>
      <div className={styles.imageContainer}>
        <img src={item.image_url} alt="recipe-item" className={styles.image} />
      </div>
      <span className={styles.publisher}>{item.publisher}</span>
      <h3 className={styles.title}>{item.title}</h3>
      <Link to={`/recipe-item/${item.id}`} className={styles.detailsLink}>
        Recipe Details
      </Link>
    </div>
  );
}
