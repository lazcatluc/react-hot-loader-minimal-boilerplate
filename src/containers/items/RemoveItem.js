import InitialList from './InitialItems'

export default (state = InitialList, action) => {
  return state.filter(item => item.id !== action.id);
};
