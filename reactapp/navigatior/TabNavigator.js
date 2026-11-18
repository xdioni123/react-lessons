
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {MainStackNavigator,AboutStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#20BFE0',
                tabBarInactiveTintColor: '#C5CEDB',
                tabBarStyle: {
                    backgroundColor: '#343E52',
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
                headerShown: false,
            }}
        >

            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="About"
                component={AboutStackNavigator}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="information-outline"
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
