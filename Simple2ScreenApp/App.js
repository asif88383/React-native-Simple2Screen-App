import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Screen from './Screens/Screen1';

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Home/>
          <Screen/>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
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
});
