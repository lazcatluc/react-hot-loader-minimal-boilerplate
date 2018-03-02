import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'
import VisibilityToggle from './visibility/VisibilityToggle'
import NewItem from './newItem/NewItem'

const Root = ({ currentState, onClickItem, onAddItem, newItemChange, show }) => (
  <div>
    <h2>My shopping list</h2>
    {ShoppingList(currentState.shoppingListItems, currentState.visibilityFilter, onClickItem)}
    {NewItem(onAddItem, currentState.newItem, newItemChange)}
    {VisibilityToggle(show)}
  </div>
);

export default Root
