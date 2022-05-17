import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import SafeAreaViewAndroid from '../Components/SafeAreaViewAndroid'

const Main = ({navigation, title}) => {
  return (
    <View style={{marginTop:50, backgroundColor: "grey"}}>
      <Text>{title}</Text>

      <Button
        color='white'
        style={{margin: 30, backgroundColor: '#00bcd4', borderRadius: 30}}
        onPress={() => navigation.navigate('Register')}
        >Register</Button>
    </View>
  )
}

const Home = ({navigation}) => {
    return (
        <SafeAreaViewAndroid Component={Main}  navigate={navigation} title="Home"/>
    )
}

export default Home