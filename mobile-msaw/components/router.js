import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Map from './Map/Map';
import Posts from './Posts/Posts';
import Schedule from './Schedule/Schedule';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HomeNavigator = createMaterialTopTabNavigator(
    {
        Schedule: {
            screen: Schedule,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'timer' : 'timer'} size={focused ? 27 : 25} color={tintColor} />
                )
            }
        },
        Posts: {
            screen: Posts,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={focused ? 27 : 25} color={tintColor} />
                )
            }
        },
        Map: {
            screen: Map,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialIcons name={focused ? 'map' : 'map'} size={25} color={tintColor} />
                )
            }
        }
    },
    {
        initialRouteName: 'Schedule',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        backBehavior: 'initialRoute',
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(0, 0, 0, 0.85)',
            showIcon: true,
            showLabel: false,
            labelStyle: {
                color: 'black',
                backgroundColor: 'white',
                borderColor: 'white',
                shadowColor: 'white',
            },
            tabStyle: {
                backgroundColor: '#00AEF9',
            },
            style: {
                backgroundColor: '#00AEF9',
            }
        }
    }
);

export const ClubPageNavigator = createStackNavigator(
    {
        Schedule: { screen: Schedule },
        Posts: { screen: Posts },
        Map: { screen: Map }
    },
    {
        initialRouteName: 'Schedule',
        headerMode: 'screen',
        defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    }
)

export const MSAWNavigator = createSwitchNavigator(
    {
        HomeNavigation: { screen: HomeNavigator }
    }
)

export const LoginNavigator = createSwitchNavigator(
    {
        Login: { screen: Login },
        SignUp: { screen: SignUp },
        MSAWNavigation: { screen: MSAWNavigator }
    }
);

const App = createAppContainer(LoginNavigator);
export default App;
