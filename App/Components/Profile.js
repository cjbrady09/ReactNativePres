import React, { Component } from 'react'
import { View, Text, Image} from 'react-native'

// Styles
import Styles from './Styles/ProfileStyles'

export default class ProfileScreen extends Component {

  render () {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 4, flexDirection: 'row'}}>
          <View style={Styles.container}>
            <Image source={require('../Images/clayton2.jpg')} style={Styles.canvas} />
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Text>Clayton</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
              <Text>
                Shift <Text style={Styles.blueText}>Interactive</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 8, flexDirection: 'column'}}>
          <Text style={{flex: 1, alignSelf: 'center', marginTop: 25}}>Skills</Text>
          <View style={{flex: 7, backgroundColor: '#f00'}} />
        </View>
      </View>
    )
  }
}
