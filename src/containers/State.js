import { createStore } from 'redux'
import { combineReducers } from 'redux'
import visibilityFilter from './visibility'
import shoppingListItems from './items'
import newItem from './newItem'
import ApiUrl from './ApiUrl'
import uuid from './uuid'

const store = createStore(combineReducers({
  shoppingListItems,
  newItem,
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

const addItem = () => {
  const value = store.getState().newItem;
  store.dispatch({type: 'NEW_ITEM_CHANGE', value: ''});
  ws.sendItem({
    id: uuid(),
    shoppingListId,
    itemName: value,
    bought: false,
    removed: false
  });
};

const checkItem = (item) => ws.sendItem({
  id: item.id,
  shoppingListId,
  itemName: item.text,
  bought: true,
  removed: false
});

const removeItem = (item) => ws.sendItem({
  id: item.id,
  shoppingListId,
  itemName: item.text,
  bought: item.bought,
  removed: true
});

const show = (which) => store.dispatch({type: 'SHOW', which});
const loadItems = (items) => store.dispatch({type: 'LOAD_ITEMS', items});
const getCurrentState = () => store.getState();
const newItemChange = (value) => store.dispatch({type: 'NEW_ITEM_CHANGE', value});
const subscribe = store.subscribe;

export default {addItem, checkItem, show, loadItems, subscribe, getCurrentState, newItemChange, removeItem};
