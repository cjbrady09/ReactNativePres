import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  name: 'Clayton'
})

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  changeName: ['name']
})

export const ProfileTypes = Types
export default Creators

/* ------------- Reducers ------------- */

export const changeName = (state, { name }) =>
  state.merge({ name })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_NAME]: changeName
})
