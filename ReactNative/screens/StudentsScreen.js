import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (    
        <View>
            <Text style={StyleSheet.text}>Student Screen</Text>
            <TouchableOpacity
                style={styles.profileButton}
                onPress={() => NavigationActivation.navigate('Profile')}
            >
                <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <StudentDetails name = "Dion" image={require('../assets/project1.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
            <StudentDetails name = "Fis" image={require('../assets/project2.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
            <StudentDetails name = "Lis" image={require('../assets/project1.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>                        
            <StudentDetails name = "Gjorge" image={require('../assets/project3.png')} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores ratione commodi ipsam labore perferendis totam! In obcaecati optio sequi natus itaque sed, vitae at corrupti dolorum nam ipsam dolor?"/>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    profileButton: {
        backgroundColor: '#007AFF',
        marginHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
})

export default StudentsScreen;