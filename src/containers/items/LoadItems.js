import InitialList from './InitialItems'

const mapToItem = (shoppingItem) => {
  return {
    id: shoppingItem.id,
    text: shoppingItem.itemName,
    checked: shoppingItem.boughtDate !== null
  };
};

export default (state = InitialList, action) => {
  return action.items.map(mapToItem);
};
