import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// allows us to interact with HTML
import ReactDom from 'react-dom';

import App from './components/App.jsx';

ReactDom.render(<App />, document.getElementById('root'));