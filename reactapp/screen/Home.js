
import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>Welcome to Home Screen</Text>
                <Text style={styles.subtitle}>
                    Explore our latest technology products
                </Text>
            </View>

            <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="laptop"
                    size={85}
                    color="#20BFE0"
                />
            </View>

            <Text style={styles.description}>
                Discover our collection of electronic products
                and find the right technology for you.
            </Text>

            <TouchableOpacity
                style={styles.productsButton}
                onPress={() => navigation.navigate('ProductScreen')}
            >
                <MaterialCommunityIcons
                    name="shopping-outline"
                    size={22}
                    color="white"
                />
                <Text style={styles.buttonText}>
                    View Products
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.aboutButton}
                onPress={() => navigation.navigate('About')}
            >
                <Text style={styles.aboutButtonText}>
                    Go to About Me
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.drawerButton}
                onPress={() =>
                    navigation.getParent()?.getParent()?.openDrawer()
                }
            >
                <MaterialCommunityIcons
                    name="menu"
                    size={22}
                    color="#343E52"
                />
                <Text style={styles.drawerButtonText}>
                    Open Drawer
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F1F3F6',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    header: {
        alignItems: 'center',
        marginBottom: 30,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#343E52',
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        color: '#64748B',
        marginTop: 10,
        textAlign: 'center',
    },

    iconContainer: {
        backgroundColor: '#343E52',
        width: 150,
        height: 150,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
    },

    description: {
        fontSize: 15,
        color: '#64748B',
        textAlign: 'center',
        lineHeight: 23,
        marginBottom: 30,
    },

    productsButton: {
        backgroundColor: '#343E52',
        width: '100%',
        padding: 16,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },

    aboutButton: {
        backgroundColor: '#20BFE0',
        width: '100%',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },

    aboutButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    drawerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },

    drawerButtonText: {
        color: '#343E52',
        fontSize: 15,
        fontWeight: '600',
        marginLeft: 8,
    },

});

export default Home;
