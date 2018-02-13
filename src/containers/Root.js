import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'
import VisibilityToggle from './visibility/VisibilityToggle'

const Root = ({ currentState, onClickItem, show }) => (
  <div>
    <h2>My shopping list</h2>
    {ShoppingList(currentState.shoppingListItems, currentState.visibilityFilter, onClickItem)}
    {VisibilityToggle(show)}
  </div>
);

export default Root
