import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screen/Home'
import About from './src/screen/About'
import UserData from './src/screen/UserData'
import Course from './src/screen/Course'
import Contact from './src/screen/Contact'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}></Stack.Screen> 
      <Stack.Screen name='About' component={About} options={{headerTitleStyle:{fontSize:25} ,headerTitleAlign:"center" }}></Stack.Screen> 
      <Stack.Screen name='UserData' component={UserData} options={{headerTitleStyle:{fontSize:25} , headerTitle:"Students Data",headerTitleAlign:"center" }}></Stack.Screen> 
      <Stack.Screen name='Contact' component={Contact} options={{headerTitleStyle:{fontSize:25} ,headerTitleAlign:"center" }}></Stack.Screen> 
      <Stack.Screen name='Course' component={Course} options={{headerTitleStyle:{fontSize:25} , headerTitle:"Courses",headerTitleAlign:"center" }}></Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
