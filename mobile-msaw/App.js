import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './components/router';
import Expo, { AppLoading } from 'expo';
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
      return <App />;
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
});
