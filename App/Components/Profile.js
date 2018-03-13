import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import PrimaryButton from '../Components/PrimaryButton'

// Styles
import Styles from './Styles/ProfileStyles'

export default class ProfileScreen extends Component {
  static propTypes = {
    name: PropTypes.string,
    changeName: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = {
      name: props.name
    }
  }

  render () {
    return (
      <View>
        <PrimaryButton onPress={() => this.props.changeName('Test2')} text={'SUBMIT'} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}
