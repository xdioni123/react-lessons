
import React from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const products = [
    {
      name: 'iPad 8',
      category: 'Tablet',
      description: 'Lorem Ipsum dolor sit amet, ut labore et dolore magna aliqua.',
      price: '$880',
      image: 'https://th.bing.com/th/id/OIP.2dSiVhkQx1hhuzjTAQBhjwHaHZ?w=185&h=185&c=7&r=0&o=7&pid=1.7&rm=3'
    },
    {
      name: 'Iphone X',
      category: 'iPhone',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
      price: '$750',
      image: 'https://th.bing.com/th/id/OIP.0gg2EnOpmXybYH4Jfix5bgHaHa?w=200&h=200&c=7&r=0&o=7&pid=1.7&rm=3'
    },
    {
      name: 'Samsung S21',
      category: 'Samsung',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.',
      price: '$990',
      image: 'https://th.bing.com/th/id/OIP.YknO_mCdceUfDPIcP5bEAQHaJF?w=162&h=199&c=7&r=0&o=7&pid=1.7&rm=3'
    }
  ];

  return (
    <View style={styles.container}>


      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>


        <View style={styles.categories}>

          <View style={styles.category}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="tablet" size={30} color="#ffffff" />
            </View>
            <Text style={styles.categoryText}>Tablet</Text>
          </View>

          <View style={styles.category}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="mouse" size={30} color="#ffffff" />
            </View>
            <Text style={styles.categoryText}>Mouse</Text>
          </View>

          <View style={styles.category}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="keyboard" size={30} color="#ffffff" />
            </View>
            <Text style={styles.categoryText}>Keyboard</Text>
          </View>

        </View>


        <Text style={styles.sectionTitle}>
          Most popular products
        </Text>

        {products.map((product, index) => (
          <View style={styles.product} key={index}>

            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
            />

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>

              <Text style={styles.productCategory}>
                {product.category}
              </Text>

              <Text style={styles.description}>
                {product.description}
              </Text>

              <Text style={styles.price}>{product.price}</Text>
            </View>

          </View>
        ))}

        {/* View More */}
        <TouchableOpacity style={styles.viewMore}>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home" size={25} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('About')}
        >
          <Ionicons name="image-outline" size={25} color="white" />
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>

      </View>

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
    justifyContent: 'center',
    paddingHorizontal: 18,
  },

  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },

  category: {
    alignItems: 'center',
  },

  iconCircle: {
    backgroundColor: '#302344',
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    fontSize: 15,
    marginTop: 5,
    color: '#302344',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginHorizontal: 18,
    marginTop: 10,
    marginBottom: 24,
    color: '#302344',
  },

  product: {
    flexDirection: 'row',
    marginHorizontal: 18,
    marginBottom: 30,
  },

  productImage: {
    width: 112,
    height: 130,
    borderRadius: 10,
    backgroundColor: '#F0EAF8',
  },

  productInfo: {
    flex: 1,
    marginLeft: 11,
    justifyContent: 'flex-start',
  },

  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#302344',
  },

  productCategory: {
    fontSize: 14,
    color: '#8056C7',
    marginTop: 2,
  },

  description: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444444',
    marginTop: 3,
  },

  price: {
    backgroundColor: '#302344',
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 9,
    paddingVertical: 2,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },

  viewMore: {
    backgroundColor: '#8056C7',
    marginHorizontal: 18,
    marginTop: 0,
    marginBottom: 20,
    padding: 17,
    borderRadius: 9,
    alignItems: 'center',
  },

  viewMoreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  bottomNav: {
    height: 60,
    backgroundColor: '#302344',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    alignItems: 'center',
  },

  navText: {
    color: '#FFFFFF',
    fontSize: 13,
    marginTop: 2,
  },

});


export default Home;
