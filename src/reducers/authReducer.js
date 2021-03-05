import * as types from '../actions/types'
import isEmpty from '../validation/isEmpty'

const initialState = {
    signUpResponse: '',
    isLoading: false,
    isAuth: false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case types.SIGN_UP:
            return {...state, isLoading: true}
        case types.SIGN_UP_SUCCESS: 
            return {...state, isLoading: false, signUpResponse: action.payload}
        case types.SIGN_UP_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.SIGN_IN:
            return {...state, isLoading: true}
        case types.SET_CURRENT_USER: 
            return {...state, isLoading: false, isAuth: !isEmpty(action.payload)}
        case types.SIGN_IN_FAILED:
            return {...state, isLoading: false}
        default:
            return state;
    }
}