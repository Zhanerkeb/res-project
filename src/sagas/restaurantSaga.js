import {all, put, take, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import axios from 'axios';

function* getRestaurants(action) {
    const {data} = action
    try {
        const resResponse = yield axios.get(`http://37.18.30.124:9000/api/restaurant?query=${data.query}&page=${data.page}`).then(res => res.data);
        yield put({type: types.RESTAURANTS_RECEIVED, payload: resResponse});
    } catch (error) {
        yield put({type: types.RESTAURANTS_FAILED, error})
    }
}

export function* restaurantSaga() {
    yield all([
        yield takeLatest(types.GET_RESTAURANTS, getRestaurants),
    ])
}