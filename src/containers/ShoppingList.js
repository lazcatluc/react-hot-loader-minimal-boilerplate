import React from 'react';

const shoppingListItem = "shoppingListItem";

const ShoppingList = items => (
  <ul>
    {
      items.map((item, index) => <li id={shoppingListItem + index}>{item}</li>)
    }
  </ul>
);

export default ShoppingList;
