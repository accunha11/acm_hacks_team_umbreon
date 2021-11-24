import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import FoodScreen from './pages/FoodScreen';
import ExerciseScreen from './pages/ExerciseScreen';
import SleepScreen from './pages/SleepScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}  />
        <Tab.Screen
          name="Food"
          component={FoodScreen}
          options={{
            tabBarLabel: 'Food',
          }}  />
        <Tab.Screen
          name="Exercise"
          component={ExerciseScreen}
          options={{
            tabBarLabel: 'Exercise',
          }}  />
        <Tab.Screen
          name="Sleep"
          component={SleepScreen}
          options={{
            tabBarLabel: 'Sleep',
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;