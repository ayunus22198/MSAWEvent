import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Block from '../Utils/Block'
import axios from 'axios';

export default class Friday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }

  async componentWillMount() {
    const response = await axios.get('http://{Insert IP}:3000/api/events');
    this.setState({events: response.data.events});
  }

  render() {
    return (
      <View style = {styles.container} >
        <ScrollView horizontal={false}>
        {this.state.events.map((e, index) => (
          <Block selectable = {false} key = {index} e = {e}/>
        ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
