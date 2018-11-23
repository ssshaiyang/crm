/*
 * @Author: lcj
 * @Date:   2017-08-23 09:31:09
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 09:52:06
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CUSTOMER_LIST_REFRESH_LIST':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}