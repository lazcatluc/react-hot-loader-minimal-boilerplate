import deepFreeze from 'deepfreeze'
import Show from '../../../src/containers/shopping/Show';

const initialState = deepFreeze({
  visibilityFilter: 'all'
});

it('should change the visibility according to parameter', () => {
  expect(Show(initialState, deepFreeze({which: 'completed'}))).toEqual({
    visibilityFilter: 'completed'
  });
});

it('should do nothing when the selection is the same', () => {
  expect(Show(initialState, deepFreeze({which: 'all'}))).toEqual(initialState);
});
