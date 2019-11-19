import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import App from './components/router';
import { AppLoading } from 'expo';
import { fontAssets } from './helpers';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
EStyleSheet.build(Colors);

//begin
import Expo from "expo"
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       signedIn: false,
//       name: "",
//       photoUrl: ""
//     }
//   }
//   signIn = async () => {
//     try {
//       const result = await Expo.Google.logInAsync({
//         androidClientId:
//           "509334235391-me5t9los9pk6a7e972dj6pfd90tpk5js.apps.googleusercontent.com",
//         //for msaw ios vers use iosClientId: YOUR_CLIENT_ID_HERE,
//         scopes: ["profile", "email"]
//       })
//
//       if (result.type === "success") {
//         this.setState({
//           signedIn: true,
//           name: result.user.name,
//           photoUrl: result.user.photoUrl
//         })
//       } else {
//         console.log("cancelled")
//       }
//     } catch (e) {
//       console.log("error", e)
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.signedIn ? (
//           <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
//         ) : (
//           <LoginPage signIn={this.signIn} />
//         )}
//       </View>
//     )
//   }
// }

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome:{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
    </View>
  )
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
//end signon


export default class MSAW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      ready: false
    }
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
     await Promise.all(fontAssets);
     this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
        <SafeAreaView style={styles.safeArea}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <App />
        </SafeAreaView>
      )
    }
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#ddd'
//   }
// });
