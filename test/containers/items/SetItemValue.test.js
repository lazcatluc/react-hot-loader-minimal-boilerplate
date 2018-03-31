import deepFreeze from 'deepfreeze'
import SetItemValue from '../../../src/containers/items/SetItemValue';

const initialState = deepFreeze([
  {id: "a", text: "first", checked: false},
  {id: "b", text: "second", checked: true}
]);

it('Should set value for first item', () => {
  expect(SetItemValue(initialState, deepFreeze({item: {id: "a"}, value: 10}))).toEqual([
    {id: "a", text: "first", checked: false, value: 10},
    {id: "b", text: "second", checked: true}
  ]);
});
