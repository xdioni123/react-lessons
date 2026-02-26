import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const MenuScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.text}>
                Welcome to Menu Screen
            </Text>
            <Button
             title="Go to List Screen"
             color = "purple"
             onPress = {() => console.log('Button Clicked: ', counter++)}
            />
              <TouchableOpacity style={styles.btn}
                onPress={() => useLinkProps.navigation.navigate('Students')}
              >
                <Text style={styles.btnText}>Go to studnets Screen</Text>
              </TouchableOpacity>  
        </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 20
  },
  btn: {
    backgroundColor: '#3446eb',
    marginVertical: 10,
    paddingVertical: 7
  },
  btnText: {
    color: "white",
    fontsize: 15,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
  });

export default MenuScreen;