import InitialList from './InitialItems'

export default (state = InitialList, action) => {
  return state.map(item => {
    if (item.id !== action.item.id) {
      return item;
    }
    return Object.assign({}, item, {value: action.value});
  });
};
