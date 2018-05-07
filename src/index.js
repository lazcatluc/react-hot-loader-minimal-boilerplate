if (!global._babelPolyfill) {
	require('babel-polyfill');
}
import React from 'react'
import ReactDOM from 'react-dom'
import state from './containers/State'
import Root from './containers/Root'
import ApiUrl from './containers/ApiUrl'
import jsonp from 'jsonp'
import shoppingListId from './containers/shoppingListId'

const render = () => {
  ReactDOM.render(
      <Root currentState={state.getCurrentState()}
            onClickItem={state.checkItem}
            onAddItem={state.addItem}
            onRemoveItem={state.removeItem}
            newItemChange={state.newItemChange}
            show={state.show}
            setItemPrice={state.setItemPrice} />,
    document.getElementById('root')
  )
};

state.subscribe(render);
render();

jsonp(ApiUrl.list(shoppingListId), null, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    state.loadItems(response.items);
  }
});

if (module.hot)
  module.hot.accept();
