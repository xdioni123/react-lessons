import React from 'react';
import {View, Text, StyleSheet, image} from 'react-native';
import StudentDetails from 'StudentDetails'; 

const StudentsScreen = () => {
    return(
        <View>
        <StudentDetails name="Dion" styles={styles.Text} image={require('../images/file1.png')} description="Lorem impsum"></StudentDetails>
        <StudentDetails name="Ari" styles={styles.Text} image={require('../images/file2.png')} description="Lorem impsum"></StudentDetails>
        <StudentDetails name="Alia" styles={styles.Text} image={require('../images/file3.png')} description="Lorem impsum"></StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    },
});

export default StudentsScreen;