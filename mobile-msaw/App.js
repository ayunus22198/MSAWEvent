import React from "react"
import { SafeAreaView, Platform, StatusBar, ActivityIndicator, AppLoading, Text } from "react-native"
import AppNav from './components/router';
import store from './reducers'
import { Provider } from 'react-redux'
import { fontAssets } from './helpers/cachedFonts';
import * as Font from 'expo-font';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
        montserrat: require('../mobile-msaw/assets/fonts/Montserrat-Regular.ttf'),
        montserratBold: require('../mobile-msaw/assets/fonts/Montserrat-Bold.ttf'),
        montserratLight: require('../mobile-msaw/assets/fonts/Montserrat-Light.ttf'),
        montserratMed: require('../mobile-msaw/assets/fonts/Montserrat-Medium.ttf')
    });
    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading) {
      return null;
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <Provider store={store}>
          <AppNav />
        </Provider>
      </SafeAreaView>
    )
  }
}
