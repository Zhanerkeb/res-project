import * as types from './types';

export function signUp(data) {
    return { type: types.SIGN_UP, data }
}

export function signIn(data) {
    return { type: types.SIGN_IN, data}
}

export function signOut() {
    return { type: types.SIGN_OUT }
}