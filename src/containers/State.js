import { createStore } from 'redux'
import { combineReducers } from 'redux'
import visibilityFilter from './visibility'
import shoppingListItems from './items'
import ApiUrl from './ApiUrl'
import uuid from './uuid'

const store = createStore(combineReducers({
  shoppingListItems,
  visibilityFilter
}));

const shoppingListId = "c00af06f-787b-44f0-afb5-81be5875ed45"
const ws = ApiUrl.connectToList(shoppingListId);
ws.subscribe((shoppingItem) => {
  if (shoppingItem.removed) {
    return store.dispatch({type: 'REMOVE_ITEM', id: shoppingItem.id});
  }
  if (shoppingItem.bought) {
    return store.dispatch({type: 'CHECK_ITEM', id: shoppingItem.id});
  }

  console.log("Adding " + shoppingItem.itemName);
  return store.dispatch({type: 'ADD_ITEM', item: shoppingItem.itemName});
});

const addItem = (itemName) => ws.sendItem({
  id: uuid(),
  shoppingListId,
  itemName,
  bought: false,
  removed: false
});
const checkItem = (item) => ws.sendItem({
  id: item.id,
  shoppingListId,
  itemName: item.text,
  bought: true,
  removed: false
});
const show = (which) => store.dispatch({type: 'SHOW', which});
const loadItems = (items) => store.dispatch({type: 'LOAD_ITEMS', items});
const getCurrentState = () => store.getState();
const subscribe = store.subscribe;

export default {addItem, checkItem, show, loadItems, subscribe, getCurrentState};
