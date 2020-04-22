import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import AmbulanceIcon from 'react-native-vector-icons/Fontisto';
import {Header, Left, Body, Button, Icon, Title, View, Text} from 'native-base';

export default class Emergency extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header transparent style={styles.header}>
          <Left>
            <TouchableOpacity>
              <Button
                transparent
                onPress={() => navigate('Home', {name: 'Jane'})}>
                <Icon name="arrow-back" style={styles.icon} />
              </Button>
            </TouchableOpacity>
          </Left>
          <Body style={styles.title}>
            <Title style={styles.title}> Emergency </Title>
          </Body>
        </Header>
        <View style={styles.itemView}>
          <Icons
            color="#2AA6B6"
            style={styles.icons}
            name="md-call"
            size={40}
          />
          <Text style={styles.text}> Emergency Call </Text>
        </View>
        <View style={styles.itemView}>
          <AmbulanceIcon
            style={styles.icons1}
            color="red"
            name="ambulance"
            size={30}
          />
          <Text style={styles.text}> Ambulance Call </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    color: '#000000',
    paddingLeft: 10,
    // backgroundColor: '#000000',
  },
  body: {
    backgroundColor: '#000000',
    color: 'black',
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '5%',
  },
  icons: {
    // backgroundColor: '#000000',
    marginLeft: '6%',
  },
  icons1: {
    // backgroundColor: '#000000',
    marginLeft: '3%',
  },
  text: {
    fontWeight: 'bold',
    marginHorizontal: '9%',
    alignContent: 'center',
  },
  itemView: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#000000',
    marginVertical: '1%',
    height: '10%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    width: '93%',
  },
  card: {
    // flex: 1,
  },
});
