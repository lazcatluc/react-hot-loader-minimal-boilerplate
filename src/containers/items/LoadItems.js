import InitialList from './InitialItems'

const mapToItem = (shoppingItem) => {
  return {
    id: shoppingItem.id,
    text: shoppingItem.itemName,
    checked: shoppingItem.bought
  };
};

export default (state = InitialList, action) => {
  return action.shoppingItems.filter(shoppingItem => !shoppingItem.removed).map(mapToItem);
};
