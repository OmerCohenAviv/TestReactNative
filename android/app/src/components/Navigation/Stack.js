import { createStackNavigator } from 'react-navigation-stack'
import { Tabs } from './Tabs';
import Login from '../../containers/Login/Login';

export const mainStackNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
    },
},
    {
        defaultNavigationOptions: {
            headerTintColor: 'black',
            headerStyle: {
                backgroundColor: 'lightblue',
            },
        },
    }
);