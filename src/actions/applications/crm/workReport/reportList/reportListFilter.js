/*
 * @Author: lcj
 * @Date:   2017-08-29 09:57:47
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:35:14
 * @Descriptions: 
 */


export const reportListFilterChangeSelect = function(reportType) {
	return {
		type: 'REPORT_LIST_FILTER_CHANGE_SELECT',
		payload: {
			reportType: reportType
		}
	}
}

export const reportListFilterChangeFilter = function(filter) {
	return {
		type: 'REPORT_LIST_FILTER_CHANGE_FILTER',
		payload: {
			filter: filter
		}
	}
}