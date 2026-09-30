import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Project = ({ name, description, image }) => {
    return (
        <View style={styles.container}>

            <Image
                source={image}
                style={styles.image}
            />

            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>

                <Text style={styles.description}>
                    {description}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        borderRadius: 15,
        marginBottom: 15,
        overflow: "hidden",
    },

    image: {
        width: "100%",
        height: 160,
        resizeMode: "cover",
    },

    info: {
        padding: 15,
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