/*
 * @Author: lcj
 * @Date:   2017-08-09 17:35:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 17:54:18
 */

'use strict';

export const onLoginModelSwitchActionCreater = function(visible, id, name) {
	return {
		type: 'COMPANY_LIST_SWITCH_LOGIN_COMPANY_MODEL',
		payload: {
			loginCompanyModelVisible: visible,
			loginCompanyId: id,
			loginCompanyName: name
		}
	}
}