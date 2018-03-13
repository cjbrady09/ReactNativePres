import React, { Component } from 'react'
import { View, Text, Image} from 'react-native'

// Styles
import Styles from './Styles/ProfileStyles'

export default class ProfileScreen extends Component {

  render () {
    return (
      <View>
        <Image source={require('../Images/clayton2.jpg')} style={Styles.image} />
        <Text>Clayton</Text>
        <Text>
          Shift <Text style={Styles.blueText}>Interactive</Text>
        </Text>
        <Text>Skills</Text>
        <View />
      </View>
    )
  }
}
