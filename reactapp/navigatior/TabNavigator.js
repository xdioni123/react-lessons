import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MainStackNavigator, AboutStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "lightgray",
        style: {
            backgroundColor: "blue",
        },
        lableStyle: {
            fontSize:12,
        }
    }}
    >
        <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
            tabBarLable: "Home",
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" size={26} color={color}/>
            ),
        }}
        />
                <Tab.Screen
                name='About'
                component={AboutStackNavigator}
                options={{
                    tabBarLable: 'About',
                    tabBarIcon: ({color})=>(
                        <MaterialCommunityIcons name='video-stabilization' soze={26} color={color}/>
                    ),
                }}/>
    </Tab.Navigator>
    );
}

export default BottomTabNavigator; 