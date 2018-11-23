/*
 * @Author: lcj
 * @Date:   2017-08-22 17:10:43
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 14:56:05
 * @Descriptions: 添加客户-第二步-表单
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
import Grid from '../../../../../common/Grid.jsx'
import ActionButton from './GridActionButtonRender.jsx'

const columnDefs = {
	"drug_id": "产品ID",
	"drug_name": "产品名称",
	"specification": "产品规格",
	"dosage": '产品剂型',
	"manufacturer_name": "生产企业",
	"actions": {
		headerName: "操作",
		field: 'actions',
		cellRendererFramework: ActionButton
	}
}

function mapStateToProps(state) {
	return {
		rowData: state.addCustomerModal.drugDatas,
		columnDefs: columnDefs,
		containerStyle: {
			margin: '0 0 10px 0'
		},
		selection: true,
		componentDidMount: (that) => {
			that.props.getApi(that.gridApi)
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getApi: (api) => dispatch(actionCreater.getStepTwoGridApiActionCreater(api))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)