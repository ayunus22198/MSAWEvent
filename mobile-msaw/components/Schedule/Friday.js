import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import Block from '../Utils/Block'
import axios from 'axios';
import { Notifications, AppLoading } from 'expo';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/ScheduleActions';
var moment = require('moment-timezone');

class Friday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      localnotification: {
        title: 'MSA West',
        body: "",
        android: {
          sound: true,
        },
        ios: {
          sound: true,
        },
      },
      events: [],
      offset: 45,
      included: -1,
      switchStatus: false,
      otherSwitchStatus: false
    }
  }

  componentWillReceiveProps() {

  }



  _onRefresh = () => {
    this.setState({loading: true});
    this.props.fetchEvents();
    this.setState({loading: false});
  }

  renderBlocks() {
    if(this.props.events) {
        return this.props.events.map((e, index) => (
          <Block selectable = {(e.selectable) ? false: true} key = {index}  navigateBack = {false} e = {e}/>
        ))
      }
    }

  returnIfIncluded = (e) => {
    for(let i = 0; i < e.events.length; i++) {
      if(e.events[i].attending.includes(this.props.token)) {
        console.log('att ', e.events[i]);
        return i;
      }
    }
    return -1;
  }


  render() {
    let reload = this.props.navigation.getParam('reload');
    let events = this.props.events;
    let included = this.state.included;
    console.log('included in ', included);
    return (
      <View style = {styles.container} >
        <Text>Refresh by scrolling down!</Text>
        <ScrollView horizontal={false} refreshControl={ <RefreshControl refreshing={this.state.loading} onRefresh={this._onRefresh} /> }>
          {(events != null) ? events.map((e, i) => {
            if(!e.selectable) {
              return <Block selectable = {false} key = {i}  navigateBack = {false} e = {e}/>
            } else {
              if(this.returnIfIncluded(e) != -1) {
                return <Block selectable = {true} key = {i}  navigateBack = {true} allEvents = {e.events} e = {e.events[this.returnIfIncluded(e)]}/>
              } else {
                return <Block selectable = {true} key = {i}  navigateBack = {false} e = {e}/>
              }
            }
          }) : null}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  if (!state.schedule.friday)
    return { loading: true };

  // return whatever state you need from friday -- can deconstruct object here
  // and return events, any user-specific data, etc.

  return { events: state.schedule.friday, token: state.user.user.token, loading: false }
}

const mapDispatchToProps = (dispatch) => {
  // if the schedule is interactive as in the user wants to select their schedule, create
  // a dispatch function to update user-selected event with whatever metadata

  return {
    fetchEvents: fetchEvents
  }
}

export default connect(mapStateToProps, { fetchEvents })(Friday);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
