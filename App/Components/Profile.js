import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

// Styles
import Styles from './Styles/ProfileStyles'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  }

  static propTypes = {
    name: PropTypes.string,
    company: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      name: props.name,
      company: props.company
    }
  }

  render () {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.profileSection}>
          <View style={Styles.container}>
            <Image source={require('../Images/clayton2.jpg')} style={Styles.canvas} />
          </View>
          <View style={Styles.infoContainer}>
            <View style={Styles.nameContainer}>
              <Text>{this.props.name}</Text>
            </View>
            <View style={Styles.companyContainer}>
              <Text>
                {this.props.company}
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
