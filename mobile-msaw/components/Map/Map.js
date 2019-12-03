import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';

const Marker = MapView.Marker;
/**
Page where Map.js loads. ToDo -
1. Render map on screen
2. Create List of Halal Restaurants
    - Each item should include picture, rating, type, and distance (For sprint 1, fine if hard coded)
**/

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [{
        name: 'Shahs',
        address: '146, Hutchison Dr, Davis, CA 95616',
        coords: { latitude: 38.538120, longitude: -121.771610 },
        ratings: []
      }, 
        {
        name: 'Sams Restaurant',
        address: '301 B St, Davis, CA 95616',
        coords: { latitude: 38.544150, longitude: -121.745240 },
        ratings: []
      },
                   
        {
        name: 'Ikes Sandwiches',
        address: '212 F St #4515, Davis, CA 95616',
        coords: { latitude: 38.544044, longitude:  -121.739462 },
        ratings: []
      },
                    
        {
        name: 'House Of Shah Afghan Urban Eats',
        address: '538 Main St, Woodland, CA 95695',
        coords: { latitude: 38.677573, longitude:  -121.772905 },
        ratings: []
      },
                    
        {
        name: 'Preethi Indian Cuisine',
        address: '715 2nd St, Davis, CA 95616',
        coords: { latitude: 38.543952, longitude:  -121.738938 },
        ratings: []
      },
                    
        {
        name: 'The Halal Guys',
        address: '500 1st St #7, Davis, CA 95616',
        coords: { latitude: 38.541314, longitude:  -121.739967 },
        ratings: []
      },
                    
        {
        name: 'TxMx Grill',
        address: '250 W Quad, Davis, CA 95616',
        coords: { latitude: 38.542330, longitude:  -121.749118 },
        ratings: []
      },
                    
        {
        name: 'Yeti Restaurant',
        address: '234 E St, Davis, CA 95616',
        coords: { latitude: 38.544473, longitude:  -121.740574 },
        ratings: []
      },
                    
        {
        name: 'Chickpeas Kitchen',
        address: '640 W Covell Blvd, Davis, CA 95616',
        coords: { latitude: 38.560018, longitude:  -121.756175 },
        ratings: []
      }
                ]
    }
  }

  renderMarkers() {
    return this.state.restaurants.map((place, i) => (
      <Marker
        key={i}
        title={place.name}
        coordinate={place.coords}
      />
    ));
  }

  render() {
    return (
      <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 38.5449,
            longitude: -121.7405,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
        {this.renderMarkers()}
        </MapView>
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
