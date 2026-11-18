
import React from "react";
import {View,Text,StyleSheet,FlatList,StatusBar,} from "react-native";

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

        <StatusBar
          barStyle="light-content"
          backgroundColor="#343E52"
        />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Discover Products</Text>

          <Text style={styles.subtitle}>
            Find the right product for you
          </Text>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Top Products
          </Text>

          <Text style={styles.productCount}>
            {this.state.products.length} items
          </Text>
        </View>

        {/* Product List */}
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
              onPress={() =>
                this.props.navigation.navigate("ProductDetails", {
                  product: item,
                })
              }
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
    backgroundColor: "#F1F3F6",
  },

  header: {
    backgroundColor: "#343E52",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 30,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 15,
    color: "#C5CEDB",
  },

  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 22,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343E52",
  },

  productCount: {
    fontSize: 13,
    color: "#64748B",
  },

  list: {
    paddingHorizontal: 20,
    paddingBottom: 25,
    alignItems: "center",
  },

});

export default ProductScreen;
