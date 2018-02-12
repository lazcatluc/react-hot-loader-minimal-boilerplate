import React from 'react';
import styles from "./ShoppingList.css";

const shoppingListItem = "shoppingListItem";

const ShoppingList = (items, visibilityFilter, onClickItem) => (
  <div className={styles.ShoppingList + ' ' + visibilityFilter}>
    {
      items.map((item, index) => <div key={index}
                                     className={item.checked?'checked':'unchecked'}
                                     id={shoppingListItem + index}
                                     onClick={() => onClickItem(index)}>{item.text}</div>)
    }
  </div>
);

export default ShoppingList;
