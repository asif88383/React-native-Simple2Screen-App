import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from "../Components/SafeAreaViewAndroid";
import GlobalStyles from '../src/utils/GlobalStyles'
import MapView from 'react-native-maps'

const Main = ({ navigation }) => {
    const {city, lat, lng} = navigation.params

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyles.customeFont,
                styles.text
            ]}>
                {city}
            </Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}


const Register = ({ navigation }) => {
    return (
      <SafeAreaViewAndroid
        Component={Main}
        navigation={navigation}
        title="Home"
      />
    );
  };

export default Map;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        marginTop: 10,
    },
    map: {
        width: '90%',
        height: '70%',
    },
});