/*
 * @Author: lcj
 * @Date:   2017-08-09 14:28:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 14:33:27
 */

'use strict';

export const topMenuSelectedCreater = function(key) {
	console.log("key",key)
	return {
		type: 'CHANGE_TOP_PAGE',
		payload: {
			selected: key
		}
	}
}