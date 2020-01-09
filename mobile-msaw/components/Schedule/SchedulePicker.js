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
    console.log('jhjh ', events);
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
    if(this.state.clickedEvent.attending.includes(this.props.exponentPhoneID)) {
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
    this.props.updateSelectableSchedule(this.state.clickedEvent, this.props.exponentPhoneID, this.state.idOfClickedBlock);
    this.props.navigation.navigate(screens[0], { reload: true });
  }

  renderEvents() {
    return this.state.possibleEvents.map((e) => {
        return (
          <Block key = {e._id} idOfAttendee = {this.props.exponentPhoneID} clicked = {e.clicked} e = {e} selectable = {true} navigateBack = {true} navigateFront = {false} blockSelect = {() => this.blockSelect(e._id)}/>
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
