import InitialList from './InitialItems'

export default (state = InitialList, action) => {
  return [...state,
          {id: action.item.id, text: action.item.itemName, checked: false}
         ];
};
