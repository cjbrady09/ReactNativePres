import React from 'react'
import { connect } from 'react-redux'
import Home from '../Components/Home'


const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
