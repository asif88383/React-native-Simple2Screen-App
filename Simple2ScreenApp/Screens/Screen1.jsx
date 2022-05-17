import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Screen1 = () => {
  return (
    <View style={{marginTop:50, backgroundColor: "grey"}}>
      <Text>Home</Text>

      <Button
        color='white'
        style={{margin: 30, backgroundColor: '#00bcd4', borderRadius: 30}}
        >Click Me</Button>
    </View>
  )
}

export default Screen1