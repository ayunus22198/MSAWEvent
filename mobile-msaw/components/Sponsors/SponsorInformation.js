import React from 'react';
import PhotoGrid from 'react-native-image-grid';
import { StyleSheet, Text, View, ScrollView, AsyncStorage, TouchableOpacity, Image, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default class SponsorInformation extends React.Component {

  constructor(props) {
    super(props);
    const _id = props.navigation.getParam('_id', null);
    this.state = {
      _id,
      title: '',
      websiteLink: '',
      email: '',
      directions: '',
      phoneNumber: ''
    }
  }

  componentWillMount() {
    this.returnInformation();
  }

  returnInformation = () => {
    let title;
    let websiteLink;
    let email;
    let directions;
    let phoneNumber;
    switch(this.state._id) {
      case 1:
        title = 'Penny Appeal USA'
        websiteLink = 'https://pennyappealusa.org/'
        email = 'info@pennyappealusa.org'
        headquarters = '2461 Eisenhower Ave, 2nd Floor Alexandria, VA 22314'
        phoneNumber = '(202) 851-2112'
        break
      case 2:
        title = 'CAIR USA'
        websiteLink = 'https://www.cair.com'
        email = 'donate@cair.com,civilrights@cair.com'
        headquarters = '453 New Jersey Avenue, SE Washington, DC 20003'
        phoneNumber = '(202) 488-8787'
        break
      case 3:
        title = 'Islamic Releif USA'
        websiteLink = 'http://irusa.org/?gclid=Cj0KCQiA0NfvBRCVARIsAO4930lNv4YlDm_m-Zc4ne8bm3zuR8R1KJ39e9Ms7fF8NHStCKe3q4SZ40gaAgcuEALw_wcB'
        email = 'donorcare@irusa.org, media@irusa.org (press inquiries only)'
        headquarters = 'P.O. Box 22250 Alexandria, VA 22304'
        phoneNumber = '1-855-447-1001'
        break
      case 4:
        title = 'MPower Change'
        websiteLink = 'https://actionnetwork.org/groups/mpower-change'
        email = 'support@actionnetwork.org '
        headquarters = 'New York, NY'
        phoneNumber = 'None Given'
        break
      case 5:
        title = 'Tarbiyya Institute'
        websiteLink = 'https://tarbiya.org'
        email = 'info@tarbiya.org'
        headquarters = '1836 Sierra Gardens Dr Suite 100 Roseville, CA 95661'
        phoneNumber = '(916) 800-4111'
        break
      default:
        break
      }
      this.setState({title, websiteLink, email, headquarters, phoneNumber});
  }

  render() {
    return (
        <View>
          <View style = {styles.container}>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 20, textAlign: 'center' }}>About</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Title: {this.state.title}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Website: {this.state.websiteLink}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Email: {this.state.email}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Headquarters: {this.state.headquarters}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Phone Number: {this.state.phoneNumber}</Text>
          </View>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: height/3,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 25,
    borderColor: 'grey',
    borderWidth: 1,
    width: width,
    marginTop: 10,
  },
})
