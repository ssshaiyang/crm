/*
 * @Author: lcj
 * @Date:   2017-08-24 16:02:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:52:42
 * @Descriptions: 添加拜访用户-表单
 */

import Grid from '../../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addVisitCustomerModal.js'

const columnDefs = {
	"customer_name": {
		headerName: "客户姓名",
		cellStyle: {
			'text-align': 'left',
		},
		headerCheckboxSelection: true,
		checkboxSelection: true
	},
	"customer_type": "客户类型",
	"customer_phone": "联系方式"
}

function selectionChaged() {
	const selections = this.gridApi.getSelectedRows()
	this.props.addCustomerSelected(selections)
}

function componentDidMount(that) {
	this.addGridApi(that.gridApi)
}

function mapStateToProps(state) {
	return {
		containerStyle: {
			margin: '10px 0'
		},
		columnDefs,
		gridOptions: {
			rowSelection: 'multiple',
			suppressRowClickSelection: true,
		},
		onSelectionChanged: selectionChaged,
		rowData: state.addVisitCustomerModal.data,
		componentDidMount: componentDidMount
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addCustomerSelected: (data) => dispatch(actionCreater.addCustomerSelectActionCreater(data)),
		addGridApi: (gridApi) => dispatch(actionCreater.addGridApiActionCreater(gridApi))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)