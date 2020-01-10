import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import Block from '../Utils/Block'
import axios from 'axios';
import { Notifications, AppLoading } from 'expo';
import { connect } from 'react-redux';
import { fetchEvents } from '../../actions/ScheduleActions';
import CarouselView from '../Utils/Carousel';

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
      included: -1,
      switchStatus: false,
      otherSwitchStatus: false
    }
  }

  async loadNotifications() {
    for(let i = 0; i < this.props.events.length; i++) {
      if(i == 0) {
        continue;
      }
      let date = new Date(this.props.events[i].dateBegin);
      let year = date.getFullYear();
      let month = date.getMonth();
      let datest = date.getDate();
      let hour = date.getHours();
      let minutes = date.getMinutes();
      if(minutes >= this.state.offset) {
        minutes = minutes - this.state.offset;
      } else {
        minutes = minutes + 15;
        hour = hour - 1;
      }
      let not0 = new Date(year, month, datest, hour, minutes);
      not0 = Date.parse(not0);
      const schedulingOptions0 = { time: not0 };
      let localnotification = this.state.localnotification;
      let text;
      if(this.props.events[i].selectable) {
        localnotification.body = 'Events happening in 45 min!';
      } else {
        localnotification.body = this.props.events[i].speaker + " is speaking at " + this.props.events[i].destination + ' in 45 min';
      }
      this.setState({localnotification});
      await Notifications.scheduleLocalNotificationAsync(
          localnotification,
          schedulingOptions0
      );
      }
  }

  async componentWillMount() {
    if(this.props.events != null)
      this.loadNotifications();
  }


  _onRefresh = () => {
    this.setState({loading: true});
    this.props.fetchEvents();
    this.loadNotifications();
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
    return -1;
  }


  render() {
    let events = this.props.events;
    return (
      <View style = {styles.container} >
        <Text>Refresh by scrolling down!</Text>
        <ScrollView horizontal={false} refreshControl={ <RefreshControl refreshing={this.state.loading} onRefresh={this._onRefresh} /> }>
          {(events != null) ? events.map((e, i) => {
            if(i == 0) {
              return <CarouselView />
            }
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
  if (!state.schedule.sunday)
    return { loading: true };

  // return whatever state you need from friday -- can deconstruct object here
  // and return events, any user-specific data, etc.

  return { events: state.schedule.sunday, loading: false }
}

const mapDispatchToProps = (dispatch) => {
  // if the schedule is interactive as in the user wants to select their schedule, create
  // a dispatch function to update user-selected event with whatever metadata

  return {
    fetchEvents: fetchEvents
  }
}

export default connect(mapStateToProps, { fetchEvents })(Sunday);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
