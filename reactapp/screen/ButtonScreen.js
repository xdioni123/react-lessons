import react from "react";
import {view, Text , StyleSheet, Button, TouchableOpacity, View} from 'react-native';


const ButtonScreen = () => {
    let counter , counterT = 0;
    return(
        <View>
            <Text>Button Click</Text>
            <Button
            title = "Click me"
            Color = "Blue"
            onPress={()=> console.log("Button Clicked", counter++)}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => console.log("TouchableOpacity Clicked")}
            >
            <Text style={styles.buttonText}>Click TouchableOpacity</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },

    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});


export default ButtonScreen;