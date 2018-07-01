import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'
import VisibilityToggle from './visibility/VisibilityToggle'
import NewItem from './newItem/NewItem'

// test cache

const Root = ({ currentState, onClickItem, onAddItem, onRemoveItem, newItemChange, show, setItemPrice }) => (
  <div className="well" style={{border: 0, borderRadius: 0}}>
    {ShoppingList(currentState.shoppingListItems, currentState.visibilityFilter,
      onClickItem, onRemoveItem, setItemPrice)}
    {NewItem(onAddItem, currentState.newItem, newItemChange)}
    {VisibilityToggle(show, currentState.visibilityFilter)}
  </div>
);

export default Root
