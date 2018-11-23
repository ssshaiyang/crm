import {get,
    post,
    put,
    del
} from './setup.js'

export const giveDevelopmentsTo = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // })
    post('/departments', params, cb)
}