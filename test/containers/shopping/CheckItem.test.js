import deepFreeze from 'deepfreeze'
import CheckItem from '../../../src/containers/shopping/CheckItem';

const initialState = deepFreeze({shoppingListItems: [
  {text: "first", checked: false},
  {text: "second", checked: true},
  {text: "third", checked: false}
]});

it('Should check first item', () => {
  expect(CheckItem(initialState, {index: 0}).shoppingListItems[0].checked).toEqual(true);
});

it('Should leave third item unchecked when checking first item', () => {
  expect(CheckItem(initialState, {index: 0}).shoppingListItems[2].checked).toEqual(false);
});

it('Should leave already checked second item as is when checking it again', () => {
  expect(CheckItem(initialState, {index: 1})).toEqual(initialState);
});

it('Should check third item', () => {
  expect(CheckItem(initialState, {index: 2}).shoppingListItems[2].checked).toEqual(true);
});
