import React from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Project from '../components/Project';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <studentInfo
        fullname: "JOHN DOE",
        position: "UI/UX Designer",
        description: "We're passionate about creating beautiful design for startups & leading brands.",
        profileImage: require('../assets/avatar1.png')}
        />
        <Projects
        image1={require('../assets/avatar1.png')}
        image2={require('../assets/avatar2.png')}
        />
    </View>
  );
};
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
  },
  infoContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  projectsSection: {
    flexDirection: 'row', 
    flexWrap: 'wrap',    
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default ProfileScreen;