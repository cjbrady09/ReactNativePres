import { connect } from 'react-redux'
import Profile from '../Components/Profile'

// Actions
import ProfileActions from '../Redux/ProfileRedux'

const mapStateToProps = (state) => {
  return {
    name: state.profile.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => { dispatch(ProfileActions.changeName(name)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
