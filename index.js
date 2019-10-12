import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import thunk from 'redux-thunk';
import authReducer from './android/app/src/store/reducers/authReducer';
import dashboardReducer from './android/app/src/store/reducers/dashboardReducer';

const combinedReducers = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
});
const store = createStore(combinedReducers, applyMiddleware(thunk));

const app = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => app);
