/*
* @Author: Administrator
* @Date:   2017-08-30 20:42:48
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 21:03:39
*/
export default function salePlanListPage(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_CHECK_LIST_PAGINATION_INIT':
			newState = {
				page: 1,
				limit: 5,
				totalCount: 0,
			}
			break;
	    case 'SALE_CHECK_LIST_INIT_DRUG_ID':
		    newState = {
				page: 1,
				limit: 5,
				totalCount: 0,
				drugId:''
			}
			break;		
		case 'SALE_CHECK_LIST_PAGINATION_SET_PAGINATION':
			newState.limit = action.payload.limit;
			newState.page = action.payload.page;
			break;
		case 'SALE_LIST_PAGINATION_SET_TOTALCOUNT':
			newState.totalCount = action.payload.totalCount;
			break;
		case 'SALE_CHECK_LIST_DRUG_ID':
		     newState.drugId=action.payload.durgId
		    break; 

	}
	return newState;
}       