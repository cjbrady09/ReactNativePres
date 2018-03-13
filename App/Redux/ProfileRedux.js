import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: 'Clayton',
  company: 'Shift Interactive'
})

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  initializeUser: ['name', 'company']
})

export const ProfileTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const initializeUser = (state, { name, company }) =>
  state.merge({ name, company })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INITIALIZE_USER]: initializeUser
})
