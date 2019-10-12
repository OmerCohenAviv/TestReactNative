import { createStackNavigator } from 'react-navigation-stack'
import { LoggedTabs } from './LoggedTabs';

export const mainStackNavigatorLogged = createStackNavigator({
    Home: {
        screen: LoggedTabs,
        navigationOptions: {
            header: null,
        }
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