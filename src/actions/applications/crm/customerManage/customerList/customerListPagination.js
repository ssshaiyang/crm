/*
 * @Author: lcj
 * @Date:   2017-08-21 20:21:26
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-21 20:42:51
 * @Descriptions: 
 */

export const initPagination = function() {
	return {
		type: 'CUSTOMER_LIST_PAGINATION_INIT'
	}
}

export const setToTalCount = function(totalCount) {
	return {
		type: 'CUSTOMER_LIST_PAGINATION_SET_TOTALCOUNT',
		payload: {
			totalCount: totalCount
		}
	}
}

export const pageChange = function(page, limit) {
	
	return {
		type: 'CUSTOMER_LIST_PAGINATION_CHANGE_PAGE',
		payload: {
			page: page,
			limit: limit
		}
	}
}