/*
 * @Author: lcj
 * @Date:   2017-08-24 19:57:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:59:36
 * @Descriptions: 
 */

export const switchModalVisibleActionCreater = function(visible) {
	return {
		type: 'IMPORT_NEW_USER_MODAL_SWITCH_VISIBLE',
		payload: {
			visible
		}
	}
}