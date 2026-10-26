import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import Home from "../screen/Home";
import About from '../screen/About';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "purple",
    },
}

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <StackScreen name = "Home" component={Home}/>
            <StackScreen name = "About" component = {About}/>
        </Stack.Navigator>
    );
}

export default MainStackNavigator;