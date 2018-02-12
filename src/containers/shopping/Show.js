import InitialList from './InitialList'

export default (state = InitialList, action) => {
  return Object.assign({}, state, {visibilityFilter: action.which});
}
