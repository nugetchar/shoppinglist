import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {store} from './store/store';
// allows us to interact with HTML
import ReactDom from 'react-dom';

import App from './components/App.jsx';

ReactDom.render(<App />, document.getElementById('root'));