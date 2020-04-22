import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
import Icu from './src/components/Icu';
import Opd from './src/components/Opd';
import Emergency from './src/components/emergency';
import About from './src/components/About';
import DoctorsDetails from './src/components/doctorDetails';
import Others from './src/components/others';
import Call from './src/components/call';
import Blood from './src/bloodbank/index';

const MainNavigator = createStackNavigator({
  Home: {screen: Home, navigationOptions: {headerShown: false}},
  Icu: {screen: Icu, navigationOptions: {headerShown: false}},
  Opd: {screen: Opd, navigationOptions: {headerShown: false}},
  Emergency: {screen: Emergency, navigationOptions: {headerShown: false}},
  About: {screen: About, navigationOptions: {headerShown: false}},
  Blood: {screen: Blood, navigationOptions: {headerShown: false}},
  DoctorsDetails: {
    screen: DoctorsDetails,
    navigationOptions: {headerShown: false},
  },
  Directory: {screen: Others, navigationOptions: {headerShown: false}},
  Call: {screen: Call, navigationOptions: {headerShown: false}},
});

const MyApp = createAppContainer(MainNavigator);

export default MyApp;
