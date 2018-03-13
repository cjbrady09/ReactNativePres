
import { connect } from 'react-redux'
import Profile from '../Components/Profile'

import ProfileActions from '../Redux/ProfileRedux'

const mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    company: state.profile.company
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeUser: (name, company) => { dispatch(ProfileActions.initializeUser(name, company)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
