    
    import React from "react";
import {Text, StyleSheet, View} from "react-native";

const BoxScreen =() => {
    return(
        <View style={{flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alighnItems: 'center'  
        }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powerblue', alignItems: 'stretch'}}></View>
            <View style={{width: 100, height: 50, backgroundColor: 'lightgreen', alignItems: 'flex-start'}}></View>
            <View style={{width: 150 , height: 50, backgroundColor: 'brightyellow', alignItems: 'flex-start'}} ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;