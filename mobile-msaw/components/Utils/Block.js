import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, Button } from 'react-native';
import Theme from '../../constants/Theme'
const { height, width } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';

const Block = () => {
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
      <View style = {{ flex: 1, flexDirection: 'row', padding: Theme.padding}}>
        <Text style = {{fontFamily: 'montserratMed', flex: 1}}>5:30 - 7:30</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Theme.borderRadius,
    width: width-15,
    borderColor: '#00AEF9',
    borderWidth: 5,
    flexDirection: 'column',
    flex: 1,
  }

})

export default Block;
