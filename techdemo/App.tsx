import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUpScreen from './screens/StartUpScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { logOut } from './services/firebase';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="StartUp" component={StartUpScreen} options={{
          headerShown: false
      }} />
       <Stack.Screen name="LogIn" component={LogInScreen} options={{
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          title: 'Log In'
        }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: '#133C55',
          headerShadowVisible: false,
          title: 'Sign Up'
        }} />
      <Stack.Screen name="Home" component={HomeScreen} options={({ navigation })=> ({
          headerStyle: {backgroundColor: 'white'},
          headerTintColor: '#133C55',
          headerShadowVisible: false, 
          title: '',
          headerBackVisible: false,
          headerRight: () => (
            <Button title="Log Out" color={'#133C55'} onPress={async () => {
              await logOut();
              navigation.popToTop();
            }}></Button>
          )
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


