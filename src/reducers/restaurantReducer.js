import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    restaurants: []
}

export default function restaurantReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_RESTAURANTS:
            return {...state, isLoading: true}
        case types.RESTAURANTS_RECEIVED:
            return {...state, isLoading: false, restaurants: action.payload.restaurants}
        case types.RESTAURANTS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        default:
            return state;
    }
}