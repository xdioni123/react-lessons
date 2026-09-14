import React from "react";
import {Text , StyleSheet, View} from "react-native";

const MainScreen =()=> {

const message = "Hello wrold from out class!"
    return(
    <View style={styles.test}>
        <Text style={styles.textStyle}>This is a main screen</Text>
        <Text style={styles.textStyle}>{message}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    test: {
        flex: 1,
        backgroundColor: "lightblue",
        alignItems: "center",
        justifyContent: "center",        
    },
    textStyle:{
        fontSize: 30
    }
});



export default MainScreen;