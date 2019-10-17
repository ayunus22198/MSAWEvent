import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Block from '../Utils/Block'

export default class SchedulePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [{
        key: 0,
        clicked: false
      },{
        key: 1,
        clicked: false
      },{
        key: 2,
        clicked: false
      },{
        key: 3,
        clicked: false
      },{
        key: 4,
        clicked: false
      },{
        key: 5,
        clicked: false
      }]
      
        
    }
  }
  blockSelect = (index) => {
    let events = this.state.events; //copy of state events array
    for(let i = 0; i < events.length; i++) {  //marks event object at index true, everything else false
      if(i == index) {
        events[i].clicked = true;
      } else {
        events[i].clicked = false;
      }
    }
    this.setState({events}); //set the state of events
    console.log(events);
  }
  renderEvents() {
    return this.state.events.map((e) => {
        return (
          <Block key = {e.key} blockSelect = {() => this.blockSelect(e.key)}/>
        )
    })
  }
  //return this.state.isChoosen ? (
  //grey out boxes with same time ) : (
  //keep same )
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
