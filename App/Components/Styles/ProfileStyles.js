import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  profileSection: {
    flex: 4,
    flexDirection: 'row'
  },
  skillsSection: {
    flex: 8,
    flexDirection: 'column'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  companyContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  skills: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 25
  },
  tableHolder: {flex: 7,
    backgroundColor: '#f00'
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
