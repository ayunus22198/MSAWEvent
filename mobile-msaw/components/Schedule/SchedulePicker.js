import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Block from '../Utils/Block'

export default class SchedulePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [0,1,2,3,4,5]
    }
  }
  renderEvents() {
    return this.state.events.map((e) => {
        return (
          <Block key = {e}/>
        )
    })
  }
  render() {
    return (
      <View style = {styles.container}>
        <ScrollView>
          {this.renderEvents()}
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
    justifyContent: 'center',
    padding: 10
  },
});
