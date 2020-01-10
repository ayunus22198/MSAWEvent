import React from 'react';
import PhotoGrid from 'react-native-image-grid';
import { StyleSheet, Text, View, ScrollView, AsyncStorage, TouchableOpacity, Image, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class Sponsors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{
        id: 1,
        src: require('../../MSAimages/penny_appeal.png')
      },{
        id: 2,
        src: require('../../MSAimages/CAIR.jpg')
      }, {
        id: 4,
        src: require('../../MSAimages/MPower.png')
      }, {
        id: 5,
        src: require('../../MSAimages/tarbiyya.png')
      }, {
        id: 6,
        src: require('../../MSAimages/msa_national.jpg')
      }, {
        id: 7,
        src: require('../../MSAimages/hidaya.jpg')
      }, {
        id: 8,
        src: require('../../MSAimages/life.jpg')
      }, {
        id: 9,
        src: require('../../MSAimages/iok.png')
      }, {
        id: 12,
        src: require('../../MSAimages/UmmahClinic.jpg')
      }, {
        id: 13,
        src: require('../../MSAimages/FYI.png')
      },  {
        id: 15,
        src: require('../../MSAimages/AMP.png')
      }, {
        id: 17,
        src: require('../../MSAimages/oneHalalStop.jpg')
      }, {
        id:18,
        src: require('../../MSAimages/Islamic_Scholarship_Foundation.png')
      }]
    };
  }

  render() {
    return (
          <PhotoGrid
            data = { this.state.items }
            itemsPerRow = { 2 }
            itemMargin = { 1 }
            itemPaddingHorizontal={1}
            renderHeader = { this.renderHeader }
            renderItem = { this.renderItem }
          />
    );
  }

  renderHeader() {
    return(
      <Text style = {{fontFamily: 'montserratMed', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: 30}} >Sponsors</Text>
    );
  }

  renderItem = (item, itemSize, itemPaddingHorizontal) => {
    return(
      <TouchableOpacity
       key = { item.id }
       style = {{ width: width/2 , height: width/2, paddingHorizontal: itemPaddingHorizontal }}
       onPress = { () => this.props.navigation.navigate('SponsorInformation', { _id: item.id }) }>
       <Image
         resizeMode = "cover"
         style = {{ flex: 1 }}
         source = { item.src }
       />
     </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    width: width - 15,
    marginTop: 10,
  },
})
