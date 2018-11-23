/*
 * @Author: lcj
 * @Date:   2017-08-24 13:33:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 18:06:10
 * @Descriptions: 客户管理-批量导入-跟进记录表单
 */

import Grid from '../../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import CommunicateWayRender from './CommunicateWayRender.jsx'
import CustomerSpendRender from './CustomerSpendRender.jsx'
import VisitContentRender from './VisitContentRender.jsx'
import {
	exportGridApiActionCreater
} from '../../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'

const columnDefs = {
	"customer_name": "拜访对象",
	"communicate_way": {
		headerName: '拜访方式',
		cellRendererFramework: CommunicateWayRender
	},
	"customer_spend": {
		headerName: "客情支出",
		cellRendererFramework: CustomerSpendRender
	},
	"visit_content": {
		headerName: "拜访记录",
		cellRendererFramework: VisitContentRender
	}
}

function componentDidMount(that) {
	const gridApi = that.gridApi;
	this.dispatch(exportGridApiActionCreater(gridApi))
}

function mapStateToProps(state) {
	return {
		containerStyle: {
			margin: '10px 0'
		},
		rowData: state.followRecordModal.visitCustomers,
		columnDefs,
		componentDidMount: componentDidMount
	}
}

export default connect(mapStateToProps)(Grid)