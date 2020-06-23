/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Content, Form, Item, Input, Label, Text, View} from 'native-base';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              width: '80%',
              //   height: '100%',
              //   justifyContent: 'center',
              //   alignContent: 'center',
              //   alignItems: 'center',
              backgroundColor: '#eceef3',
              marginHorizontal: '10%',
            }}>
            <Text />
            <Image
              style={{
                alignSelf: 'center',
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
              source={{
                uri:
                  'http://pluspng.com/img-png/blood-donation-png-hd-blood-blood-drop-donation-hand-health-care-medical-transfusion-blood-512.png',
              }}
            />
            {/* <Text
              style={{
                color: '#e42c34',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              WelCome to Blood Bank
            </Text> */}
            <Content style={styles.content}>
              <Form>
                <Item stackedLabel>
                  <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                    {'\n'}
                    User email
                  </Label>
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="xyz@gmail.com"
                  />
                </Item>
                <Item stackedLabel last>
                  <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                    Password
                  </Label>
                  <Input secureTextEntry={true} placeholder="************" />
                </Item>
                <Text />
                <View style={{textAlign: 'center'}}>
                  <TouchableOpacity
                    rounded
                    style={{
                      backgroundColor: '#e42c34',
                      alignItems: 'center',
                      borderRadius: 50,
                      color: 'black',
                      padding: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontWeight: 'bold'}}> Login </Text>
                  </TouchableOpacity>
                  <Text />
                  <Text
                    style={{
                      color: '#e42c34',
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Not a member?
                  </Text>
                  <Text />

                  <TouchableOpacity
                    rounded
                    style={{
                      backgroundColor: '#e42c34',
                      borderRadius: 50,
                      alignItems: 'center',
                      color: '#2AA6B6', // #FF00FF
                      padding: 10,
                    }}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{fontWeight: 'bold'}}>Sign up</Text>
                  </TouchableOpacity>
                  <Text />
                </View>
              </Form>
            </Content>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.lighter,
    // borderWidth: 5,
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: '#000000',
    width: null,
  },
  content: {
    width: '100%',
    // backgroundColor: '#000000',
  },
});
