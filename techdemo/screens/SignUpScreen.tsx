import React, { useState } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MyButton from '../components/MyButton';
import MyField from '../components/MyField';
import { signUpWithEmail, getFirstName } from '../services/firebase';

type ScreenProps = {
  navigation: any
}

export default function SignUpScreen({ navigation }: ScreenProps) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
      <MyField title='First Name' type='text' onChangeFn={setFName} />
      <MyField title='Last Name' type='text' onChangeFn={setLName} />
      <MyField title='Email' type='text' onChangeFn={setEmail} />
      <MyField title='Password' type='text' secure={true} onChangeFn={setPassword} />
        <MyButton text="Sign Up" type="primary" size="large" onPressFn={async () => {
          let result = await signUpWithEmail(fName, lName, email, password);
          if (result === 'success') {
            let firstName = await getFirstName();
            navigation.navigate("Home", {firstName: firstName});
          }
        }} />
        <View style={{height: Dimensions.get('screen').width * 0.05}}></View>
    </View>
    </>
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
