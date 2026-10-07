import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class PostScreen extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await response.json();

      this.setState({ posts: jsonData });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Posts:</Text>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postItem}>
              <Text style={styles.postId}>ID: {item.id}</Text>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
