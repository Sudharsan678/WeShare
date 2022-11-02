import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import Landing from './src/Landing';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name = "SplashScreen" component = {SplashScreen} /> */}
        <Stack.Screen name = "Landing" component = {Landing} />
        {/* <Stack.Screen name = "Post" component = {Post} />
        <Stack.Screen name = "Album" component = {Album} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
