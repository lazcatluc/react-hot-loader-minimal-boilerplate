import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'

const Root = ({ currentState }) => (
  <div>
    <div>Hello React Hot Loader!</div>
    {ShoppingList(currentState.shoppingListItems)}
  </div>
);

export default Root
