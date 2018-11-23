
'use strict';

import {get,
  post,
  put,
  del
} from './setup.js'

//获取药产品信息
export const getProductSaleList= function(params, cb) {
	// cb(
  //   {
  //   "error_code": 1000,
  //    "data":{
  //      "data": [{
  //             "drug_id": "1",
  //             "drug_name": "白加黑 ",
  //             "hospital_name": "萧山人民医院 ",
  //             "specifications": "500g",
  //             "dosage": '盒' ,
  //             "sale_date": "1436864169",
  //             "sale_amount": "1",
  //              },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "0",
  //             },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "2",
  //             },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "0",
  //             },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "2",
  //             },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "0",
  //             },
  //             {
  //               "drug_id": "2",
  //               "drug_name": "白加黑 ",
  //               "hospital_name": "萧山人民医院 ",
  //               "specifications": "500g",
  //               "dosage": '盒' ,
  //               "sale_date": "1436864169",
  //               "sale_amount": "0",
  //             }
  //            ],
  //      "total_count":7
  //   }
  // }
  //   );
	 get('/sales', params, cb);
}