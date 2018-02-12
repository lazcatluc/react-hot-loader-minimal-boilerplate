import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import Root from '../../src/containers/Root';
import Reducer from '../../src/containers/Reducer';

const store = createStore(Reducer);

it('renders Root', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root currentState={store.getState()}
                        onClickItem={(index) => store.dispatch({type: 'CHECK_ITEM', index})}
                        show={(which) => store.dispatch({type: 'SHOW', which})} />, div);
});
