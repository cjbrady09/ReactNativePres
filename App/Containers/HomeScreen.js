import { connect } from 'react-redux'
import Home from '../Components/Home'

import ProfileActions from '../Redux/ProfileRedux'

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SetProfile: (name, company) => { dispatch(ProfileActions.initializeUser(name, company)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
