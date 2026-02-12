import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HobbiesScreen() {
  const hobbies = [
    { id: '1', name: 'Photography' },
    { id: '2', name: 'Cycling' },
    { id: '3', name: 'Reading' },
    { id: '4', name: 'Coding' },
    { id: '5', name: 'Traveling' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Hobbies</Text>
      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.hobbyText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f0f8f8', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#1b4965', marginBottom: 15,
  },
  item: {
    backgroundColor: '#cae9ff', padding: 15, borderRadius: 10, marginVertical: 8,
  },
  hobbyText: {
    fontSize: 18, color: '#023e8a',
  },
});
