import InitialList from './InitialItems'

export default (state = InitialList, action) => {
  return [...state,
          {text: action.item, checked: false}
         ];
};
