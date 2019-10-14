import { createStackNavigator } from 'react-navigation-stack'
import { LoggedTabs } from './LoggedTabs';
import Following from '../../../containers/Follow/Following';
import Follow from '../../../containers/Follow/Follow';

export const mainStackNavigatorLogged = createStackNavigator({
    Home: {
        screen: LoggedTabs,
        navigationOptions: {
            header: null,
        }
    },
    Following: {
        screen: Following,
    }
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