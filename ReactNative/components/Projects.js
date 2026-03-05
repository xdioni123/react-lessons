import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Projects = (props) => {
    return(
        <View style={styles.container}>
          <View styles={styles.header}>
            <Text style={styles.title}>PROJECTS</Text>
            <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
           </View>

           <View styles={styles.projectsContainer}>
              <View style={styles.projectCard}>
                <Image
                    source={props.image1}
                    style={styles.projectImage}
                />
              </View>
              <View style={styles.projectCard}>
                <Image
                source={props.image2}
                style={styles.projectImage}
                />    
              </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  projectImage: {
    width: 150, 
    height: 100, 
  },
});

export default Project;