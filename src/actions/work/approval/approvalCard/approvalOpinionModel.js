/*
 * @Author: lcj
 * @Date:   2017-08-10 13:12:51
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 10:24:04
 */

'use strict';
import {
	replyApproval
} from '../../../../utils/interface.js'
import {
	message
} from 'antd'

export const onApprovalOpinionModelSwitchVisibleActionCreater = function(visible) {
	return {
		type: 'APPROVAL_OPINION_MODEL_VISIBLE_SWITCH',
		payload: {
			visible: visible
		}
	}
}

export const changeApprovalOpinionStateActionCreater = function(state) {
	return {
		type: 'APPROVAL_OPINION_MODEL_STATE_CHANGE',
		payload: {
			state: state
		}
	}
}

export const changeApprovalOpinionApprovalIdActionCreater = function(approvalId) {
	return {
		type: 'APPROVAL_OPINION_MODEL_APPROVAL_ID_CHANGE',
		payload: {
			approvalId: approvalId
		}
	}
}

export const confirmOpinionActionCreater = function(params, func) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code = GLOBALSUCCESS) {
				//初始化审核意见model
				dispatch(onApprovalOpinionModelSwitchVisibleActionCreater(false))
				dispatch(changeApprovalOpinionStateActionCreater(null))
				dispatch(changeApprovalOpinionApprovalIdActionCreater(null))
				func();
				message.success("审核成功!")
			}
		}
		replyApproval(params, cb)
	}
}