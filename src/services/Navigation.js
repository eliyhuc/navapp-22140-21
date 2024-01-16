import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from './appColors'
import Dashboard from '../screens/Dashboard';
import Games from '../screens/Games';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppTabs = createMaterialBottomTabNavigator();

export const Tabs = () => {
    return(
        <AppTabs.Navigator 
            activeColor={colors.white}
            inactiveColor={colors.raspberry_pi}
            barStyle={{backgroundColor: colors.raspberry}}>

            <AppTabs.Screen 
            options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} size={30} name='view-dashboard' />
            }}
            name='Dashboard' component={Dashboard} />

            <AppTabs.Screen
            options={{
                tabBarLabel: 'Games',
                tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} size={30} name='rocket' />
            }}
            name='Games' component={Games} />

            <AppTabs.Screen 
            options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} size={30} name='cart' />
            }}
            name='Cart' component={Cart} />

            <AppTabs.Screen
            options={{
                tabBarLabel: 'My Profile',
                tabBarIcon: ({color}) => <MaterialCommunityIcons color={color} size={30} name='account-cog' />
            }}
            name='Profile' component={Profile} />

        </AppTabs.Navigator>
    )
}