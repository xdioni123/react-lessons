import React from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator,} from 'react-native';

class CommentsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/comments');
      const jsonData = await data.json();
      this.setState({comments: jsonData});
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  renderComment = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.commentId}>Comment #{item.id}</Text>

      <Text style={styles.commentTitle}>{item.name}</Text>

      <Text style={styles.commentBody}>{item.body}</Text>

      <Text style={styles.email}>By: {item.email}</Text>
    </View>
  );

  render() {
    const { comments, loading } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Comments</Text>
        <Text style={styles.subtitle}>Browse all comments below</Text>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#6366F1"
            style={styles.loader}
          />
        ) : (
          <FlatList
            data={comments}
            keyExtractor={(item) => String(item.id)}
            renderItem={this.renderComment}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5FA',
    padding: 16,
    paddingTop: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22223B',
  },
  subtitle: {
    fontSize: 15,
    color: '#77778A',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 25,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#6366F1',
    elevation: 2,
  },
  commentId: {
    color: '#6366F1',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#25253D',
    marginBottom: 8,
  },
  commentBody: {
    fontSize: 14,
    color: '#555568',
    marginBottom: 12,
  },
  email: {
    fontSize: 12,
    color: '#888',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
  },
  loader: {
    marginTop: 40,
  },
});

export default CommentsScreen;