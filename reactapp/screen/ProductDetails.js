
import React from 'react';
import {View,Text,Image,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ProductDetails = ({ route, navigation }) => {

  const { product } = route.params;

  return (
    <View style={styles.container}>


      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={27} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Product Details</Text>

      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />

        <View style={styles.details}>

          <Text style={styles.category}>
            {product.category}
          </Text>

          <Text style={styles.name}>
            {product.name}
          </Text>

          <Text style={styles.price}>
            {product.price}
          </Text>

          <View style={styles.divider} />

          <Text style={styles.heading}>
            Product Description
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>


          <TouchableOpacity style={styles.cartButton}>
            <Ionicons name="cart-outline" size={22} color="white" />

            <Text style={styles.buttonText}>
              Add to Cart
            </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    backgroundColor: '#302344',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#F0EAF8',
  },

  details: {
    padding: 20,
  },

  category: {
    color: '#8056C7',
    fontSize: 16,
  },

  name: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#302344',
    marginTop: 5,
  },

  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8056C7',
    marginTop: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5DCEC',
    marginVertical: 20,
  },

  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#302344',
  },

  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginTop: 10,
  },

  cartButton: {
    backgroundColor: '#8056C7',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },

});

export default ProductDetails;
