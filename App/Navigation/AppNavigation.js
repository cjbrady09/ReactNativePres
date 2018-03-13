import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: {title: 'Home'} },
  ProfileScreen: { screen: ProfileScreen, navigationOptions: {title: 'Profile'} }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
