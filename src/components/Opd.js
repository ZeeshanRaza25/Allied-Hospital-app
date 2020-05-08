import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  View,
  Right,
} from 'native-base';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class Opd extends Component {
  render() {
    const {navigate} = this.props.navigation;
    const items = [
      {name: 'Skin', code: '#1abc9c'},
      {name: 'Dental', code: '#2ecc71'},
      {name: 'Medical Unit', code: '#3498db'},
      {name: 'AMETHYST', code: '#9b59b6'},
      {name: 'WET ASPHALT', code: '#34495e'},
      {name: 'GREEN SEA', code: '#16a085'},
      {name: 'NEPHRITIS', code: '#27ae60'},
      {name: 'BELIZE HOLE', code: '#2980b9'},
      {name: 'WISTERIA', code: '#8e44ad'},
      {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
      {name: 'SUN FLOWER', code: '#f1c40f'},
      {name: 'CARROT', code: '#e67e22'},
      {name: 'ALIZARIN', code: '#e74c3c'},
      {name: 'CLOUDS', code: '#ecf0f1'},
      {name: 'CONCRETE', code: '#95a5a6'},
      {name: 'ORANGE', code: '#f39c12'},
      {name: 'PUMPKIN', code: '#d35400'},
      {name: 'POMEGRANATE', code: '#c0392b'},
      {name: 'SILVER', code: '#bdc3c7'},
      {name: 'ASBESTOS', code: '#7f8c8d'},
    ];

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
            <Title style={styles.title}> Opd </Title>
          </Body>
          <Right>
            <Icons
              onPress={() => navigate('OpdHelp', {name: 'Jane'})}
              style={styles.helpIcon}
              name="live-help"
              size={30}
            />
            {/* <Text>Help</Text> */}
          </Right>
        </Header>
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({item, index}) => (
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  helpIcon: {
    marginRight: 10,
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#000000',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    width: '92%',
    paddingHorizontal: '5%',
  },
  text: {
    fontSize: 22,
  },
  title: {
    color: 'black',
    // alignItems: 'center',
    marginLeft: '23%',
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 200,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
