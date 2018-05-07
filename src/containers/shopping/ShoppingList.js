import React from 'react';
import styles from "./ShoppingList.css";
import SumCalculator from "./SumCalculator"

const shoppingListItem = "shoppingListItem";

const ShoppingList = (items, visibilityFilter, onClickItem, onRemoveItem, setItemPrice) => (
  <ul className={styles.ShoppingList + ' ' + styles[visibilityFilter] + ' list-group'}>
    {
      items.map((item, index) =>
        <li key={index}
            className={styles.ShoppingListRow + (item.checked?' list-group-item-success ':' ') +
            styles[item.checked?'checked':'unchecked'] + ' list-group-item'}
            id={item.id}>
            <div className={styles.ShoppingListRowItem}
                 onClick={() => onClickItem(item)}>{item.text}</div>
            <div className={styles.ShoppingListItemPrice}>
              <input type="tel" value={item.value || ''} className="form-control"
                     onChange={event => setItemPrice(item, event.target.value)} />
            </div>
            <div className={styles.ShoppingListRowButton}>
              <button type="button" className="btn btn-xs btn-danger img-circle" onClick={(e) => onRemoveItem(item)}>
                &#xff38;
              </button>
            </div>
        </li>)
    }
    <li className={styles.ShoppingListRow}>
      <div className={styles.ShoppingListRowItem}>Total</div>
      <div className={styles.ShoppingListItemPrice + ' ' + styles.ShoppingListItemPriceTotal}>
        {SumCalculator(items)}
      </div>
    </li>
  </ul>

);

export default ShoppingList;
