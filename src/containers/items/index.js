import InitialList from './InitialItems'
import AddItem from './AddItem'
import CheckItem from './CheckItem'

export default (state = InitialList, action) => {
  if (action.type === 'ADD_ITEM') {
    return AddItem(state, action);
  }
  if (action.type === 'CHECK_ITEM') {
    return CheckItem(state, action);
  }
  return state;
};
