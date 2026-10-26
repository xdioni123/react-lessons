import React from 'react';
import {View, Stylesheet, Text, Button} from 'react-native';

const About = ({navigation}) =>{
    return(
        <View>
            <Text>Welcome to About Screen</Text>
            <Button
            title='go back to Main Screen'
            onPress={()=>navigation.goBack()}
            />
        </View>
    );
}

// const styles = Stylesheet.create({})

export default About;