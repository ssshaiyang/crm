/*
* @Author: Administrator
* @Date:   2017-08-30 14:39:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 15:12:50
*/
export const SaleTimeActionCreater = function(range) {
	return {
		type: 'SALE_PRODUCT_TIME',
		payload: {
			startTime: range[0],
			endTime: range[1]
		}
	}
}

/**
 * 设置销售计划列表过滤条件
 * @param {[type]} filter [description]
 */
export const SaleValueActionCreater= function(filter) {
	return {
		type: 'SALE_PRODUCT_VALUE',
		payload: {
			filter: filter    
		}
	}
} 
 // 初始化时间和搜索
export const InitSaleValueTimeActionCreater= function(filter) {
	return {
		type: 'SALE_PRODUCT_VALUETIME_INIT',
	}
} 


 