/*
 * @Author: lcj
 * @Date:   2017-08-22 10:09:48
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:05:25
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_CUSTOMER_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			newState.modalType = action.payload.modalType;
			break;
		case 'ADD_CUSTOMER_MODAL_CLEAR_DATA':
			newState = {
				modalType: 0,
				current: 0,
				drugDatas: [],
				drugSelecteds: {},
				data: {
					customer_type: '1',
					customer_stage: '1',
					customer_name: undefined,
					customer_phone: undefined,
					customer_webchat: undefined,
					customer_email: undefined,
					hospital_id: '',
					hospital_department: '',
					department_leader: undefined,
					hospital_address: undefined,
					durg_ids: undefined
				},
				hospitalOptions: [],
				hospitalDepartmentOptions: []
			}
			break;
		case 'ADD_CUSTOMER_MODAL_COMPLETE_CUSTOMER_INF':
			newState.data[action.payload.key] = action.payload.value;
			break;
		case 'ADD_CUSTOMER_MODAL_GET_HOSPITAL_OPTIONS':
			newState.hospitalOptions = action.payload.hospitalOptions;
			break;
		case 'ADD_CUSTOMER_MODAL_GET_HOSPITAL_DEPARTMENT_OPTIONS':
			newState.hospitalDepartmentOptions = action.payload.hospitalDepartmentOptions;
			break;
		case 'ADD_CUSTOMER_MODAL_CHENGE_STEP':
			newState.current = action.payload.current;
			break;
		case 'ADD_CUSTOMER_MODAL_UPDATE_DRUG_DATAS':
			newState.drugDatas = action.payload.drugDatas;
			break;
		case 'ADD_CUSTOMER_MODAL_ADD_INTENTION_DRUG':
			newState.drugSelecteds[action.payload.drug.drug_id] = action.payload.drug.drug_name;
			break;
		case 'ADD_CUSTOMER_MODAL_DELETE_INTENTION_DRUG':
			delete newState.drugSelecteds[action.payload.drug.drug_id];
			break;
		case 'ADD_SUCTOMER_MODAL_SET_FORM_DATA':
			newState.customer_id = action.payload.customer_id;
			newState.data = action.payload.data;
			newState.drugSelecteds = {};
			action.payload.data.drugs.map(
				drug => newState.drugSelecteds[drug.drug_id] = drug.drug_name
			)
			newState.api = action.payload.api;
			break;
		case 'ADD_CUSTOMER_MODAL_SET_GRID_API':
			newState.stepTwoGridApi = action.payload.stepTwoGridApi;
			break;
	}
	return newState;
}