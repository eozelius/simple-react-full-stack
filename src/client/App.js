import React from 'react';
import Header from './components/Header';
import LambdaMap from './components/LambdaMap';
import style from './styles/app.scss';

const App = () => (
  <div className={style.app}>
    <Header />
    <LambdaMap />
  </div>
);

export default App;
