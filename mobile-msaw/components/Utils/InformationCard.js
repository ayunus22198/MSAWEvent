import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const {height, width} = Dimensions.get('window');

export const InformationCard = () => {
    return (
        <View style={styles.container}>
          <Text>Name: Abdullah Ahmed</Text>
          <Text>Topic: Gratefullness in Islam</Text>
          <Text>Time: 1 - 3 pm</Text>
          <Text>Description: Lecture on human qualities</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 5,
    width: width - 15,
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
