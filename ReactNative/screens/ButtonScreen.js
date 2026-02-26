import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const ButtonScreen = () => {
    let counter = 0;
    return (
        <View>
            <Text style={StyleSheet.textstyle}>Button Screen</Text>
            <Button
                title="Click me"
                color = "purple"
                onPress = {() => console.log('Button Clicked', counter++)}
            />
            <TouchableOpacity
                style={styles.touchableOpacityStyle}
                onPress={() => console.log('TouchableOpacity Clicked', counter++)}
            >
                <Text style={styles.touchableTextStyle}>TouchableOpacity</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
        marginBottom: 10,
    },
    touchableBtn: {
        backgroundColor: '[purple]',
        marginVertical: 15,
        paddingVertical: 20,
        borderRadius: 6,
        marginHorizontal: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default ButtonScreen;