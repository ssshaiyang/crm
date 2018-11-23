/*
 * @Author: lcj
 * @Date:   2017-08-22 09:26:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-22 09:44:03
 * @Descriptions: 
 */

export default function customerListCardExtra(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CUSTOMER_LIST_CARD_EXTRA_CHANGE_SEARCH_INPUT_VALUE':
			newState.searchInputValue = action.payload.searchInputValue;
			break;
	}
	return newState;
}