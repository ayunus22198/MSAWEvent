import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/**
Page where Map.js loads. ToDo -
1. Render map on screen
2. Create List of Halal Restaurants
    - Each item should include picture, rating, type, and distance (For sprint 1, fine if hard coded)
**/
export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Map.js</Text>
      </View>
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
