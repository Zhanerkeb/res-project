import {combineReducers} from 'redux';
import auth from './authReducer'
import kitchen from './kitchenReducer'

export default combineReducers({
    auth,
    kitchen
})