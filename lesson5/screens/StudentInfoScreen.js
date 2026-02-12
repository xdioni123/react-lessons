import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentInfoScreen() {
  const firstName = 'Alex';
  const surname = 'Johnson';
  let fullName = firstName + ' ' + surname;

  const birthday = 'March 12, 2004';
  const city = 'Vancouver';
  const grade = '12th Grade';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Personal Info</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>{fullName}</Text>

        <Text style={styles.label}>Birthday:</Text>
        <Text style={styles.value}>{birthday}</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.value}>{city}</Text>

        <Text style={styles.label}>Class:</Text>
        <Text style={styles.value}>{grade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fdf6ec', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 24, fontWeight: 'bold', color: '#333', marginVertical: 15,
  },
  card: {
    backgroundColor: '#fff', borderRadius: 12, padding: 20, width: '90%', elevation: 3,
  },
  label: {
    fontSize: 18, color: '#2b59c3', marginTop: 10,
  },
  value: {
    fontSize: 16, color: '#444',
  },
});
