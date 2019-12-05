import React from 'react';
import { StyleSheet, View,Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { connect } from 'react-redux'

import * as Ids from '../../constants/oAuth';
import { USER_LOGIN, SCHEDULE_SET } from '../../reducers/ActionTypes';

class Login extends React.Component {
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Ids.default.androidClientId,
        iosClientId: Ids.default.iosClientId,
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        const { name, photoUrl, email, id } = result.user;
        // do get request for schedule and set redux state
        this.props.setSchedule({ friday: null, saturday: null, sunday: null })

        this.props.userLogin({ name, photoUrl, email, id })
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
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch({
      type: USER_LOGIN,
      payload: { user }
    }),
    setSchedule: (friday, saturday, sunday) => dispatch({
      type: SCHEDULE_SET,
      payload: { friday, saturday, sunday }
    })
  }
}

export default connect(null, mapDispatchToProps)(Login);

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
