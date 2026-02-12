import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Lesson 5!</Text>
      <Text style={styles.subtitle}>React Native Navigation & Lists</Text>
      <Button title="Go to Student Info" onPress={() => navigation.navigate('StudentInfo')} />
      <Button title="View My Hobbies" onPress={() => navigation.navigate('Hobbies')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f2f9ff',
  },
  title: {
    fontSize: 26, fontWeight: 'bold', color: '#2b59c3', marginBottom: 10,
  },
  subtitle: {
    fontSize: 18, color: '#555', marginBottom: 20,
  },
});
