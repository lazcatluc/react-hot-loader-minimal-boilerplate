import React from 'react'
import ShoppingList from './ShoppingList.js'

const Root = () => (
  <div>
    <div>Hello React Hot Loader 1!</div>
    {ShoppingList(['x', 'y', 'z'])}
  </div>
)

export default Root
