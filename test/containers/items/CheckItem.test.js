import deepFreeze from 'deepfreeze'
import CheckItem from '../../../src/containers/items/CheckItem';

const initialState = deepFreeze([
  {text: "first", checked: false},
  {text: "second", checked: true},
  {text: "third", checked: false}
]);

it('Should check first item', () => {
  expect(CheckItem(initialState, deepFreeze({index: 0}))[0].checked).toEqual(true);
});

it('Should leave third item unchecked when checking first item', () => {
  expect(CheckItem(initialState, deepFreeze({index: 0}))[2].checked).toEqual(false);
});

it('Should leave already checked second item as is when checking it again', () => {
  expect(CheckItem(initialState, deepFreeze({index: 1}))).toEqual(initialState);
});

it('Should check third item', () => {
  expect(CheckItem(initialState, deepFreeze({index: 2}))[2].checked).toEqual(true);
});
