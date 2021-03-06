import deepFreeze from 'deepfreeze'
import Show from '../../../src/containers/visibility/Show';

const initialState = 'all';

it('should change the visibility according to parameter', () => {
  expect(Show(initialState, deepFreeze({which: 'completed'}))).toEqual('completed');
});

it('should do nothing when the selection is the same', () => {
  expect(Show(initialState, deepFreeze({which: 'all'}))).toEqual(initialState);
});
