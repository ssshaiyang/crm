/*
 * @Author: lcj
 * @Date:   2017-08-29 10:57:02
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 14:12:46
 * @Descriptions: 
 */
import moment from 'moment'

export default function addSaleReportModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_SALE_REPORT_MODAL_SWITCH_MODAL':
			newState.visible = action.payload.visible;
			newState.modalType = action.payload.modalType;
			newState.reportType = action.payload.reportType;
			newState.sale_report_id = action.payload.sale_report_id;
			break;
		case 'ADD_SALE_REPORT_MODAL_GET_SALE_PLAN_DATA':
			newState.salePlanData = action.payload.data;
			break;
		case 'ADD_SALE_REPORT_MODAL_GET_VISIT_DATA':
			newState.visitData = action.payload.data;
			break;
		case 'ADD_SALE_REPORT_MODAL_CHANGE_RANGE':
			newState.startTime = action.payload.range[0];
			newState.endTime = action.payload.range[1];
			break;
		case 'ADD_SALE_REPORT_MODAL_CHANGE_FILTER':
			newState.filter = action.payload.filter;
			break;
		case 'ADD_SALE_REPORT_MODAL_CHANGE_REPORT_NAME':
			newState.reportName = action.payload.reportName;
			break;
		case 'ADD_SALE_REPORT_MODAL_CHANGE_REPORT_NOTE':
			newState.reportNote = action.payload.reportNote;
			break;
		case 'ADD_SALE_REPORT_MODAL_CLEAR_MODAL':
			newState = {
				visible: false,
				sale_report_id: undefined,
				//0为添加销售日报,1为修改销售日报
				modalType: 0,
				//1为日报,2为自定义
				reportType: 1,
				startTime: moment(),
				endTime: moment(),
				salePlanData: {},
				visitData: [],
				filter: '',
				reportName: '',
				reportNote: '',
			}
	}
	return newState;
}