import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { withNavigation } from 'react-navigation';
// You can import from local files


const {height, width} = Dimensions.get('window');

const returnTimes = (e) => {
  console.log('hiii ', e);
  let timestampBegin = e.dateBegin;
  let timestampEnd = e.dateEnd;
  let hoursBegin = new Date(timestampBegin).getUTCHours().toString();
  let hoursEnd = new Date(timestampEnd).getUTCHours().toString();
  let minutesBegin = new Date(timestampBegin).getUTCMinutes().toString();
  let minutesEnd = new Date(timestampEnd).getUTCMinutes().toString();
  let hoursBeginNum = parseInt(hoursBegin);
  let hoursEndNum = parseInt(hoursEnd);
  if(hoursBeginNum > 12) {
    hoursBeginNum -= 12;
    hoursBegin = hoursBeginNum.toString();
  }
  if(hoursEnd > 12) {
    hoursEndNum -= 12;
    hoursEnd = hoursEndNum.toString();
  }
  if(parseInt(minutesBegin) < 10) {
    minutesBegin = "0" + minutesBegin;
  }
  if(parseInt(minutesEnd) < 10) {
    minutesEnd = "0" + minutesEnd;
  }

  return hoursBegin + ":" + minutesBegin + " - " + hoursEnd + ":" + minutesEnd;
}

const InformationCard = (props) => {
    return (
        <View style={styles.container}>
          <Text>Title: </Text>
          <Text>Speaker: </Text>
          <Text>Time: </Text>
          <Text>Room: </Text>
          <Text>Description: </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 5,
    width: width - 15,
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InformationCard;
