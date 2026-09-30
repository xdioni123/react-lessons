import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Person = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: "#e8f0fe",
        borderRadius: 10,
        marginBottom: 20,
    },

    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
});

export default Person;
