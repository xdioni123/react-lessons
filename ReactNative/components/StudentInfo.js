import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StudentInfo = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerBackground} />

        <View style={styles.profileImageContainer}>
            <Image
              source={props.profileImage}
              style={styles.profileImage}
            />
        </View>
      
      <TouchableOpacity style={styles.settingsIcon}>
        <Text style={styles.settingsText}></Text>
      </TouchableOpacity>

      <View style={styles.cardContent}>
        <Text style={styles.fullName}>{props.fullname}</Text>
      
        <Text style={styles.position}>{props.position}</Text>
      
        <Text style={styles.description}>{props.description}</Text>
        
        <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff', 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, 
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#FFD700', 
  },
  fullName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  position: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
});

export default StudentInfo;