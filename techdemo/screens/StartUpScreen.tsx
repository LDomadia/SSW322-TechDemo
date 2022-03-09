import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MyButton from '../components/MyButton'

type ScreenProps = {
    navigation: any
}

export default function StartUpScreen({ navigation }: ScreenProps) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40}}>Hello</Text>
            <StatusBar style="auto" />
            <View style={{height: Dimensions.get('screen').width * 0.6}}></View>
            <View style={styles.fixToText}>
            <MyButton type="primary" text="Login" size="large" onPressFn={() => navigation.navigate("LogIn")}/>
            <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
            <MyButton type="secondary" text="Sign Up" size="large" onPressFn={() => navigation.navigate("SignUp")}/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
});