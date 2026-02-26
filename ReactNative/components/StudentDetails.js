import React from "react";
import{Text, View, StyleSheet} from "react-native";

const StudentDetails = (props) => {
    return (
    <View>
        <Text styles={styles.text}>Student Details component</Text>
    </View>
    )
}

const style = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertial: 20
    }
})

export default StudentDetails;