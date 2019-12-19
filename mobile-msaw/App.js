import React from "react"
import { SafeAreaView, Platform, StatusBar } from "react-native"
import AppNav from './components/router';
import store from './reducers'
import { Provider } from 'react-redux'
import { fontAssets } from './helpers/cachedFonts';

export default class App extends React.Component {
  render() {
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
