import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'

const Root = ({ currentState }) => (
  <div>
    <div>Hello React Hot Loader 2!</div>
    {ShoppingList(currentState.shoppingListItems)}
  </div>
);

export default Root
