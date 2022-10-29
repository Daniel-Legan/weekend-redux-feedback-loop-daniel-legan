import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feeling = (state = '', action) => {
    switch (action.type) {
        case 'FEELING_DATA':
            return action.payload;
        case 'RESET':
            return '';
    }
    return state;
}

const understanding = (state = '', action) => {
    switch (action.type) {
        case 'UNDERSTANDING_DATA':
            return action.payload;
        case 'RESET':
            return '';
    }
    return state;
}

const support = (state = '', action) => {
    switch (action.type) {
        case 'SUPPORT_DATA':
            return action.payload;
        case 'RESET':
            return '';
    }
    return state;
}

const comments = (state = '', action) => {
    switch (action.type) {
        case 'COMMENT_DATA':
            return action.payload;
        case 'RESET':
            return '';
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    applyMiddleware(logger)
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Provider store={storeInstance}><App /></Provider >, document.getElementById('root'));
registerServiceWorker();
