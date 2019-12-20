import React from 'react';
import { StyleSheet, View,Button, Text, AsyncStorage } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { connect } from 'react-redux'
import axios from 'axios';
import * as Ids from '../../constants/authentication';
import { USER_LOGIN, SCHEDULE_SET, SCHEDULE_RETRIEVE } from '../../actions/types';
import { fetchEvents, setSchedule } from '../../actions/ScheduleActions';
import { userLogin } from '../../actions/UserActions';
import { Notifications } from 'expo';

class Login extends React.Component {

  clearAsyncStorage = async() => {
    AsyncStorage.clear();
  }

  signIn = async () => {
    console.log(Ids);
    try {
      const result = await Google.logInAsync({
        androidClientId: Ids.default.androidClientId,
        iosClientId: Ids.default.iosClientId,
        scopes: ["email"]
      })

      if (result.type === "success") {
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);
        const { name, email, id } = result.user;
        console.log(email);
        // do get request for schedule and set redux state
        this.props.userLogin({email, token})
        this.props.fetchEvents();
        let friday = this.props.friday;
        let saturday = this.props.saturday;
        let sunday = this.props.sunday;
        this.props.setSchedule({ friday, saturday, sunday })
        console.log(email, token);
        this.props.navigation.navigate('MSAWNavigation');
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  render() {
    return (
      <View style = { styles.loginButtonSection }>
        <Button onPress={() => this.signIn()}
               style={styles.loginButton}
               title="Login"
       />
       <Button onPress={this.clearAsyncStorage} title = "Clear Async Storage"></Button>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log('sss', state);
  return {
    friday: state.schedule.friday,
    saturday: state.schedule.saturday,
    sunday: state.schedule.sunday,
    user: state.user
  }
};

export default connect(mapStateToProps, { fetchEvents, setSchedule, userLogin })(Login);

const styles = StyleSheet.create({
   loginTextSection: {
      width: '100%',
      height: '30%',
   },
   loginButtonSection: {
      width: '100%',
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   inputText: {
      marginLeft: '20%',
      width: '60%'
   },
   loginButton: {
     backgroundColor: 'blue',
     color: 'white'
   }
});
