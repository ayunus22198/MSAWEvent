import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
  Image,
  Linking
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class CarouselView extends Component {

  goToWebsite(url) {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  }
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={150}
            delay={2000}
            indicatorAtBottom={false}
            indicatorSize={20}
            indicatorText="✽"
            indicatorColor="red"
            >
            <TouchableOpacity style={styles.contentContainer} onPress = {() => this.goToWebsite('https://ca.cair.com/')}>
              <Image style = {styles.logo} source = {require('../../imagesOfLogos/CAIR_banner.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentContainer} onPress = {() => this.goToWebsite('https://www.instituteofknowledge.com/')}>
              <Image style = {styles.logo} source = {require('../../imagesOfLogos/IOK.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentContainer} onPress = {() => this.goToWebsite('https://islamicscholarshipfund.org')}>
              <Image style = {styles.logo} source = {require('../../imagesOfLogos/isf.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentContainer} onPress = {() => this.goToWebsite('https://tarbiya.org')}>
              <Image style = {styles.logo} source = {require('../../imagesOfLogos/Tarbiyyah.jpg')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentContainer} onPress = {() => this.goToWebsite('https://pennyappealusa.org/?utm_source=google&utm_medium=cpc&utm_campaign=6458285745&utm_group=80172582947&feeditemid=&matchtype=e&network=g&device=c&keyword=penny%20appeal%20usa&placement=&target=&adposition=1t1&gclid=CjwKCAiAu9vwBRAEEiwAzvjq-8XYf_TmJa98nLnZS9so0DGscKmQaALAQFGBdZXGbJ2xFiCjGzXsdhoCl4wQAvD_BwE')}>
              <Image style = {styles.logo} source = {require('../../MSAimages/penny_appeal.png')} />
            </TouchableOpacity>
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


AppRegistry.registerComponent('example', () => example);
