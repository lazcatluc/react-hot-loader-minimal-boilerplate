import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import state from './containers/State'
import Root from './containers/Root'
import ApiUrl from './containers/ApiUrl'
import jsonp from 'jsonp'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Root currentState={state.getCurrentState()}
            onClickItem={state.checkItem}
            onAddItem={state.addItem}
            newItemChange={state.newItemChange}
            show={state.show}/>
    </AppContainer>,
    document.getElementById('root')
  )
};

state.subscribe(render);
render();

jsonp(ApiUrl.userList('1464923436924425'), null, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    state.loadItems(response.items);
  }
});

if (module.hot) {
  module.hot.accept('.', () => {
    render()
  });
}
