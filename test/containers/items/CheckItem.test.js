import deepFreeze from 'deepfreeze'
import CheckItem from '../../../src/containers/items/CheckItem';

const initialState = deepFreeze([
  {id: "a", text: "first", checked: false},
  {id: "b", text: "second", checked: true},
  {id: "c", text: "third", checked: false}
]);

it('Should check first item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "a"}))[0].checked).toEqual(true);
});

it('Should leave third item unchecked when checking first item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "a"}))[2].checked).toEqual(false);
});

it('Should leave already checked second item as is when checking it again', () => {
  expect(CheckItem(initialState, deepFreeze({id: "b"}))).toEqual(initialState);
});

it('Should check third item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "c"}))[2].checked).toEqual(true);
});
