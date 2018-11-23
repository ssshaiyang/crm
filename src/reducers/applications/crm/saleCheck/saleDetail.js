/*
* @Author: Administrator
* @Date:   2017-08-30 15:44:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-31 10:50:20
*/
export default function redeceName(state, action) {

	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'GET_SALE_CHECK_PRODUCT_LIST':
			newState.data = action.payload.data;
			break;
	   	
	}
	return newState;
}           