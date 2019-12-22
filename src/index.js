import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './components/history';
import './index.css';
import App from './components/app/';

ReactDOM.render(
<Router history={history}> 
<App />
</Router>, document.getElementById('root'));



