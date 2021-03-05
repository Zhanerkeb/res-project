import {all, put, take, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios';

function* getKitchens() {
    try {
        const kitchenResponse = yield axios.get('http://37.18.30.124:9000/api/kitchen').then(res => res.data);
        yield put({type: types.KITCHENS_RECEIVED, payload: kitchenResponse});
    } catch (error) {
        yield put({type: types.KTICHENS_FAILED, error})
    }
}

function* addKitchen(action) {
    const {data} = action;
    try {
        const kitchenResponse = yield axios.post('http://37.18.30.124:9000/api/kitchen', data).then(res => res.data);
        yield put({type: types.ADD_KITCHEN_SUCCESS, payload: kitchenResponse});
        yield getKitchens();
    } catch (error) {
        yield put({type: types.ADD_KITCHEN_ERROR, error})
    }
}

function* deleteKitchen(action) {
    const {data} = action;
    try {
        const kitchenResponse = yield axios.delete(`http://37.18.30.124:9000/api/kitchen/${data}`).then(res => res.data);
        yield put({type: types.DELETE_KITCHEN_SUCCESS, payload: kitchenResponse});
        yield getKitchens();
    } catch (error) {
        yield put({type: types.DELETE_KITCHEN_ERROR, error})
    }
}

function* updateKitchen(action) {
    const {data} = action;
    try {
        const kitchenResponse = yield axios.put(`http://37.18.30.124:9000/api/kitchen/${data.id}`, {name: data.name}).then(res => res.data);
        yield put({type: types.UPDATE_KITCHEN_SUCCESS, payload: kitchenResponse});
        yield getKitchens();
    } catch (error) {
        yield put({type: types.UPDATE_KITCHEN_ERROR, error})
    }
}


export function* kitchenSaga() {
    yield all([
        yield takeLatest(types.GET_KITCHENS, getKitchens),
        yield takeLatest(types.ADD_KITCHEN, addKitchen),
        yield takeLatest(types.DELETE_KITCHEN, deleteKitchen),
        yield takeLatest(types.UPDATE_KITCHEN, updateKitchen)
    ])
}