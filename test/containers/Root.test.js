import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import Root from '../../src/containers/Root';
import Reducer from '../../src/containers/Reducer'

const store = createStore(Reducer);

it('renders Root', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root currentState={store.getState()} />, div);
});
