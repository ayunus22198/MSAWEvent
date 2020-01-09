import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, Button } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Theme from '../../constants/Theme'
const { height, width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import getDirections from 'react-native-google-maps-directions'

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
  let pm1 = false;
  let pm2 = false;
  if(hoursBeginNum > 12) {
    hoursBeginNum -= 12;
    hoursBegin = hoursBeginNum.toString();
    pm1 = true;
  }
  if(hoursEnd > 12) {
    hoursEndNum -= 12;
    hoursEnd = hoursEndNum.toString();
    pm2 = true;
  }
  if(parseInt(minutesBegin) < 10) {
    minutesBegin = "0" + minutesBegin;
  }
  if(parseInt(minutesEnd) < 10) {
    minutesEnd = "0" + minutesEnd;
  }
  let pm1Str = (pm1) ? "PM" : "AM";
  let pm2Str = (pm2) ? "PM" : "AM";

  return hoursBegin + ":" + minutesBegin + pm1Str + " - " + hoursEnd + ":" + minutesEnd + pm2Str;
}

const Block = (props) => {
  //console.log(props.e);
  if(props.selectable && !props.navigateBack && !props.navigateFront) {
    return (
      <View style = {[ styles.box ]}>
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center', textAlignVertical: "center" }}>
          <TouchableOpacity onPress = {() => { props.navigation.navigate('SchedulePicker', { screenId: 0, idOfClickedBlock: props.e._id, possibleEvents: props.e.events }) }}>
            <Text style = {{alignItems: 'center', justifyContent: 'center', textAlignVertical: "center", fontFamily: 'montserratMed', textAlign: 'center'}}>
              Click me!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if(props.selectable && props.navigateFront) {
    return (
      <View style = {styles.container}>
        <View style = {{ flex: 2, padding: Theme.padding , flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style = {{flex: 2 }}>
            <Text style = {{fontFamily: 'montserratMed', letterSpacing: 0, lineHeight: 18}}>{props.e.speaker}</Text>
            <TouchableOpacity onPress = {() => { props.navigation.navigate('EventInformation', { information: props.e }) }}>
              <Text style = {{fontSize: 17, fontFamily: 'montserratBold', textDecorationLine: 'underline'}} >{props.e.title}</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          </View>
        </View>
        <View style = {{ flex: 1, flexDirection: 'row', backgroundColor: '#d3d3d3', borderBottomRightRadius: Theme.borderRadius, borderBottomLeftRadius: Theme.borderRadius }}>
          <View style = {{ flex: .33, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Text style = {{fontFamily: 'montserratMed'}}>{returnTimes(props.e)}</Text>
          </View>
          <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Icon name='directions' />
            <Text style = {{fontFamily: 'montserratMed', textDecorationLine: 'underline'}}>{props.e.destination}</Text>
          </View>
          <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
          <TouchableOpacity onPress = {() => { props.navigation.navigate('SchedulePicker', { screenId: 0, idOfClickedBlock: props.e._id, possibleEvents: props.allEvents }) }} >
           <Text style = {{fontFamily: 'montserratMed', textDecorationLine: 'underline' }}>Select</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }else if(props.selectable && props.navigateBack) {
    return (
      <View style = {styles.container}>
        <View style = {{ flex: 2, padding: Theme.padding , flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style = {{flex: 2 }}>
            <Text style = {{fontFamily: 'montserratMed', letterSpacing: 0, lineHeight: 18}}>{props.e.speaker}</Text>
            <TouchableOpacity onPress = {() => { props.navigation.navigate('EventInformation', { information: props.e }) }}>
              <Text style = {{fontSize: 17, fontFamily: 'montserratBold', textDecorationLine: 'underline'}} >{props.e.title}</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          </View>
        </View>
        <View style = {{ flex: 1, flexDirection: 'row', backgroundColor: '#d3d3d3', borderBottomRightRadius: Theme.borderRadius, borderBottomLeftRadius: Theme.borderRadius }}>
          <View style = {{ flex: .33, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Text style = {{fontFamily: 'montserratMed'}}>{returnTimes(props.e)}</Text>
          </View>
          <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
            <Icon name='directions' />
            <Text style = {{fontFamily: 'montserratMed', textDecorationLine: 'underline'}}>{props.e.destination}</Text>
          </View>
          <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
          
        </View>
        </View>
      </View>
    )
  } else {
   return (
     <View style = {styles.container}>
       <View style = {{ flex: 2, padding: Theme.padding , flexDirection: 'row', justifyContent: 'space-between' }}>
         <View style = {{flex: 2 }}>
           <Text style = {{fontFamily: 'montserratMed', letterSpacing: 0, lineHeight: 18}}>{props.e.speaker}</Text>
           <TouchableOpacity onPress = {() => { props.navigation.navigate('EventInformation', { information: props.e }) }}>
             <Text style = {{fontSize: 17, fontFamily: 'montserratBold', textDecorationLine: 'underline'}} >{props.e.title}</Text>
           </TouchableOpacity>
         </View>
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Image
           style={{ width: 54, height: 54, borderColor: 'blue', borderWidth: 1, borderRadius: 27 }}
           source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
         />
         </View>
       </View>
       <View style = {{ flex: 1, flexDirection: 'row', backgroundColor: '#d3d3d3', borderBottomRightRadius: Theme.borderRadius, borderBottomLeftRadius: Theme.borderRadius }}>
         <View style = {{ flex: .33, flexDirection: 'row',justifyContent: 'center', alignItems: 'center', padding: 5 }}>
           <Text style = {{fontFamily: 'montserratMed'}}>{returnTimes(props.e)}</Text>
         </View>
         <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
           <Icon name='directions' />
           <Text style = {{fontFamily: 'montserratMed'}}>{props.e.destination}</Text>
         </View>
         <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
           <TouchableOpacity activeOpacity = {.8}>
            <Text>Must Attend</Text>
           </TouchableOpacity>
          </View>
       </View>
     </View>
   )
  }
}

const styles = StyleSheet.create({
 container: {
   borderRadius: Theme.borderRadius,
   width: width-15,
   borderColor: '#00AEF9',
   borderWidth: 1,
   flexDirection: 'column',
   flex: 1,
 },
 box: {
   height: 125,
   borderRadius: Theme.borderRadius,
   width: width-15,
   borderColor: '#00AEF9',
   borderWidth: 1,
   flex: 1,
 }
})

export default withNavigation(Block);
