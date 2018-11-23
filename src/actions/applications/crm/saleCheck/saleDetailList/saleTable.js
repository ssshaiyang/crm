/*
* @Author: Administrator
* @Date:   2017-09-01 13:13:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-02 10:02:32
*/
// 周期 医院 销量
 export const SaleTablePeriod = function(val) {
 	console.log('val',val[0])
	return {
		type: 'SALE_PRODUCT_PERIOD',
		payload:{
			start_time:val[0],
			end_time:val[1]
		}
	}
}
export const SaleTableHospital = function(val) {
	return {
		type: 'SALE_PRODUCT_HOSPITAL',
		payload:{
	        hospital:val,
		}
	}
}
export const InitSaleTableHospital = function(val) {
	return {
		type: 'INIT_SALE_PRODUCT_HOSPITAL',
		payload:{
	        hospital:val
		}
	}
}                      