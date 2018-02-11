import React from 'react';
import styles from "./ShoppingList.css";

const shoppingListItem = "shoppingListItem";

const ShoppingList = items => (
  <div className={styles.ShoppingList}>
    {
      items.map((item, index) => <div key={index}
                                     className={item.className}
                                     id={shoppingListItem + index}
                                     onClick="">{item.text}</div>)
    }
  </div>
);

export default ShoppingList;
