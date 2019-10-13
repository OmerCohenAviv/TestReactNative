
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import Logout from '../../../containers/Logout/Logout';
import AddPost from '../../../containers/AddPost/AddPost'




export const LoggedTabs = createMaterialTopTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    AddNewPost: {
        screen: AddPost,
        navigationOptions: {
            tabBarLabel: 'New Post'
        }
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

