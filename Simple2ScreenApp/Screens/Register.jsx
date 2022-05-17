import { View, Text } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({navigation}) => {
  return (
    <View style={{ marginTop: 50, backgroundColor: "grey" }}>
      <Text>Register</Text>
    </View>
  )
}

const Register = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid Component={Main} navigation={navigation} title="Home" />
  );
};

export default Register;