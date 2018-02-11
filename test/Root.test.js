import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import Root from '../src/containers/Root';
import reduce from '../src/containers/Reduce'

const store = createStore(reduce);

it('renders Root', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root currentState={store.getState()} />, div);
});
