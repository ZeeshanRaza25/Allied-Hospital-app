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
      {name: 'Child Specialist', code: '#1abc9c', room: 11},
      {name: 'Diabetist', code: '#2ecc71', room: 12},
      {name: 'Fertility Specialist', code: '#3498db', room: 13},
      {name: 'General Physician', code: '#9b59b6', room: 14},
      {name: 'Neurologist', code: '#34495e', room: 15},
      {name: 'Nephrologist', code: '#16a085', room: 16},
      {name: 'Neuro Surgen', code: '#27ae60', room: 17},
      {name: 'Orthopedist', code: '#2980b9', room: 18},
      {name: 'Urologist', code: '#8e44ad', room: 19},
      {name: 'ENT Specialist', code: '#2c3e50', room: 20},
      {name: 'Chest Specialist', code: '#f1c40f', room: 21},
      {name: 'Psychiatrist', code: '#e67e22', room: 22},
      {name: 'Gyneocolist', code: '#e74c3c', room: 23},
      {name: 'Eye Specialist', code: '#ecf0f1', room: 24},
      {name: 'Dermatology', code: '#95a5a6', room: 25},
      {name: 'Skin Specialist', code: '#f39c12', room: 26},
      {name: 'Radiologist', code: '#d35400', room: 27},
      {name: 'Physical Therapist', code: '#c0392b', room: 28},
      {name: 'Medical Specialist', code: '#bdc3c7', room: 29},
      {name: 'Internal Specialist', code: '#7f8c8d', room: 30},
      {name: 'Periodonotology', code: '#1abc9c', room: 32},
      {name: 'Presthodontics', code: '#2ecc71', room: 33},
      {name: 'Orthodonotics', code: '#3498db', room: 34},
      {name: 'Oral Surgery', code: '#9b59b6', room: 35},
      {name: 'Opertaor Dentisty', code: '#34495e', room: 36},
      {name: 'Oral Pathology', code: '#16a085', room: 37},
      {name: 'Oral Medicine', code: '#27ae60', room: 38},
      {name: 'Oral Morphology', code: '#2980b9', room: 39},
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
            <Title style={styles.title}> OPD </Title>
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
              <Text style={styles.itemCode}>Room # {item.room}</Text>
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
    alignSelf: 'center',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  },
});
