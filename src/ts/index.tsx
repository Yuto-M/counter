import React from 'react';
import ReactDOM from 'react-dom';

const Tee = (): any => (
  <div>hoge</div>
);

console.log('hoge');

ReactDOM.render(
  <Tee />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
