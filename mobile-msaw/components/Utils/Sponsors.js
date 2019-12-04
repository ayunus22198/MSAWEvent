import React from 'react';
import PhotoGrid from 'react-native-image-grid';
import { StyleSheet, Text, View, ScrollView, AsyncStorage, TouchableOpacity, Image, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class Sponsors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(10)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text='+(i+1) }
    });
    this.setState({ items });
  }

  render() {
    return (
      <View style={styles.container}>
          <PhotoGrid
            data = { this.state.items }
            itemsPerRow = { 2 }
            itemMargin = { 1 }
            itemPaddingHorizontal={1}
            renderHeader = { this.renderHeader }
            renderItem = { this.renderItem }
          />
      </View>
    );
  }

  renderHeader() {
    return(
      <Text style = {{fontFamily: 'montserratMed'}} >Sponsors</Text>
    );
  }

  renderItem(item, itemSize, itemPaddingHorizontal) {
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize - 15, height: itemSize, paddingHorizontal: itemPaddingHorizontal }}
        onPress = { () => {
          // Do Something
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item.src }}
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
