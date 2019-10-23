import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, Button } from 'react-native';
import Theme from '../../constants/Theme'
const { height, width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

const Block = (props) => {
  if(props.selectable) {
    return (
      <View style = {[ styles.box ]}>
        <View style = {{ alignItems: 'center' }}>
          <Text style = {{alignItems: 'center', justifyContent: 'center', fontFamily: 'montserratMed', textAlign: 'center'}}>
            Click me!
          </Text>
        </View>
      </View>
    )
  } else {
   return (
     <View style = {styles.container}>
       <View style = {{ flex: 2, padding: Theme.padding , flexDirection: 'row', justifyContent: 'space-between' }}>
         <View style = {{flex: 2 }}>
           <Text style = {{fontFamily: 'montserratMed', letterSpacing: 0, lineHeight: 18}}>Zahra Billoo</Text>
           <Text style = {{fontSize: 17, fontFamily: 'montserratBold'}} >Dawah in the Community</Text>
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
           <Icon name='directions' />
           <Text style = {{fontFamily: 'montserratMed'}}>5:30 - 7:30</Text>
         </View>
         <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
           <Icon name='directions' />
           <Text style = {{fontFamily: 'montserratMed'}}>1 Shields Ave, Davis, CA 95616</Text>
         </View>
         <View style = {{ flex: .33,flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
         <TouchableOpacity onPress = {props.blockSelect} >
          <Text style = {{fontFamily: 'montserratMed'}}>Select</Text>
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
export default Block;
