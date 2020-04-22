import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  View,
  List,
  ListItem,
  Right,
  Text,
} from 'native-base';
import Doctor from 'react-native-vector-icons/Fontisto';
const data = {
  FlatListItems: [
    {id: '1', name: 'Dr. Hafiz Mudassir Riaz', type: 'Physical Therapist'},
    {id: '2', name: 'Dr. Nosheen Ahmad', type: 'Radiologist'},
    {id: '3', name: 'Dr. Anaya Ch', type: 'Medical specialist'},
    {id: '4', name: 'Dr. Usman Ahmad', type: 'Anaethetist'},
    {id: '5', name: 'Dr. M.Masood Alam', type: 'Anaethetist'},
    {id: '7', name: 'Dr. M. Aasam Massom', type: 'Anaethetist'},
    {id: '6', name: 'Dr. Ali Hassan', type: 'Orthopedic Surgeon'},
    {id: '8', name: 'Dr. Dawood Rana', type: 'Orthopedic Surgeon'},
    {id: '9', name: 'Dr. Bilal Javaid', type: 'Nephrologist'},
    {id: '10', name: 'Dr. Nida Rafiq', type: 'General Physician'},
    {id: '11', name: 'Dr. Ahtesham Zafar', type: 'Internal Medicine'},
    {id: '12', name: 'Dr. Khurram Jah Zafar', type: 'Dental Surgeon'},
    {id: '13', name: 'Dr. Waqas Ashraf', type: 'Dental Surgeon'},
    {id: '14', name: 'Dr. Basharat Manzoor', type: 'Orthopedist'},
    {id: '15', name: 'Dr. M Adeel Alam Shah', type: 'Fertility Specialist'},
    {id: '16', name: 'Dr. Mazhar Mahmood', type: 'Orthopedist'},
    {id: '17', name: 'Dr. Noor ul Ain', type: 'Cardiologist'},
    {id: '18', name: 'Dr. Atika Wahla', type: 'Dentist'},
    {id: '19', name: 'Dr. Sohail Majeed', type: 'Neurologist'},
    {id: '20', name: 'Dr. Basharat Manzoor', type: 'Orthopedist'},
    {id: '21', name: 'Prof. M Akmal Hussain', type: 'Orthopedist'},
    // {id: '14', name: 'Dr. ', type: ''},
    // {id: '14', name: 'Dr. ', type: ''},
  ],
};

class DoctorsDetails extends Component {
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={styles.separate} />
    );
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
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
            <Title style={styles.title}> Doctors Details </Title>
          </Body>
        </Header>
        {/* <Content style={styles.MainContainer}> */}
        <View style={styles.MainContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.FlatListItems}
            //data defined in constructor
            ItemSeparatorComponent={this.FlatListItemSeparator}
            //Item Separator View
            renderItem={({item}) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <List>
                <ListItem avatar>
                  <Left>
                    <Doctor color="#329BF7" name="doctor" size={35} />
                  </Left>
                  <Body>
                    <Text>
                      <Text style={styles.name}>
                        {item.name}
                        {'\n'}
                      </Text>
                      <Text note> {item.type} </Text>
                    </Text>
                  </Body>
                  <Right style={styles.right}>
                    <Text style={styles.text1} note>
                      0300 1234567
                    </Text>
                    <Doctor color="green" name="phone" size={14} />
                  </Right>
                </ListItem>
              </List>
            )}
          />
        </View>
        {/* </Content> */}
      </SafeAreaView>
    );
  }
}
export default DoctorsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  separate: {
    flex: 1,
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  header: {
    color: '#000000',
    // flex: 2,
    width: '100%',
  },
  name: {
    fontSize: 13,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: '5%',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    // marginTop: 30,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  text1: {
    marginRight: 5,
    fontSize: 13,
  },
});
