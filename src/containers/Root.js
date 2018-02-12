import React from 'react'
import ShoppingList from './shopping/ShoppingList.js'

const Root = ({ currentState, onClickItem, show }) => (
  <div>
    <h2>My shopping list</h2>
    {ShoppingList(currentState.shoppingListItems, currentState.visibilityFilter, onClickItem)}
    <div>
      <a href="#" onClick={() => show('all')}>All</a>
      <a href="#" onClick={() => show('remaining')}>Remaining</a>
      <a href="#" onClick={() => show('completed')}>Completed</a>
    </div>
  </div>
);

export default Root
