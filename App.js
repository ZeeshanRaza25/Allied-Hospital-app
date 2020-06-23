import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/components/Home';
import Icu from './src/components/Icu';
import Opd from './src/components/Opd';
import Emergency from './src/components/emergency';
import About from './src/components/About';
import DoctorsDetails from './src/components/doctorDetails';
// import Others from './src/components/others';
import Call from './src/components/call';
import Blood from './src/bloodbank/bloodindex';
import OpdHelp from './src/components/OpdHelp';
import BloodMain from './src/bloodbank/bloodindex';
import Login from './src/bloodbank/Screens/Login/Login';
// import Signup from './src/bloodbank/Screens/Signup/Signup';
import BloodHome from './src/bloodbank/Screens/Home/Home';
import PostDetail from './src/bloodbank/Screens/DetailPost/DetailPost';
import SignUp from './src/components/SignUp';
import Tips from './src/components/Tips';

const AfterSignin = createStackNavigator({
  Blood: {screen: Blood, navigationOptions: {headerShown: false}},
  BloodMain: {screen: BloodMain, navigationOptions: {headerShown: false}},
  BloodHome: {
    screen: BloodHome,
    navigationOptions: {headerShown: false},
  },
  PostDetail: {
    screen: PostDetail,
    // navigationOptions: { header: null }
  },
});

const BeforeSignin = createStackNavigator({
  Home: {screen: Home, navigationOptions: {headerShown: false}},
  Tips: {screen: Tips, navigationOptions: {headerShown: false}},
  Icu: {screen: Icu, navigationOptions: {headerShown: false}},
  Opd: {screen: Opd, navigationOptions: {headerShown: false}},
  Emergency: {screen: Emergency, navigationOptions: {headerShown: false}},
  About: {screen: About, navigationOptions: {headerShown: false}},
  DoctorsDetails: {
    screen: DoctorsDetails,
    navigationOptions: {headerShown: false},
  },
  Call: {screen: Call, navigationOptions: {headerShown: false}},
  OpdHelp: {screen: OpdHelp, navigationOptions: {headerShown: false}},

  Login: {screen: Login, navigationOptions: {headerShown: false}},
  SignUp: {
    screen: SignUp,
    navigationOptions: {headerShown: false},
  },
});

const AppNavigator = createStackNavigator(
  {
    Auth: BeforeSignin,
    App: AfterSignin,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
  },
);

const MyApp = createAppContainer(AppNavigator);

export default MyApp;
