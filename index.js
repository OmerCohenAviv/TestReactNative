import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Provider } from 'react-redux'
import App from './App';
import thunk from 'redux-thunk';
import authReducer from './android/app/src/store/reducers/authReducer';
import dashboardReducer from './android/app/src/store/reducers/dashboardReducer';
import followReducer from './android/app/src/store/reducers/followReducer';

const combinedReducers = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    follow: followReducer
});

const store = createStore(combinedReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const app = () => (
    <Provider store={store}>
        <App />
    </Provider>
)


AppRegistry.registerComponent(appName, () => app);
