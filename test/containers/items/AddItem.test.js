import deepFreeze from 'deepfreeze'
import AddItem from '../../../src/containers/items/AddItem';

const initialState = deepFreeze([1, 2, 3]);
const action = deepFreeze({item: 4});
const finalState = AddItem(initialState, action);

it('should add passed item as text', () => {
  expect(finalState[3].text).toEqual(4);
});

it('should add new item as unchecked initially', () => {
  expect(finalState[3].checked).toEqual(false);
});
