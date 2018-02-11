import InitialList from './InitialList'

export default (state = InitialList, action) => {
    const listItems = state.shoppingListItems;
    const index = action.index;
    return {
    shoppingListItems: [...listItems.slice(0, index),
                        Object.assign({}, listItems[index], {checked: true}),
                        ...listItems.slice(index + 1)]
  };
};
