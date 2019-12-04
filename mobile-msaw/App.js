import React from "react"
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Platform, StatusBar } from "react-native"
import * as Expo from "expo"
import Login from './components/Login/Login';
import AppNav from './components/router';
import * as Google from 'expo-google-app-auth';
import * as Ids from './constants/oAuth';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Ids.default.androidClientId,
        iosClientId: Ids.default.iosClientId,
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        console.log('hi');
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {this.state.signedIn ? (
          <AppNav />
        ) : (
          <Login signIn={this.signIn} />
        )}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})
