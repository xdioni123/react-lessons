import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Home from "../screen/Home";
import About from '../screen/About';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#ff6347",
    },
    headerTintColor: "White"
}

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    );
}

const AboutStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name = "About" component={About}/>
        </Stack.Navigator>
    );
}


export {AboutStackNavigator , MainStackNavigator};