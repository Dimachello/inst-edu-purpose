import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from './components/history';
import './index.css';
import App from './components/app/';
import { Provider } from 'react-redux';
import store from './redux-components/store';

ReactDOM.render(
<Router history={history}> 
<Provider store={store}>
<App />
</Provider>
</Router>, document.getElementById('root'));



