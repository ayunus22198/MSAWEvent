import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

/**
Page where Map.js loads. ToDo -
1. Render map on screen
2. Create List of Halal Restaurants
    - Each item should include picture, rating, type, and distance (For sprint 1, fine if hard coded)
**/

export default class Map extends Component {
  render() {
    return (
      <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
