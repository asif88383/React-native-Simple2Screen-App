import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button, Checkbox, Headline } from "react-native-paper";
import React from "react";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{ marginTop: 50 }}>
      <Headline style={styles.heading}>Register</Headline>

      <TextInput placeholder="Full Name" style={styles.inputs} />
      <TextInput placeholder="Email" style={styles.inputs} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.inputs}
      />

      <View style={{alignSelf: "center", flexDirection: "row", margin:20}}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
          color = "rgba(108, 21, 222, 1)"
        />

        <Text style={{color: "blue", fontSize: 16, marginTop: 10}}>
          I agree to the terms and conditions
        </Text>
      </View>

      <Button
        color="white"
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
        disabled={!checked}
      >
        Register
      </Button>
    </View>
  );
};

const Register = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid
      Component={Main}
      navigation={navigation}
      title="Home"
    />
  );
};

export default Register;

const styles = StyleSheet.create({
  inputs: {
    marginHorizontal: 50,
    marginTop: 5,
    backgroundColor: "white",
  },
  heading: {
    textAlign: "center",
    marginTop: 10,
    color: "rgba(108, 21, 222, 1)",
    fontWeight: "bold",
  },
  btn: {
    width: "60%",
    paddingVertical: 4,
    marginTop: 10,
    backgroundColor: "tomato",
    borderRadius: 30,
    alignSelf: "center",
  },
});
