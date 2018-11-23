import {
    get,
    put,
    del,
    post
} from './setup.js'
export const getFlowsData = function (params, cb) {
    get('/flows', params, cb)
}