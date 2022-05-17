import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Screen1 = ({navigation}) => {
  return (
    <View style={{marginTop:50, backgroundColor: "grey"}}>
      <Text>Screen1</Text>

      <Button
        color='white'
        style={{margin: 30, backgroundColor: '#00bcd4', borderRadius: 30}}
        onPress={() => navigation.navigate('Home')}
        >Go to Home</Button>
    </View>
  )
}

export default Screen1