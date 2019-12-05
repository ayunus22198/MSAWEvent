import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Block from '../Utils/Block'
import axios from 'axios';
import { Notifications } from 'expo';
import { connect } from 'react-redux'

class Sunday extends React.Component {
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

  _retrieveData = async () => {
    try {
      const switchStatus = await AsyncStorage.getItem('switchStatus');
      const otherSwitchStatus = await AsyncStorage.getItem('otherSwitchStatus');

      // set the state
      //main switcher state
      if (switchStatus !== null) {
        this.setState({ switchStatus: JSON.parse(switchStatus) });
      } else if (switchStatus == null) {
        this.setState({ switchStatus: true });
      }

      // other switchers state
      if (otherSwitchStatus !== null) {
        this.setState({ otherSwitchStatus: JSON.parse(otherSwitchStatus) });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  async componentWillMount() {
    this._retrieveData();
    const response = await axios.get('http://bcc28b41.ngrok.io/api/events');

    console.log(response.data.events);
    for(let i = 0; i < response.data.events.length; i++) {
      let date = new Date(response.data.events[i].dateBegin);
      let year = date.getFullYear();
      let month = date.getMonth();
      let datest = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      let not0 = new Date(year, month, datest, hour, minutes);
      not0.setMinutes(not0.getMinutes() - this.state.offset);
      not0 = Date.parse(not0);
      const schedulingOptions0 = { time: not0 };
      let localnotification = this.state.localnotification;
      localnotification.body = response.data.events[i].speaker + " is speaking at " + response.data.events[i].destination;
      this.setState({localnotification});
      console.log(localnotification);
      console.log(not0);
      await Notifications.scheduleLocalNotificationAsync(
          localnotification,
          schedulingOptions0
      );
    }
    this.setState({events: response.data.events});
  }

  render() {
    return (
      <View style = {styles.container} >
        <ScrollView horizontal={false}>
        {this.state.events.map((e, index) => (
          <Block selectable = {false} key = {index} e = {e}/>
        ))}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  if (!state.schedule.sunday)
    return { loading: true };

  // return whatever state you need from friday -- can deconstruct object here
  // and return events, any user-specific data, etc.

  return { sunday: state.schedule.sunday, loading: false }
}

const mapDispatchToProps = (dispatch) => {
  // if the schedule is interactive as in the user wants to select their schedule, create 
  // a dispatch function to update user-selected event with whatever metadata

  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sunday);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
