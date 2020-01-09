import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Login from './Login/Login';
import Map from './Map/Map';
import Sponsors from './Sponsors/Sponsors';
import SponsorInformation from './Sponsors/SponsorInformation';
import EventInformation from './Schedule/EventInformation';
import Friday from './Schedule/Friday';
import Saturday from './Schedule/Saturday';
import Sunday from './Schedule/Sunday';
import SchedulePicker from './Schedule/SchedulePicker';
import { createStackNavigator } from 'react-navigation-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const SponsorNavigator = createStackNavigator(
    {
        Sponsors: Sponsors ,
        SponsorInformation: SponsorInformation
    }
)


export const ScheduleNavigator = createMaterialTopTabNavigator(
    {
        Friday: {
            screen: Friday
        },
        Saturday: {
            screen: Saturday
        },
        Sunday: {
            screen: Sunday
        }
    },
    {
        initialRouteName: 'Friday',
        swipeEnabled: true,
        animationEnabled: true,
        backBehavior: 'initialRoute',
        tabBarOptions: {
            activeTintColor: '#00AEF9',
            inactiveTintColor: 'black',
            tabStyle: {
                backgroundColor: 'white'
            },
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                backgroundColor: '#00AEF9'
            }
        }
    }
)

export const ScheduleSelectorNavigator = createStackNavigator(
    {
        ScheduleNavigator: ScheduleNavigator ,
        SchedulePicker: SchedulePicker,
        EventInformation: EventInformation
    }
)

export const HomeNavigator = createMaterialTopTabNavigator(
    {
        Schedule: {
            screen: ScheduleSelectorNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'timer' : 'timer'} size={focused ? 27 : 25} color={tintColor} />
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
        },
        Sponsors: {
            screen: SponsorNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={focused ? 27 : 25} color={tintColor} />
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
            activeTintColor: '#00AEF9',
            inactiveTintColor: 'rgba(0, 0, 0, 0.85)',
            showIcon: true,
            showLabel: false,
            labelStyle: {
                color: 'black',
                backgroundColor: '#00AEF9',
                borderColor: 'white',
                shadowColor: 'white',
            },
            tabStyle: {
                backgroundColor: 'white',
            },
            style: {
                backgroundColor: 'white',
            },
            indicatorStyle: {
                backgroundColor: '#00AEF9'
            }
        }
    }
);

export const LoginNavigator = createSwitchNavigator(
    {
        Login: { screen: Login },
        MSAWNavigation: { screen: HomeNavigator }
    }
);


const AppNav = createAppContainer(LoginNavigator);
export default AppNav;
