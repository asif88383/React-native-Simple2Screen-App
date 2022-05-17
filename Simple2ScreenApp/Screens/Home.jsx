import { View, Text } from "react-native";
import React from "react";
import { Button, Appbar, Avatar, Headline } from "react-native-paper";
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";

const Main = ({ navigation, title }) => {
  return (
    <View>
      {/* <Text>{title}</Text> */}
      <Appbar>
        <Appbar.Action
          icon="heart"
          onPress={() => navigation.navigate("Home")}
        />
        <Appbar.Content title="Home" />
        <Appbar.Action
          icon="account-circle"
          onPress={() => navigation.navigate("Register")}
        />
        <Appbar.Action
          icon="camera"
          onPress={() => navigation.navigate("Camera")}
        />
      </Appbar>

      <Avatar.Image
        source={{
          uri: "https://www.computerhope.com/jargon/r/random-dice.jpg",
        }}
        size={160}
        style={{ marginTop: 50, alignSelf: "center" }}
      />

      <View style={{alignSelf: "center", flexDirection: "row", marginTop:10}}>
        <Button
          color="white"
          style={{
            marginTop: 10,
            backgroundColor: "#00bcd4",
            borderRadius: 5,
            width: "35%",
            marginRight: 5,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
        <Button
          color="white"
          style={{
            marginTop: 10,
            backgroundColor: "#00bcd4",
            borderRadius: 5,
            width: "30%",
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
        </Button>
      </View>

      <Headline
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        About Me
      </Headline>
      <Text
        style={{
          alignSelf: "center",
          textAlign: "center",
          marginTop: 10,
          width: "65%",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus
        reiciendis repellat dicta inventore architecto quaerat, beatae facere
        voluptatibus eaque libero modi perspiciatis itaque impedit odio quos
        porro. Fugit voluptatibus perspiciatis fuga id at temporibus nam maiores
        excepturi rerum.
      </Text>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <SafeAreaViewAndroid
      Component={Main}
      navigation={navigation}
      title="Home"
    />
  );
};

export default Home;
