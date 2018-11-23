/*
 * @Author: lcj
 * @Date:   2017-08-29 10:20:55
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 10:35:09
 * @Descriptions: 
 */


export const changePaginationActionCreater = function(page, size) {
	return {
		type: 'REPORT_LIST_PAGINATION_CHANGE_STATE',
		payload: {
			page: page,
			limit: size
		}
	}
}

export const initPaginationActionCreater = function() {
	return {
		type: 'REPORT_LIST_PAGINATION_INIT'
	}
}