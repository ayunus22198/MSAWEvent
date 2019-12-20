import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, AsyncStorage, Alert } from 'react-native';
import Block from '../Utils/Block'
import { connect } from 'react-redux';
import { updateSelectableSchedule } from '../../actions/ScheduleActions';

const screens = ['Friday', 'Saturday', 'Sunday'];

class SchedulePicker extends React.Component {
  constructor(props) {
    const idOfClickedBlock = props.navigation.getParam('idOfClickedBlock', null);
    const selectableEvents = props.navigation.getParam('possibleEvents', null);
    super(props);
    this.state = {
      clickedEvent: {},
      idOfClickedBlock: idOfClickedBlock,
      possibleEvents: selectableEvents,
      idxRetrieved: 0
    }
  }

  componentDidMount() {
    let events = this.state.possibleEvents;
    for(let i = 0; i < events.length; i++) {
      events[i]['clicked'] = false;
    }
    this.setState(events);
  }

  blockSelect = (index) => {
    let events = this.state.possibleEvents; //copy of state events array
    let clickedEvent = {};
    for(let i = 0; i < events.length; i++) {  //marks event object at index true, everything else false
      if(events[i]._id == index) {
        clickedEvent = events[i];
        events[i].clicked = true;
      } else {
        events[i].clicked = false;
      }
    }
    console.log('clickedEvent ', clickedEvent);
    this.setState({ events, clickedEvent }); //set the state of events
    console.log(events);
  }

  submitSelectedEvent = async () => {
    let prevID = -1;
    prevID = await AsyncStorage.getItem('previousID');
    if(prevID == null) {
      prevID = -1
    }
    AsyncStorage.setItem('previousID', this.state.clickedEvent._id );
    if(prevID == this.state.clickedEvent._id) {
      Alert.alert(
        'Already in Event!',
        'Click another event',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: true }
      );
      return;
    }
    console.log('prev ', prevID);
    console.log('phone expo ', this.props.exponentPhoneID);
    this.props.updateSelectableSchedule(prevID, this.state.clickedEvent, this.props.exponentPhoneID);
    this.props.navigation.navigate(screens[0], { reload: true });
  }

  renderEvents() {
    return this.state.possibleEvents.map((e) => {
        return (
          <Block key = {e._id} clicked = {e.clicked} e = {e} navigateBack = {true} blockSelect = {() => this.blockSelect(e._id)}/>
        )
    })
  }
  //return this.state.isChoosen ? (
  //grey out boxes with same time ) : (
  //keep same )
  render() {
    let screenId = this.props.navigation.getParam('screenId', null);
    return (
      <View style = {styles.container}>
        <ScrollView>
          {this.renderEvents()}
        </ScrollView>
        <Button title = "Submit" onPress = {() => this.submitSelectedEvent()} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('sp ', state);
  return { exponentPhoneID: state.user.user.token }
}

export default connect(mapStateToProps, { updateSelectableSchedule })(SchedulePicker);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
