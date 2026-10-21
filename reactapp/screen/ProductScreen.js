
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";

import data from "../data/products.json";
import Product from "../components/Product";

class ProductScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f8fafc" />

        <View style={styles.header}>
          <Text style={styles.title}>Discover Products</Text>
          <Text style={styles.subtitle}>
            Find the right product for you
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Products</Text>
          <Text style={styles.productCount}>
            {this.state.products.length} items
          </Text>
        </View>

        <FlatList
          data={this.state.products}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Product
              name={item.name}
              category={item.category}
              price={item.price}
              stock={item.stock}
              img={item.image}
              desc={item.description}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingTop: 15,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#1f2937",
  },
  productCount: {
    fontSize: 13,
    color: "#64748b",
  },
  
list: {
  paddingHorizontal: 20,
  paddingBottom: 25,
  alignItems: "center",
},
listContent: {
  width: "100%",
  maxWidth: 380,
},

});

export default ProductScreen;
