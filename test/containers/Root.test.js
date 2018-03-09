import React from 'react';
import ReactDOM from 'react-dom';
import Root from '../../src/containers/Root';
import state from '../../src/containers/State';

it('renders Root', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root currentState={state.getCurrentState()}
                        onClickItem={state.checkItem}
                        onAddItem={state.addItem}
                        onRemoveItem={state.removeItem}
                        newItemChange={state.newItemChange}
                        show={state.show} />, div);
});
