/*
* @Author: Administrator
* @Date:   2017-08-30 20:42:14
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 10:27:17
*/
/**
 * 初始化分页
 * @return {[type]} [description]
 */
export const initSaleCheckListPagination = function() {
	return {
		type: 'SALE_CHECK_LIST_PAGINATION_INIT'
	}
}

/**
 * 更新分页组件的page/limit
 * @param {[type]} page [description]
 * @param {[type]} size [description]
 */
export const setSaleCheckListPagination = function(page, size) {
	return {
		type: 'SALE_CHECK_LIST_PAGINATION_SET_PAGINATION',
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
export const setSaleCheckListPaginationTotalCount = function(totalCount) {
	return {
		type: 'SALE_CHECK_LIST_LAGINATION_SET_TOTALCOUNT',
		payload: {
			totalCount: totalCount
		}
	}
} 
// 产品的ID

export const setSaleCheckListDrugId = function(id) {
	return {
		type: 'SALE_CHECK_LIST_DRUG_ID',
		payload: {
			durgId: id
		}
	}
} 
//初始化产品的ID

/*export const setSaleCheckInitListDrugId = function(id) {
	return {
		type: 'SALE_CHECK_LIST_INIT_DRUG_ID',
	}
} */