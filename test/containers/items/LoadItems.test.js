import deepFreeze from 'deepfreeze'
import LoadItems from '../../../src/containers/items/LoadItems';

it('Should populate list with what is loaded from server', () => {
  const initialState = deepFreeze([
    {text: "first", checked: false},
    {text: "second", checked: true},
    {text: "third", checked: false}
  ]);

  const action = deepFreeze({
    items: [
      {id: '1', itemName: '1', boughtDate: 'today'},
      {id: '1', itemName: '2', boughtDate: null}
    ]
  });

  expect(LoadItems(initialState, action)).toEqual([
    {id: '1', text: "1", checked: true},
    {id: '1', text: "2", checked: false}
  ]);
});
