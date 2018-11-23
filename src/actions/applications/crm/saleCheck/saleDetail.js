/*
* @Author: Administrator
* @Date:   2017-08-30 15:43:30
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 14:06:42
*/
import {
	getProductSaleList
} from '../../../../utils/interface.js'
import {
	exportDate
} from '../../../../utils/common.js'

         
export const getSaleProductListActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'GET_SALE_CHECK_PRODUCT_LIST',
					payload: {
						data: res.data.data
					}
				}
				let setToTalCountAction = {
					type: 'SALE_LIST_PAGINATION_SET_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				}
				let total=0;
				for(let i=0;i<res.data.data.length;i++){
                     total+=Number(res.data.data[i].sale_amount)
				}
				console.log(total)
				console.log("getSaleProductListActionCreater")
				let SaleTableSaleCount = {
					type: 'SALE_PRODUCT_SALECOUNT',
					payload:{
	                    saleCount:total
		            }
				}
				dispatch(action)
				dispatch(setToTalCountAction)
				dispatch(SaleTableSaleCount)
			}
			console.log(res)
		}
		const state = getState();
         
		
		let selfParams = {
			hospital_name: params.filter || state.saleProductTime.filter,//传入的参数或者store里面的
			start_time: exportDate(params.startTime || state.saleProductTime.startTime),
			end_time: exportDate(params.endTime || state.saleProductTime.endTime),
			page: params.page || state.saleProductPage.page,
			limit: params.limit || state.saleProductPage.limit,
			drug_id:params.drugId || state.saleProductPage.drugId
		}
		console.log(selfParams)
		getProductSaleList(selfParams, cb)
	}
}
