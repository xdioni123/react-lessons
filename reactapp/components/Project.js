import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Project = ({ name, description }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.description}>
                {description}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        marginBottom: 15,
    },

    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },

    description: {
        fontSize: 16,
        color: "#666",
    },
});

export default Project;
