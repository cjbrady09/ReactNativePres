import React, { Component } from 'react'
import { View, Text, Image} from 'react-native'

// Styles
import Styles from './Styles/ProfileStyles'

export default class ProfileScreen extends Component {

  render () {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.profileSection}>
          <View style={Styles.container}>
            <Image source={require('../Images/clayton2.jpg')} style={Styles.canvas} />
          </View>
          <View style={Styles.infoContainer}>
            <View style={Styles.nameContainer}>
              <Text>Clayton</Text>
            </View>
            <View style={Styles.companyContainer}>
              <Text>
                Shift <Text style={Styles.blueText}>Interactive</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={Styles.skillsSection}>
          <Text style={Styles.skills}>Skills</Text>
          <View style={Styles.tableHolder} />
        </View>
      </View>
    )
  }
}
