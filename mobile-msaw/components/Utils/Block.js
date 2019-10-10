import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Theme from '../../constants/Theme'
const { heigth, width } = Dimensions.get('window');

const Block = ()=>{
  return (
    <View style = {styles.container}>
      <View style = {{flex: 2,   padding: Theme.padding, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#0f0', borderWidth: 1,}}>
          <View>
            <Text style = {{fontSize: 20}} > Dawah in the Community </Text>
            <Text> Zahra Billoo </Text>
          </View>
            <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          />
      </View>
      <View style = {{ flex: 1, backgroundColor: '#CDCDCD', borderColor: '#0f0', borderWidth: 1, zIndex: 2, flexDirection: 'row'}}>
        <Text>Hello</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    borderRadius: Theme.borderRadius,
    width: width-30,
    justifyContent: 'space-between',
    borderColor: 'black',
    flexDirection: 'column',
    padding: Theme.padding,
    margin: 10,
    zIndex: 0
  }

})

export default Block;
