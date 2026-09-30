import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import Person from "../components/Person";
import Project from "../components/Project";

const PersonalScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personal Screen</Text>

            <Person name="Dion" />

            <Project
                name="My React Native App"
                description="A project I am currently working on."
            />

            <Project
                name="Another Project"
                description="Another project description."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
});

export default PersonalScreen;
