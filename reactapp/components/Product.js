
import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";

const Product = (props) => {

  const inStock = props.stock === "Yes";

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={props.onPress}
      activeOpacity={0.8}
    >

      <Image
        source={{ uri: props.img }}
        style={styles.img}
        resizeMode="cover"
      />

      <View style={styles.content}>

        <Text style={styles.category}>
          {props.category}
        </Text>

        <Text style={styles.name}>
          {props.name}
        </Text>

        <Text style={styles.description}>
          {props.desc}
        </Text>

        <View style={styles.divider} />

        <View style={styles.footer}>

          <View style={styles.stockContainer}>

            <View
              style={[
                styles.stockDot,
                {
                  backgroundColor: inStock
                    ? "#16a34a"
                    : "#dc2626"
                }
              ]}
            />

            <Text
              style={[
                styles.stockText,
                {
                  color: inStock
                    ? "#15803d"
                    : "#dc2626"
                }
              ]}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </Text>

          </View>

          <Text style={styles.price}>
            {props.price}
          </Text>

        </View>

        <Text style={styles.viewDetails}>
          View Details →
        </Text>

      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

cardContainer: {
  width: "100%",
  backgroundColor: "#FFFFFF",
  borderRadius: 14,
  padding: 16,
  marginBottom: 18,
  borderWidth: 1,
  borderColor: "#D9DEE7",
  elevation: 3,
},

  img: {
    width: "100%",
    height: 180,
    backgroundColor: "#E5E9EF",
  },

  content: {
    padding: 16,
  },

  category: {
    fontSize: 12,
    color: "#20BFE0",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },

  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#343E52",
    marginBottom: 7,
  },

  description: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 21,
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E6ED",
    marginVertical: 15,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  stockContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  stockDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 7,
  },

  stockText: {
    fontSize: 12,
    fontWeight: "600",
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#343E52",
  },

  viewDetails: {
    color: "#20BFE0",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "right",
  },

});

export default Product;
