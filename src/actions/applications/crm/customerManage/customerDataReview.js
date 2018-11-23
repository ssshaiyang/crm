/*
 * @Author: lcj
 * @Date:   2017-08-22 13:16:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 19:05:18
 * @Descriptions: 
 */

import {
	getCustomerData
} from '../../../../utils/interface.js'

/**
 * 获取客情数据
 * @return {[type]} [description]
 */
export const getCustomerDataActionCreater = function() {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let data = res.data.map(item => ({
					stageId: item.data_id,
					stageName: item.customer_stage_name,
					stageNumber: item.stage_count
				}))
				let action = {
					type: 'CUSTOMER_DATA_REVIEW_GET_DATA',
					payload: {
						data: data
					}
				}
				dispatch(action)
			}
		}
		getCustomerData(null, cb);
	}
}