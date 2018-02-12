import deepFreeze from 'deepfreeze'
import AddItem from '../../../src/containers/shopping/AddItem';

const initialState = deepFreeze({shoppingListItems: [1, 2, 3]});
const action = deepFreeze({item: 4});
const finalState = AddItem(initialState, action);

it('should add passed item as text', () => {
  expect(finalState.shoppingListItems[3].text).toEqual(4);
});

it('should add new item as unchecked initially', () => {
  expect(finalState.shoppingListItems[3].checked).toEqual(false);
});
