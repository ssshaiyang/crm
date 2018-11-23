'use strict';
import {get,
    post,
    put,
    del,
    uploadFile
} from './setup.js'

export const getCompanies = function(params, cb) {
 // cb({
 //        "error_code": 1000,
 //        "data": {
 //            "company_logo": "20160820/42a79759f284b767dfcb2a0197904287.jpg",
 //            "company_name":"康策",
 //            "company_phone":"14725836999",
 //            "company_fax":"",
 //            "company_address":"杭州",
 //            "company_zip_code":"311612",
 //            "company_website":"http://www.kangcenet.com",
 //        }
 //    });
    var company_id =sessionStorage.getItem("company_id");
    console.log(company_id)
     get("/companies/"+company_id,null, cb);
}
export const getCompaniesEdit = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // });
    post("/companies", params, cb);
}

export const uploadCompanyLogo = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "logo":"20160820/42a79759f284b767dfcb2a0197904287.jpg",
    //     }
    // })
    post("/companies/logo",params, cb)
     // uploadFile('/companies/logo',"company_logo", params, cb)
}

