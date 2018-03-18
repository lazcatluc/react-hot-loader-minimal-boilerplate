import React from 'react';
import styles from './NewItem.css'

export default (onAddItem, newItemValue, newItemChange) => (
  <div className={styles.commentForm}>
    <div>
    <input type="text" value={newItemValue} className="form-control"
           onChange={event => newItemChange(event.target.value)}
	   onKeyPress={event => {
				if (event.key === 'Enter') {
				    onAddItem(event);
				}
                              }}/>
    </div>
    <div>
      <input type="submit" className={styles.addButton + " btn btn-primary"}
             onClick={onAddItem} value="Add" disabled={!newItemValue} />
    </div>
  </div>
);
