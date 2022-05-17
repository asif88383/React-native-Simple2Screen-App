import { StatusBar } from 'expo-status-bar';
import { NativeAppEventEmitter, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Screen from './Screens/Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screens/Screen1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen" component={Screen1} />
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
