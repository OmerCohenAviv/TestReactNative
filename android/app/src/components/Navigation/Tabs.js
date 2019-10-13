
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Dashboard from '../../containers/Dashboard/Dashboard';
import Register from '../../containers/Register/Register';


export const Tabs = createMaterialTopTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            tabBarLabel: 'Register',
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'yellow' : 'yellow',
        style: {
            height: 56,
            fontWeight: 'bold',
            backgroundColor: Platform.OS === 'ios' ? 'lightgreen' : 'rgb(52, 67, 235)',
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    },

});

