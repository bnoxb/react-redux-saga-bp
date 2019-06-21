import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas/index'
import { checkWebToken } from './utils/authUtils'
import { setToken } from './redux/actions/auth/authActions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// Routes are all in a separate file
import App from './App'

// use reduxDevTools if you have the extension
const reduxDevTools =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(rootSaga)

if(localStorage.userToken) {
  if(checkWebToken(localStorage.userToken)) {
    store.dispatch(setToken())
  } else {
    localStorage.removeItem('userToken')
  }
}



// Router's root element
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

