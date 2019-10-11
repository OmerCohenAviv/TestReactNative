

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import authReducer from './android/app/src/store/reducers/authReducer';

const combinedReducers = combineReducers({
    auth: authReducer,
});
const store = createStore(combinedReducers, applyMiddleware(thunk));

const app = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => app);
