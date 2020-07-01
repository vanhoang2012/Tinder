// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListFavouriteScreen from '../screens/ListFavouriteScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
        <Stack.Screen name="ListFavourite" component={ListFavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
