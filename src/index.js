import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {store} from './store/store';
// allows us to interact with HTML
import ReactDom from 'react-dom';

import App from './components/App.jsx';
import { Provider } from 'react-redux'


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));  