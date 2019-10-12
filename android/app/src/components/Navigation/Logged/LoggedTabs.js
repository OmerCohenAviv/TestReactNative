
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Logout from '../../../containers/Logout/Logout';




export const LoggedTabs = createMaterialTopTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            tabBarLabel: 'Logout',
        }
    },


}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? 'yellow' : 'yellow',
        style: {
            height: 56,
            color: 'black',
            fontSize: 25,
            fontWeight: 'bold',
            backgroundColor: Platform.OS === 'ios' ? 'lightgreen' : 'lightblue',
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

