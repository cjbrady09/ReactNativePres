import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  image: {
    height: 200,
    width: 150
  },
  blueText: {
    color: '#00f'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  canvas: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    flexShrink: 1
  },
})
