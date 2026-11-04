import React from 'react';
import {View, Stylesheet, Text, Button} from 'react-native';

const Home = ({navigation}) =>{
    return(
        <View>
            <Text>Welcome to Home Screen</Text>
            <Button
            title='Go to About me'
            onPress={()=>navigation.navigate('About')}
            />
            <Button
            title='Open Drawer'
            onPress={()=>navigation.openDrawer()}
            />
        </View>
    );
}

// const styles = Stylesheet.create({})

export default Home;