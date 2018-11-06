import React from 'react';
import './styles/app.scss';

const App = props => (
  <div>
    <h2>Hello world</h2>
    <p>
      props:
      {JSON.stringify(props)}
    </p>
  </div>
);

export default App;
