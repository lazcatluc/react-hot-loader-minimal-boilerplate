import InitialList from './InitialList'

export default (state = InitialList, action) => {
  return {shoppingListItems: [...state.shoppingListItems,
                              {text: action.item, checked: false}
                             ]};
};
