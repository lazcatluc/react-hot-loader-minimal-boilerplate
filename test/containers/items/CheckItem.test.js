import deepFreeze from 'deepfreeze'
import CheckItem from '../../../src/containers/items/CheckItem';

const initialState = deepFreeze([
  {id: "a", text: "first", checked: false},
  {id: "b", text: "second", checked: true, value: 1.0},
  {id: "c", text: "third", checked: false}
]);

it('Should check first item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "a"}))[0].checked).toEqual(true);
});

it('Should leave third item unchecked when checking first item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "a"}))[2].checked).toEqual(false);
});

it('Should leave already checked second item as is when checking it again', () => {
  expect(CheckItem(initialState, deepFreeze({id: "b", cost: 1.0}))).toEqual(initialState);
});

it('Updates cost of checked second item when modified', () => {
  expect(CheckItem(initialState, deepFreeze({id: "b", cost: 2.0}))[1].value).toEqual(2.0);
});

it('Should check third item', () => {
  expect(CheckItem(initialState, deepFreeze({id: "c"}))[2].checked).toEqual(true);
});
