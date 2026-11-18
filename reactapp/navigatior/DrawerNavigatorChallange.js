
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AboutStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: "#343E52",
                    width: 260,
                },
                drawerActiveTintColor: "#FFFFFF",
                drawerInactiveTintColor: "#C5CEDB",
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: "600",
                },
                drawerActiveBackgroundColor: "#20BFE0",
                drawerItemStyle: {
                    borderRadius: 10,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{
                    drawerIcon: () => null,
                }}
            />

            <Drawer.Screen
                name="About"
                component={AboutStackNavigator}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
