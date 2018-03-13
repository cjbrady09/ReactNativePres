
import { connect } from 'react-redux'
import Profile from '../Components/Profile'

const mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    company: state.profile.company
  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
