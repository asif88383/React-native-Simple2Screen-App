import { View, Text } from "react-native";
import React from "react";
import { Button, Appbar, Avatar } from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation, title }) => {
  return (
    <View style={{ marginTop: 50, backgroundColor: "grey" }}>
      {/* <Text>{title}</Text> */}
      <Appbar>
        <Appbar.Action icon="heart" onPress={() => navigation.navigate("Home")} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="account-circle" onPress={() => navigation.navigate("Register")} />
        <Appbar.Action icon="camera" onPress={() => navigation.navigate("Camera")} />
      </Appbar>

      <Avatar.Image
        source={{
          uri:"https://www.computerhope.com/jargon/r/random-dice.jpg"
        }}
        size={160}
        style={{ marginTop: 50, alignSelf: "center" }}
      />
      <Button
        color="white"
        style={{ margin: 30, backgroundColor: "#00bcd4", borderRadius: 30, marginHorizontal: 50 }}
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>

      <Button
        color="white"
        style={{ margin: 50, backgroundColor: "#00bcd4", borderRadius: 30 }}
        onPress={() => navigation.navigate("Screen1")}
      >
        Screen1
      </Button>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid Component={Main} navigation={navigation} title="Home" />
  );
};

export default Home;
