import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListScreen from './screens/ListScreen';

const navigator = createStackNavigator(
  {
    List: ListScreen,
  },
  {
  initialRouteName: "List",
  defaultNavigationOptions: {
    title: "App"
  }
}
);
export default createAppContainer(navigator);
