import React from 'react';
import styles from "../style/ShoppingList.css";

const shoppingListItem = "shoppingListItem";

const ShoppingList = items => (
  <ul className={styles.ShoppingList}>
    {
      items.map((item, index) => <li id={shoppingListItem + index}>{item}</li>)
    }
  </ul>
);

export default ShoppingList;
