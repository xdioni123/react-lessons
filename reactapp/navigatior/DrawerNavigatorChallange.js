
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
                    backgroundColor: "#241638",
                    width: 260,
                },
                drawerActiveTintColor: "#FFFFFF",
                drawerInactiveTintColor: "#CBBBDD",
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: "600",
                },
                drawerActiveBackgroundColor: "#68439A",
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
