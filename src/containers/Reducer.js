import InitialList from './shopping/InitialList'
import AddItem from './shopping/AddItem'
import CheckItem from './shopping/CheckItem'

export default (state = InitialList, action) => {
  if (action.type === 'ADD_ITEM') {
    return AddItem(state, action);
  }
  if (action.type === 'CHECK_ITEM') {
    return CheckItem(state, action);
  }
  return state;
};
