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
      message: ''
    }
  }

  componentWillMount() {
    this.returnInformation();
  }

  returnInformation = () => {
    let title;
    let websiteLink;
    let message;
    switch(this.state._id) {
      case 1:
        title = 'Penny Appeal USA'
        websiteLink = 'https://pennyappealusa.org/'
        message = 'At Penny Appeal USA Our way of doing charity is simple — we take small change and make a BIG difference with it. Whether it is building villages for orphans, digging wells to provide clean water to communities around the world, or even creating community gardens to empower women and financial secure the future of many families, none of it is possible without the support of contribution of friends like you. Visit pennyappealusa.org or click below to either join our fast-growing network of #TeamOrange volunteers or to donate now to our winter campaign and help us battle the bitter cold today.'
        break
      case 2:
        title = 'CAIR USA'
        websiteLink = 'https://ca.cair.com'
        message = 'The decennial US Census is incredibly important in determining congressional representation and upwards of 800 billion dollars in funding for vital programs and services that serve the AMEMSA and underserved communities of America. CAIR-CA has committed to ensuring Muslim Americans are counted in the 2020 Census. Let your voice be heard and pledge to fill out your census forms at 2020BeCounted.org! #BeSeenBeHeardBeCounted #CAIRCA #2020Census'
        break
      case 3:
        title = 'Islamic Releif USA'
        websiteLink = 'https://www.instituteofknowledge.com'
        break
      case 4:
        title = 'MPower Change'
        websiteLink = 'https://actionnetwork.org/groups/mpower-change'
        message = 'MPower Change is the largest digital advocacy organization led by Muslims in the U.S. As an organization rooted in Islam, MPower Change works on grassroots digital and field campaigns for racial, social, and economic justice. Join us at mpowerchange.org! Follow us @mpowerchange on Instagram and @mpower_change on Twitter.'
        break
      case 5:
        title = 'Tarbiyya Institute'
        websiteLink = 'https://www.tarbiya.org'
        message = 'At Tarbiya Institute, we educate, train and empower generations of American Muslims through the lens of Islamic knowledge and address new and modern challenges, thereby fostering an American Muslim identity.'
        break
      case 6:
        title = 'MSA National'
        websiteLink = 'https://www.msanational.org/'
        message = ''
        break
      case 7:
        title = 'Hidaya Foundation'
        websiteLink = 'https://www.hidaya.org/'
        message = ''
        break
      case 8:
        title = 'Life For Relief and Development'
        websiteLink = 'https://www.lifeusa.org/'
        message = ''
        break
      case 9:
        title = 'Islamic Insitute Of Knowledge'
        websiteLink = 'http://www.iiokonline.org/'
        message = 'Pursue your path to knowledge in a way that works for your schedule; visit IOKchess.com to learn more about the Institute of Knowledge on-line, on-site and on-demand course options'
        message = ''
        break
      case 10:
        title = 'Support Life Foundation'
        websiteLink = 'https://www.supportlives.org/'
        message = ''
        break
      case 11:
        title = 'San Ramon Valley Islamic Center'
        websiteLink = 'https://www.srvic.org'
        message = ''
        break
      case 12:
        title = 'UMMA Clinic'
        websiteLink = 'https://www.ummaclinic.org/'
        message = ''
        break
      case 13:
        title = 'The Family and Youth Institute'
        websiteLink = 'https://www.thefyi.org/'
        message = ''
        break
      case 14:
        title = 'Nur Publications'
        websiteLink = 'https://www.nurpublications.org/'
        message = ''
        break
      case 15:
        title = 'American Muslims For Palestine'
        websiteLink = 'https://www.ampalestine.org'
        message = 'Register today for Americas largest Palestine advocacy effort! Visit www.palestineadvocacy.org to register and to learn more! Do not forget to take advantage of the 25% discount ending on January 31st! For more information on AMP, visit www.ampalestine.org or contact info@ampalestine.org'
        break
      case 16:
        title = 'Why Islam'
        websiteLink = 'https://www.whyislam.org/'
        message = ''
        break
      case 17:
        title = 'One Stop Halal'
        websiteLink = 'https://www.onestophalal.com/'
        message = 'One stop destination for 1000s of halal products including fresh meat, grocery, cosmetics, personal care, vitamins, housing, clothing, and much more! We offer FREE DELIVERY to you home in 2 days. http://bit.ly/onestophalal'
        break
      case 18:
        title = 'Islamic Scholarship Foundation'
        websiteLink = 'https://islamicscholarshipfund.org/'
        message = 'Apply for the ISF-MSAW scholarship at the application form: https://smr.to/p62124'
        break

      default:
        break
      }
      this.setState({title, websiteLink, message});
  }

  render() {
    return (
        <View>
          <View style = {styles.container}>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 20, textAlign: 'center' }}>About</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Title: {this.state.title}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Website: {this.state.websiteLink}</Text>
            <Text style = {{fontFamily: 'montserratBold', fontSize: 15 }}>Message: {this.state.message}</Text>
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
