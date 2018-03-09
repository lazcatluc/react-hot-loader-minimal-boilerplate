import React from 'react';
import styles from "./ShoppingList.css";

const shoppingListItem = "shoppingListItem";

const ShoppingList = (items, visibilityFilter, onClickItem, onRemoveItem) => (
  <ul className={styles.ShoppingList + ' ' + styles[visibilityFilter] + ' list-group'}>
    {
      items.map((item, index) =>
        <li key={index}
            className={styles.ShoppingListRow + (item.checked?' list-group-item-success ':' ') +
            styles[item.checked?'checked':'unchecked'] + ' list-group-item'}
            id={item.id}
            onClick={() => onClickItem(item)}>
            <div className="col-xs-9">{item.text}</div>
            <div className="col-xs-3">
              <button type="button" className="btn btn-xs btn-danger img-circle" onClick={() => onRemoveItem(item)}>
                &#xff38;
              </button>
            </div>
        </li>)
    }
  </ul>
);

export default ShoppingList;
