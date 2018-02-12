import { combineReducers } from 'redux'
import visibilityFilter from './visibility'
import shoppingListItems from './items'

export default combineReducers({
  shoppingListItems,
  visibilityFilter
});
