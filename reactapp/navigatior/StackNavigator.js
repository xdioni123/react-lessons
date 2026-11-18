
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screen/Home";
import About from '../screen/About';
import ProductScreen from '../screen/ProductScreen';
import ProductDetails from '../screen/ProductDetails';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#343E52",
    },
    headerTintColor: "#FFFFFF",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>

            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="ProductScreen"
                component={ProductScreen}
            />

            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    );
};

const AboutStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen
                name="About"
                component={About}
            />
        </Stack.Navigator>
    );
};

export { AboutStackNavigator, MainStackNavigator };
