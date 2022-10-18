import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/App'
import thunk from 'redux-thunk'
import {database} from './database/config' 

// const array = ['me','me','you'];
// const element = React.createElement('ol',null,array.map((ele, index) => React.createElement('li', {key : index}, ele)));
// const element = <ol><li>wow</li></ol>

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));