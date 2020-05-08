/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import {Thumbnail} from 'native-base';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {NavigationActions} from 'react-navigation';

import {View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class MyProfile extends Component {
  render() {
    // const uri = 'https://pbs.twimg.com/media/DkFc0c8W4AQtbT_.jpg';
    console.log('Props===>', this.props);
    return (
      <View style={{flex: 1, ustifyContent: 'center', alignItems: 'center'}}>
        <Text />
        <Thumbnail large source={require('../../../../assets/mypic.jpg')} />
        <Text style={{color: '#e42c34', fontWeight: 'bold'}}>Zeeshan Raza</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
