
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";

const product = {
  id: 1,
  name: "Iphone X",
  category: "phone",
  price: "$400",
  stock: "Yes",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
  description: "Lorem ipsum dolor sit amet"
};

export default function LocalScreen() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#0e0e0e" />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.brand}>APPLE</Text>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>
            {product.name.toUpperCase()}
          </Text>

          <View style={styles.decoration}>
            {Array.from({ length: 7 }).map((_, index) => (
              <View key={index} style={styles.wave} />
            ))}
          </View>

          <Text style={styles.category}>
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>

          <Text style={styles.stock}>
            Stock: <Text style={styles.stockValue}>{product.stock}</Text>
          </Text>

          <View style={styles.colors}>
            <View style={[styles.color, styles.black]} />
            <View style={[styles.color, styles.silver]} />
            <View style={[styles.color, styles.gray]} />
          </View>

          <Text style={styles.price}>{product.price}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0e0e0e"
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 15
  },
  card: {
    width: 466,
    maxWidth: "100%",
    height: 613,
    backgroundColor: "#f7f7f7",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: 25,
    paddingTop: 14
  },
  brand: {
    fontSize: 22,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: 5,
    color: "#171717",
    marginBottom: 24
  },
  imageContainer: {
    width: "100%",
    height: 225,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -1,
    color: "#176b83",
    textAlign: "center"
  },
  decoration: {
    flexDirection: "row",
    gap: 3,
    marginTop: 17,
    marginBottom: 27
  },
  wave: {
    width: 15,
    height: 3,
    borderRadius: 50,
    backgroundColor: "#55b76b",
    transform: [{ rotate: "-8deg" }]
  },
  category: {
    fontSize: 15,
    fontWeight: "700",
    color: "#555555",
    marginBottom: 15
  },
  description: {
    maxWidth: 310,
    fontSize: 11,
    lineHeight: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 10
  },
  stock: {
    fontSize: 12,
    color: "#555555",
    marginBottom: 12
  },
  stockValue: {
    color: "#25834d",
    fontWeight: "700"
  },
  colors: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginTop: 3
  },
  color: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#dddddd"
  },
  black: {
    backgroundColor: "#171717"
  },
  silver: {
    backgroundColor: "#d2d4d8"
  },
  gray: {
    backgroundColor: "#525565"
  },
  price: {
    fontSize: 54,
    fontWeight: "800",
    color: "#555555",
    letterSpacing: -2,
    marginTop: "auto",
    paddingBottom: 5
  }
});
