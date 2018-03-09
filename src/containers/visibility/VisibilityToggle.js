import React from 'react';
import styles from './VisibilityToggle.css'

export default (show, visibilityFilter) => (
  <div className={styles.footer}>
      <input type="submit" className={styles.footerBtn + " btn btn-primary"}
             onClick={() => show('all')} value="All" disabled={visibilityFilter==='all'} />
      <input type="submit" className={styles.footerBtn + " btn btn-warning"}
             onClick={() => show('remaining')} value="Remaining" disabled={visibilityFilter==='remaining'} />
      <input type="submit" className={styles.footerBtn + " btn btn-success"}
             onClick={() => show('completed')} value="Completed" disabled={visibilityFilter==='completed'}/>
  </div>
);


