/*
 * @Author: lcj
 * @Date:   2017-08-22 13:11:57
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-22 13:27:47
 * @Descriptions: 
 */

export default function customerDataReview(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CUSTOMER_DATA_REVIEW_GET_DATA':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}