import InitialList from './InitialItems'

export default (state = InitialList, action) => {
    return state.map(item => {
      if (item.id === action.id) {
        return Object.assign({}, item, {checked: true, value: action.cost});
      }
      return item;
    });
};
