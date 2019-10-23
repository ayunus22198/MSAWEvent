import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Block from '../Utils/Block'

export default class Friday extends React.Component {
  render() {
    return (
      <View style = {styles.container} >
        <ScrollView horizontal={false}>
          <Block selectable = {true}/>
          <Block selectable = {false}/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
