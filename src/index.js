import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from './hello/Hello';
import Clock from './clock/clock';
import Props from './props/Props';
import State from './state/state';
import Ciclolife from './ciclolife/ciclo';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Clock />
    <Props attr='p' attr2='Valor do Segundo Atributo'/>
    <State />
    <Ciclolife />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
