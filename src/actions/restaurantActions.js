import * as types from './types';

export function getRestaurants(data) {
    return { type: types.GET_RESTAURANTS, data }
}
