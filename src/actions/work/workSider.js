/*
 * @Author: lcj
 * @Date:   2017-08-09 16:05:44
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 16:27:39
 */

'use strict';

export const onCollapsedActionCreater = function(collapsed) {
	return {
		type: 'WORK_SIDER_ON_COLLAPSED',
		payload: {
			collapsed: collapsed
		}
	}
}