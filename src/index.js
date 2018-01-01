import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Paint from './Paint';
import registerServiceWorker from './registerServiceWorker';

const canvasSettings = {
    style: {
        background: 'white'
    },
    lineWidth: "2",
    strokeColor: "#d20001",
    width: 400,
    height: 700
}


ReactDOM.render(<Paint {...canvasSettings}/>, document.getElementById('root'));
registerServiceWorker();
