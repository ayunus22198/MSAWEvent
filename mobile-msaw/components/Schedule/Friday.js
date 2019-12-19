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
      switchStatus: false,
      otherSwitchStatus: false
    }
  }

  componentWillReceiveProps() {
    
  }



  _onRefresh = () => {
    console.log('entered');
    this.setState({loading: true});
    this.props.fetchEvents();
    this.setState({loading: false});
  }

  renderBlocks() {
    if(this.props.events) {
        return this.props.events.map((e, index) => (
          <Block selectable = {e.selectable} key = {index}  navigateBack = {false} e = {e}/>
        ))
      }
    }


  render() {
    let reload = this.props.navigation.getParam('reload');
    let events = this.props.events;
    console.log('events ', events);
    return (
      <View style = {styles.container} >
        <Text>Refresh by scrolling down!</Text>
        <ScrollView horizontal={false} refreshControl={ <RefreshControl refreshing={this.state.loading} onRefresh={this._onRefresh} /> }>
          {this.renderBlocks()}
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

  return { events: state.schedule.friday, loading: false }
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
