/*
 * @Author: lcj
 * @Date:   2017-08-22 09:31:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-22 09:32:47
 * @Descriptions: 
 */

export const changeSearchInputValue = function(value) {
	return {
		type: 'CUSTOMER_LIST_CARD_EXTRA_CHANGE_SEARCH_INPUT_VALUE',
		payload: {
			searchInputValue: value
		}
	}
}          