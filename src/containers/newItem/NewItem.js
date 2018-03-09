import React from 'react';
import styles from './NewItem.css'

export default (onAddItem, newItemValue, newItemChange) => (
  <div className={styles.commentForm}>
    <div className="col-xs-10" style={{padding: 0}}>
    <input type="text" value={newItemValue} className="form-control"
           onChange={event => newItemChange(event.target.value)} />
    </div>
    <div className="col-xs-2">
      <input type="submit" className="btn btn-primary" onClick={onAddItem} value="Add" disabled={!newItemValue} />
    </div>
  </div>
);
