import React from 'react'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Reducer from './containers/Reducer'
import Root from './containers/Root'

const store = createStore(Reducer);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root currentState={store.getState()} />
    </AppContainer>,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();

if (module.hot) {
  module.hot.accept('.', () => { render() });
}
