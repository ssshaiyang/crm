import {
	getMeetingDetail
} from '../../../../utils/interface.js'

export const getSaleSupportDetail = function(meeting_apply_id) {
	return (dispatch) => {
		console.log(meeting_apply_id)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_MODAL_SALESUPPORT_FORM_GET_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			id:meeting_apply_id
		}
		getMeetingDetail(params, cb)
	}
}