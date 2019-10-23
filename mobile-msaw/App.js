import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import App from './components/router';
import { AppLoading } from 'expo';
import { fontAssets } from './helpers';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
EStyleSheet.build(Colors);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});
