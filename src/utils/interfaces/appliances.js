'use strict';
import {get,
    post,
    put,
    del,
    uploadFile
} from './setup.js'


export const hadBuyApp = function(params, cb) {
    /*cb({
        "error_code": 1000,
        "data": [{
            "application_id":1,
            "application_name":"CRM1",
            "application_logo":"/uploads/",
            "status":1
        },{
            "application_id":2,
            "application_name":"CRM",
            "application_logo":"/uploads/",
            "status":0
        }]
    });*/
    get("/companies/appliances",null, cb);
}

export const appSquare = function(params, cb) {
    /*cb({
        "error_code": 1000,
        "data": [{
            "application_id":1,
            "application_name":"CRM",
            "application_logo":"/uploads/"
        },{
            "application_id":1,
            "application_name":"CRM",
            "application_logo":"/uploads/"
        },]
    });*/
    get("/appliances",null, cb);
}
//buyModal
export const buyModalData = function(params, cb) {

    get('/appliances/detail/' + params.application_id, params, cb);
}
//squareModal
export const appSquareModalData = function(params, cb) {
    get("/appliances/detail/"+params.application_id,null, cb);
}




