import Show from './Show'

export default (state = 'all', action) => {
  if (action.type === 'SHOW') {
    return Show(state, action);
  }
  return state;
};
