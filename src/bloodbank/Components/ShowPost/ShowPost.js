/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  View,
  Accordion,
} from 'native-base';
export default class Showpost extends Component {
  state = {
    tableTitle: ['Name', 'Mobile', 'Email', 'Address'],
    tableData: [
      ['Zeeshan Raza'],
      ['03247411470'],
      ['zeeshanraza@gmail.com'],
      ['Faisalabad'],
    ],
  };
  render() {
    const state = this.state;
    console.log('huhuuuyuyu', this.props.navigation);
    return (
      <View>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PostDetail')}>
                  <Thumbnail source={require('../../../../assets/mypic.jpg')} />
                </TouchableOpacity>

                <Body>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('PostDetail')
                    }>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('PostDetail')
                      }
                      style={{color: '#808080'}}>
                      Zeeshan Raza
                    </Text>
                    <Text
                      onPress={() =>
                        this.props.navigation.navigate('PostDetail')
                      }
                      style={{color: '#808080'}}>
                      A +ve
                    </Text>
                  </TouchableOpacity>
                </Body>
              </Left>
            </CardItem>
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={state.tableHead}
                  flexArr={[1, 2]}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <TouchableOpacity
                  style={styles.wrapper}
                  onPress={() => this.props.navigation.navigate('PostDetail')}>
                  <Col
                    data={state.tableTitle}
                    style={styles.title}
                    heightArr={[28, 28]}
                    textStyle={styles.text}
                  />
                  <Rows
                    data={state.tableData}
                    flexArr={[2, 1, 1]}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                </TouchableOpacity>
              </Table>
            </View>

            {/* <CardItem>
              <Button transparent textStyle={{color: '#87838B'}}>
                <TouchableOpacity>
                  <Icon style={{color: '#808080'}} active name="thumbs-up" />
                </TouchableOpacity>
                <Text style={{color: '#808080'}}>13</Text>
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('PostDetail')}>
                  <Icon style={{color: '#808080'}} active name="chatbubbles" />
                </TouchableOpacity>
                <Text style={{color: '#808080'}}>32</Text>
              </Button>
              <Button transparent textStyle={{color: '#87838B'}}>
                <Text note>April 15, 2016</Text>
              </Button>
            </CardItem> */}
          </Card>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#f6f8fa', paddingLeft: '4%'},
  row: {height: 28},
  text: {textAlign: 'left'},
});
