import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/HomeStyles'

export default class HomeScreen extends React.PureComponent {
  constructor (props) {
    super(props)
    HomeScreen.props = props
    this.state = {
      dataObjects: [
        {name: 'Clayton', company: 'Shift Interactive'},
        {name: 'Brady', company: 'Drake University'}
      ]
    }
  }

  static GoToProfile(name, company) {
    const { navigate } = HomeScreen.props.navigation
    this.props.SetProfile(name, company)
    navigate('ProfileScreen')
  }

  /* ------------- List ------------- */

  renderRow ({item}) {
    return (
      <View style={styles.row}>
        <TouchableOpacity onPress={() => HomeScreen.GoToProfile(item.name, item.company)}>
          <Text style={styles.boldLabel}>{item.name}</Text>
          <Text style={styles.label}>{item.company}</Text>
        </TouchableOpacity>
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
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
        />
      </View>
    )
  }
}
