/*
 * @Author: lcj
 * @Date:   2017-08-25 09:16:48
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 15:04:10
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'GENERAL_MAP_SET_TIME_RANGE':
			newState.startTime = action.payload.startTime;
			newState.endTime = action.payload.endTime;
			break;
		case 'GENERAL_MAP_GET_DATA':
			let data = action.payload.data;
			newState.newCustomerData = data[1];
			newState.phoneCustomerData = data[2];
			newState.onSiteCustomerDate = data[3];
	}
	return newState;
}