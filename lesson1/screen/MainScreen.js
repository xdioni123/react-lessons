import React from "react";
import {Text , StyleSheet, View} from "react-native";

const MainScreen =()=> {
    return(<View style={styles.test}>
        <Text style={styles.textStyle}>This is a main screen</Text>
    </View>);
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