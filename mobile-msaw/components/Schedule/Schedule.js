import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/**Page where Schedule.js loads. ToDo -
1. Render Schedule on screen
2. Create two tabs, one for Final List of Events, and Events user selects
3. Create Cards for events
4. Description Page with props passed 
**/
export default class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Schedule.js</Text>
      </View>
    )
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
