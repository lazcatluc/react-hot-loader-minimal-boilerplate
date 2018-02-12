import InitialList from './InitialItems'

export default (state = InitialList, action) => {
    const listItems = state;
    const index = action.index;
    return  [...listItems.slice(0, index),
              Object.assign({}, listItems[index], {checked: true}),
              ...listItems.slice(index + 1)];

};
