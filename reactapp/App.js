import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import MainScreen from './screen/MainScreen';
// import ListScreen from './screen/ListScreen';
// import ButtonScreen from './screen/ButtonScreen';
// import StudentsScreen from './screen/StudentsScreen';
import PersonalScreen from './screen/PersonalScreen';

// const Stack = createStackNavigator();

// export default function () {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={MainScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function () {
//   return (
//     <View style={styles.container}>
//       {/* <ListScreen/> */}
//       <ButtonScreen/>
//     </View>
//   );
// }

// export default function () {
//   return (
//     <View style={styles.container}>
//       <StudentsScreen/>
//     </View>
//   );
// }


const App = () => {
    return <PersonalScreen />;
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
