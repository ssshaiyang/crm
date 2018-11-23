/*
 * @Author: lcj
 * @Date:   2017-08-25 14:28:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-08-30 11:50:11
 * @Descriptions: 
 */


/**
 * 设置销售计划列表日期范围
 * @param {[type]} range [description]
 */
export const setSalePlanListFilterDateRangeActionCreater = function(range) {
	return {
		type: 'SALE_PLAN_LIST_FILTER_SET_RANGE',
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
export const setSalePlanListFilterFilterActionCreater = function(filter) {
	return {
		type: 'SALE_PLAN_LIST_FILTER_SET_FILTER',
		payload: {
			filter: filter    
		}
	}
}                    