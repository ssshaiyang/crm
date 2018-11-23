/*
 * @Author: lcj
 * @Date:   2017-08-10 10:00:54
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:16:25
 */

'use strict';

export const changePageInfActionCreater = function(page, pageSize) {
	return ({
		type: 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_LIMIT_AND_PAGE',
		payload: {
			limit: pageSize,
			page: page
		}
	})
}

export const changePageTotalActionCreater = function(totalCount) {
	return {
		type: 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_TOTALCOUNT',
		payload: {
			totalCount: totalCount
		}
	}
}