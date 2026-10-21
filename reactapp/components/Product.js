
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Product = (props) => {
  const inStock = props.stock === "Yes";

  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: props.img }}
        style={styles.img}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.category}>{props.category}</Text>

        <Text style={styles.name}>{props.name}</Text>

        <Text style={styles.description}>{props.desc}</Text>

        <View style={styles.divider} />

        <View style={styles.footer}>
          <View style={styles.stockContainer}>
            <View
              style={[
                styles.stockDot,
                { backgroundColor: inStock ? "#16a34a" : "#dc2626" },
              ]}
            />
            <Text
              style={[
                styles.stockText,
                { color: inStock ? "#15803d" : "#dc2626" },
              ]}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </Text>
          </View>

          <Text style={styles.price}>{props.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },

img: {
  width: "100%",
  height: 180,
  backgroundColor: "#f3f4f6",
},
  content: {
    padding: 16,
  },
  category: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 7,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
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
    color: "#2563eb",
  },
});

export default Product;
