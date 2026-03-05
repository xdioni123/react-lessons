import React from "react";
import {Text, View, StyleSheet} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (    
        <View>
            <Text style={StyleSheet.text}>Student Screen</Text>
            <StudentDetails name = "Dion" image={require('../assets/avatar1.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
            <StudentDetails name = "Fis" image={require('../assets/avatar1.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
            <StudentDetails name = "Lis" image={require('../assets/avatar3.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>                        
            <StudentDetails name = "Gjorge" image={require('../assets/avatar2.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})

export default StudentsScreen;