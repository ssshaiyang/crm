/*
 * @Author: lcj
 * @Date:   2017-08-10 09:10:46
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 09:22:05
 */

'use strict';

export const typeActionCreater = function(type) {
	return {
		type: 'TOP_STATE_BAR_CHANGE_TYPE',
		payload: {
			approvalType: type
		}
	}
}