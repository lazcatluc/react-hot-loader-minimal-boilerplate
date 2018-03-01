import InitialList from './InitialItems'
import AddItem from './AddItem'
import CheckItem from './CheckItem'
import RemoveItem from './RemoveItem'
import LoadItems from './LoadItems'

export default (state = InitialList, action) => {
  if (action.type === 'ADD_ITEM') {
    return AddItem(state, action);
  }
  if (action.type === 'CHECK_ITEM') {
    return CheckItem(state, action);
  }
  if (action.type === 'REMOVE_ITEM') {
    return RemoveItem(state, action);
  }
  if (action.type === 'LOAD_ITEMS') {
    return LoadItems(state, action);
  }
  return state;
};
