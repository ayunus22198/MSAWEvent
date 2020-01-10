import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import Block from '../Utils/Block'
import axios from 'axios';
import { Notifications, AppLoading } from 'expo';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/ScheduleActions';
var moment = require('moment-timezone');
import InformationCard from '../Utils/InformationCard';
import QuestionCard from '../Utils/QuestionCard';

export default class EventInformation extends React.Component {
  constructor(props) {
    super(props);
    const information = props.navigation.getParam('information', null);
    this.state = {
      information: information
    }
  }

  render() {
    return (
      <View style = {styles.container} >
        <ScrollView horizontal = {false}>
          <InformationCard information = {this.state.information}/>
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
