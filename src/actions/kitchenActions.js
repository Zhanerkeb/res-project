import * as types from './types';

export function getKitchens() {
    return { type: types.GET_KITCHENS }
}

export function addKitchen(data) {
    return {type: types.ADD_KITCHEN, data}
}

export function deleteKitchen(data) {
    return {type: types.DELETE_KITCHEN, data}
}

export function updateKitchen(data) {
    return {type: types.UPDATE_KITCHEN, data}
}