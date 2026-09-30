import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const StudentsDetails = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgWrapper}>
                    <Image source={props.image} style={styles.img}/>
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text>{props.description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'White',
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 15
    },
    img: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    infoWrapper: {
        marginLeft: 10,
        marginTop: 20
    },
    name: {
        fontWeight: 'bold'
    }
});

export default StudentsDetails;