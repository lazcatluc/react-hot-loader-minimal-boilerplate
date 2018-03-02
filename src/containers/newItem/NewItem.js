import React from 'react';

export default (onAddItem, newItemValue, newItemChange) => (
  <div id="add-new">
    <input type="text" value={newItemValue}
           onChange={event => newItemChange(event.target.value)} />
    <button onClick={onAddItem}>Add</button>
  </div>
);
