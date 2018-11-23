'use strict';

import {get,
  post,
  put,
  del
} from './setup.js'

//获取药产品信息
export const getProduct = function(params, cb) {
  /*cb({
         "error_code":1000,
         data:{"data": [{
           "drug_id": "1",
           "drug_name": "白加黑",
           "specifications": "500g",
           "dosage": '盒' ,
         },
         {
           "drug_id": "2",
           "drug_name": "白黑",
           "specifications": "500g",
           "dosage": '盒' ,
         },
         {
           "drug_id": "3",
           "drug_name": "白黑白黑白",
           "specifications": "500g",
           "dosage": '盒' ,
         },
         {
           "drug_id": "4",
           "drug_name": "白黑",
           "specifications": "500g",
           "dosage": '盒' ,
         }
         ]}
  });*/
  get('/drugs', params, cb);
}