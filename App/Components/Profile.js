import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, FlatList } from 'react-native'

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
      company: props.company,
      dataObjects: [
        {name: 'Swift'},
        {name: 'React-Native'},
        {name: 'Android'},
        {name: 'Stuff'},
        {name: 'Nunchuck Skills'},
        {name: 'Messing with Photoshop'},
        {name: 'Hiding data at the end of lists'}
      ]
    }
  }

  renderRow ({item}) {
    return (
      <View style={Styles.row}>
        <Text style={Styles.label}>{item.name}</Text>
      </View>
    )
  }

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

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
          <View style={Styles.tableHolder} >
            <FlatList
              contentContainerStyle={Styles.listContent}
              data={this.state.dataObjects}
              renderItem={this.renderRow}
              keyExtractor={this.keyExtractor}
              initialNumToRender={this.oneScreensWorth}
              ListEmptyComponent={this.renderEmpty}
            />
          </View>
        </View>
      </View>
    )
  }
}
