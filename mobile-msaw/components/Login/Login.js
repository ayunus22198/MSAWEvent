import React from 'react';
import { StyleSheet, View,Button, Text, AsyncStorage, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { connect } from 'react-redux'
import axios from 'axios';
import * as Ids from '../../constants/authentication';
import { USER_LOGIN, SCHEDULE_SET, SCHEDULE_RETRIEVE } from '../../actions/types';
import { fetchEvents, setSchedule } from '../../actions/ScheduleActions';
import { userLogin } from '../../actions/UserActions';
import { Notifications } from 'expo';
const { height, width } = Dimensions.get('window');

class Login extends React.Component {

  clearAsyncStorage = async() => {
    AsyncStorage.clear();
  }

  signIn = async () => {
        this.props.fetchEvents();
        let friday = this.props.friday;
        let saturday = this.props.saturday;
        let sunday = this.props.sunday;
        this.props.setSchedule({ friday, saturday, sunday });
        this.props.navigation.navigate('MSAWNavigation');
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image style = {styles.logo} source = {require('../../MSAimages/logo_clear.png')} />
          <Text style = {styles.title}>MSA West Annual Conference 2020</Text>
          <View style = {{marginTop: 10}} >
            <Text style = {styles.caption}>Meeting of the Two Seas</Text>
            <Text style = {styles.captionSub}>Illumination Through Service</Text>
          </View>
        </View>
        <View style = {styles.formContainer}>
          <View style = {{padding: 20}}>
            <TouchableOpacity onPress = {() => this.signIn()} style = {styles.buttonContainer}>
              <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    friday: state.schedule.friday,
    saturday: state.schedule.saturday,
    sunday: state.schedule.sunday,
    user: state.user
  }
};

export default connect(mapStateToProps, { fetchEvents, setSchedule, userLogin })(Login);

const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   logoContainer: {
     alignItems: 'center',
     flexGrow: 1,
     marginTop: 25
   },
   logo: {
     width: 150,
     height: 150
   },
   title: {
     color: '#fff',
     marginTop: 10,
     textAlign: 'center',
     opacity: 0.9,
     fontSize: 25,
     fontFamily: 'montserratBold'
   },
   caption: {
     color: 'black',
     textAlign: 'center',
     opacity: 0.9,
     fontSize: 20,
     fontFamily: 'montserratBold'
   },
   captionSub: {
     color: 'black',
     textAlign: 'center',
     opacity: 0.9,
     fontSize: 15,
     fontFamily: 'montserratBold'
   },
   formContainer: {
     padding: 20
   },
   buttonContainer: {
     backgroundColor: '#2980b9',
     paddingVertical: 10
   },
   buttonText: {
     textAlign: 'center',
     color: '#FFFFFF',
     fontWeight: '700'
   }

});
