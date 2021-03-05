import * as types from '../actions/types'

const initialState = {
    isLoading: false,
    kitchens: [],
    kitchenResponse: ''
}

export default function kitchenReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_KITCHENS:
            return {...state, isLoading: true}
        case types.KITCHENS_RECEIVED:
            return {...state, isLoading: false, kitchens: action.payload}
        case types.KTICHENS_FAILED: 
            return {...state, isLoading: false, error: action.error}
        case types.ADD_KITCHEN: 
            return {...state, isLoading: true}
        case types.ADD_KITCHEN_SUCCESS:
            return {...state, isLoading: false, kitchenResponse: action.payload}
        case types.ADD_KITCHEN_ERROR: 
            return {...state, isLoading: false, error: action.error}
        case types.DELETE_KITCHEN: 
            return {...state, isLoading: true}
        case types.DELETE_KITCHEN_SUCCESS:
            return {...state, isLoading: false, kitchenResponse: action.payload}
        case types.DELETE_KITCHEN_ERROR: 
            return {...state, isLoading: false, error: action.error}
        case types.UPDATE_KITCHEN: 
            return {...state, isLoading: true}
        case types.UPDATE_KITCHEN_SUCCESS:
            return {...state, isLoading: false, kitchenResponse: action.payload}
        case types.UPDATE_KITCHEN_ERROR: 
            return {...state, isLoading: false, error: action.error}
        default:
            return state;
    }
}