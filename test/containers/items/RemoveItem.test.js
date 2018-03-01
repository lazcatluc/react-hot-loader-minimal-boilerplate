import deepFreeze from 'deepfreeze'
import RemoveItem from '../../../src/containers/items/RemoveItem';

const initialState = deepFreeze([
  {id: "a", text: "first", checked: false},
  {id: "b", text: "second", checked: true},
  {id: "c", text: "third", checked: false}
]);

it('Should remove first item', () => {
  expect(RemoveItem(initialState, deepFreeze({id: "a"}))).toEqual([
    {id: "b", text: "second", checked: true},
    {id: "c", text: "third", checked: false}
  ]);
});

it('Should leave state as is for unkown id', () => {
  expect(RemoveItem(initialState, deepFreeze({id: "foo"}))).toEqual(initialState);
});
