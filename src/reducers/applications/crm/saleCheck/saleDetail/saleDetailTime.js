/*
* @Author: Administrator
* @Date:   2017-08-30 14:41:49
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-01 17:36:20
*/
import moment from 'moment'
export default function salePlanListFilter(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PRODUCT_TIME':
			newState.startTime = action.payload.startTime;
			newState.endTime = action.payload.endTime;
			break;
		case 'SALE_PRODUCT_VALUE':
			newState.filter = action.payload.filter;
			break;
		case 'SALE_PRODUCT_VALUETIME_INIT':
		    newState={
		    	startTime:moment(new Date()),
	            endTime:moment(new Date()),
	            filter: ''
		    }
	}
	return newState;
}


