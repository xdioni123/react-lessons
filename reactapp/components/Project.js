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
        width: 180,
        backgroundColor: "#f2f2f2",
        borderRadius: 12,
        marginBottom: 15,
        overflow: "hidden",
    },

    image: {
        width: 180,
        height: 160,
        resizeMode: "cover",
    },

    info: {
        padding: 12,
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },

    description: {
        fontSize: 14,
        color: "#666",
    },
    
});

export default Project;