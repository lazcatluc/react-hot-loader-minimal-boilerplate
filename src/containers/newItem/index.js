export default (state = '', action) => {
  if (action.type === 'NEW_ITEM_CHANGE') {
    return action.value;
  }
  return state;
}
