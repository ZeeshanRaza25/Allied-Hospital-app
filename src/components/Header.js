import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import dsc from './assets/dsc1.jpg'

export default class MyHeader extends Component {
  render() {
    return (
      <View>
        <Text>This is header</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
});
