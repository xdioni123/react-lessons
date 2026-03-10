import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Project from '../components/Projects';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StudentInfo name="JOHN DOE" position="UI/UX Designer" description="We're passionate about creating beatuiful designing for startups & learning brands" profileImage={require('..assets/project3.png')}/>
      <Project image1={require('../assets/project1.png')} img2={require('../assets/project2.png')}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f5f5f5',
  }
});

export default ProfileScreen;