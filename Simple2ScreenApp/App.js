import {
  StyleSheet,
} from "react-native";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Screens/Register";
import LogIn from "./Screens/LogIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerStyle: { backgroundColor: "lightcyan" } }}
        />
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{ headerStyle: { backgroundColor: "lightcyan" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


