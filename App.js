import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import Landing from './src/Landing';
import Post from './src/Post';
import Album from './src/Album';
import PostDetails from './src/PostDetails';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name = "SplashScreen" component = {SplashScreen} /> */}
        <Stack.Screen name = "Landing" component = {Landing} />
        <Stack.Screen name = "Post" component = {Post} />
        <Stack.Screen name = "PostDetails" component = {PostDetails} /> 
        <Stack.Screen name = "Album" component = {Album} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
