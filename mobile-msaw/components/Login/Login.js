import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style = { styles.loginButtonSection }>
        <Button onPress={() => this.props.signIn()}
               style={styles.loginButton}
               title="Login"
       />
      </View>
    )
  }
}

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
