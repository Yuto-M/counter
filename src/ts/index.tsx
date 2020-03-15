import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter/index';

const App = (): any => {
  return (
    <Counter />
  );
};

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
