/*
 * @Author: lcj
 * @Date:   2017-08-25 15:57:31
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 16:17:42
 * @Descriptions: 
 */

/**
 * 初始化分页
 * @return {[type]} [description]
 */
export const initSalePlanListPagination = function() {
	return {
		type: 'SALE_PLAN_LIST_PAGINATION_INIT'
	}
}

/**
 * 更新分页组件的page/limit
 * @param {[type]} page [description]
 * @param {[type]} size [description]
 */
export const setSalePlanListPagination = function(page, size) {
	return {
		type: 'SALE_PLAN_LIST_PAGINATION_SET_PAGINATION',
		payload: {
			page: page,
			limit: size
		}
	}
}

/**
 * 设置分页组件的总数
 * @param {[type]} totalCount [description]
 */
export const setSalePlanListPaginationTotalCount = function(totalCount) {
	return {
		type: 'SALE_PLAN_LIST_LAGINATION_SET_TOTALCOUNT',
		payload: {
			totalCount: totalCount
		}
	}
}