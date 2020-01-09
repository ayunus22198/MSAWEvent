import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { withNavigation } from 'react-navigation';

// You can import from local files


const {height, width} = Dimensions.get('window');

const QuestionCard = (props) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity>
            <Text>See Questions</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 5,
    width: width - 15,
    marginTop: 10,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuestionCard;
