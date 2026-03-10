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
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#ffD700',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    fontWeight: '600',
    overflow: 'hidden',
  },
  scrollView: {
    marginLeft: -20,
    paddingLeft: 20,
  },
  projectsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  projectCard: {
    marginRight: 10,
    borderRadius: 12,
    overflow: 'hidden',
  }
});

export default Project;