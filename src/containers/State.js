import { createStore } from 'redux'
import { combineReducers } from 'redux'
import visibilityFilter from './visibility'
import shoppingListItems from './items'

const store = createStore(combineReducers({
  shoppingListItems,
  visibilityFilter
}));

const addItem = (itemText) => store.dispatch({type: 'ADD_ITEM', item: itemText});
const checkItem = (index) => store.dispatch({type: 'CHECK_ITEM', index});
const show = (which) => store.dispatch({type: 'SHOW', which});
const getCurrentState = () => store.getState();
const subscribe = store.subscribe;

export default {addItem, checkItem, show, subscribe, getCurrentState};