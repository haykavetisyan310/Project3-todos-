export const SAVE_REQUEST = 'SAVE_REQUEST';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAIL = 'SAVE_FAIL';

export default function save(value) {
    return {
        type: SAVE_SUCCESS, payload: { value }
    }
}


export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export function delALL() {
    return {
        type: DELETE_SUCCESS, payload: { }
    }
}


export const DELETE_ONE_REQUEST = 'DELETE_ONE_REQUEST';
export const DELETE_ONE_SUCCESS = 'DELETE_ONE_SUCCESS';
export const DELETE_ONE_FAIL = 'DELETE_ONE_FAIL';

export function dell(value) {
    return {
        type: DELETE_ONE_SUCCESS, payload: { value }
    }
}


export const REND_REQUEST = 'REND_REQUEST';
export const REND_SUCCESS = 'REND_SUCCESS';
export const REND_FAIL = 'REND_FAIL';

export function rend() {
    return {
        type: REND_SUCCESS, payload: {}
    }
}
