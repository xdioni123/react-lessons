import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { BottomTabBar } from '@react-navigation/bottom-tabs';
// import BottomTabNavigator from './navigatior/TabNavigator';
// import MainScreen from './screen/MainScreen';
// import ListScreen from './screen/ListScreen';
// import ButtonScreen from './screen/ButtonScreen';
// import StudentsScreen from './screen/StudentsScreen';
// import PersonalScreen from './screen/PersonalScreen';
// import CommentsScreen from './screen/CommentsScreen';
// import LocalScreen from './screen/LocalScreen';
// import ProductScreen from './screen/ProductScreen';
// import DrawerNavigator from './navigatior/DrawerNavigator';
import ScreenSwiper from './screen/ScreenSwiper'


export default function App() {
  return(
    <NavigationContainer>
<ScreenSwiper/>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
