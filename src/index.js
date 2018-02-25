import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import state from './containers/State'
import Root from './containers/Root'
import WebSocket from './containers/websocket/WebSocket'

WebSocket.connect();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root currentState={state.getCurrentState()}
            onClickItem={state.checkItem}
            show={state.show} />
    </AppContainer>,
    document.getElementById('root')
  )
};

state.subscribe(render);
render();

if (module.hot) {
  module.hot.accept('.', () => { render() });
}
