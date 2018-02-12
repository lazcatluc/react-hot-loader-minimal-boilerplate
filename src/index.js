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
      <Root currentState={store.getState()}
            onClickItem={(index) => store.dispatch({type: 'CHECK_ITEM', index})}
            show={(which) => store.dispatch({type: 'SHOW', which})} />
    </AppContainer>,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();

if (module.hot) {
  module.hot.accept('.', () => { render() });
}
