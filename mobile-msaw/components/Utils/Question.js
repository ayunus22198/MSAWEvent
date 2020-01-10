import React, { PureComponent, PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment';

export default class Question extends PureComponent {

  render() {
    // Pull comment object out of props
    const { comment } = this.props;
    // Pull data needed to display a comment out of comment object
    const { question, dateBegin } = comment;
    // Pull user name and avatar out of user object
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={styles.text}>{content}</Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{moment(created).fromNow()}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginLeft: 5,
    paddingTop: 10,
    width: 40,
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 13,
    width: 26,
    height: 26,
  },
  text: {
    color: '#000',
    fontFamily: 'montserratMed',
    fontSize: 15,
  },
  created: {
    color: '#BBB',
  },
});
