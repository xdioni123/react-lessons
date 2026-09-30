import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Person from "../components/Person";
import Project from "../components/Project";

const PersonalScreen = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Personal Screen</Text>

            <Person name="Dion" />

            <Text style={styles.projectsTitle}>PROJECTS</Text>

            <View style={styles.projects}>
                <Project
                    name="My React Native App"
                    description="A project I am currently working on."
                    image={require("../assets/project1.png")}
                />

                <Project
                    name="Another Project"
                    description="Another project description."
                    image={require("../assets/project2.png")}
                />
            </View>

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

    projectsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },

    projects: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
});

export default PersonalScreen;