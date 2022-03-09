import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartUpScreen from './screens/StartUpScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
