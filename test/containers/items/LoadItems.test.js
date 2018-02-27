import deepFreeze from 'deepfreeze'
import LoadItems from '../../../src/containers/items/LoadItems';

it('Should populate list with what is loaded from server', () => {
  const initialState = deepFreeze([
    {text: "first", checked: false},
    {text: "second", checked: true},
    {text: "third", checked: false}
  ]);

  const action = deepFreeze({
    shoppingItems: [
      {id: '1', itemName: '1', bought: true, removed: false},
      {id: '1', itemName: '2', bought: false, removed: false},
      {id: '1', itemName: '3', bought: true, removed: true},
      {id: '1', itemName: '4', bought: false, removed: true}
    ]
  });

  expect(LoadItems(initialState, action)).toEqual([
    {id: '1', text: "1", checked: true},
    {id: '1', text: "2", checked: false}
  ]);
});
