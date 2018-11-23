/*
 * @Author: lcj
 * @Date:   2017-08-22 10:09:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 14:48:31
 * @Descriptions: 
 */

export default {
	visible: false,
	//0为添加用户,1为修改用户
	modalType: 0,
	//当前执行的步数
	current: 0,
	drugDatas: [],
	drugSelecteds: {},
	customer_id: '',
	api: undefined,
	stepTwoGridApi: undefined,
	data: {
		customer_type: '',
		customer_stage: '',
		customer_name: undefined,
		customer_phone: undefined,
		customer_webchat: undefined,
		customer_email: undefined,
		hospital_id: '',
		hospital_department: '',
		department_leader: undefined,
		hospital_address: undefined,
		drug_ids: undefined
	},
	hospitalOptions: [],
	hospitalDepartmentOptions: []
}