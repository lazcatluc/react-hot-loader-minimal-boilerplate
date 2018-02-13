import React from 'react';

export default (show) => (
  <div>
    <a href="#" onClick={() => show('all')}>All</a>
    <a href="#" onClick={() => show('remaining')}>Remaining</a>
    <a href="#" onClick={() => show('completed')}>Completed</a>
  </div>
);


