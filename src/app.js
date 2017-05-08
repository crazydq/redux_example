import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from './redux/index'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action);
        let returnValue = next(action);
        console.log('state after dispatch', getState());
        return returnValue
    }
}

const store = createStore(reducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
