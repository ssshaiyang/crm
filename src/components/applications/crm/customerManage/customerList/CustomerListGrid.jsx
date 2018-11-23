/*
 * @Author: lcj
 * @Date:   2017-08-23 09:25:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 13:27:03
 * @Descriptions: 
 */

import Grid from '../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import ProductWanttedRender from './customerListGrid/ProductWanttedRender.jsx'
import VisitRecordRender from './customerListGrid/VisitRecordRender.jsx'
import ActionRender from './customerListGrid/ActionRender.jsx'
import CustomerPhaseRender from './customerListGrid/CustomerPhaseRender.jsx'

const column = {
	'customer_id': '客户ID',
	'customer_name': '姓名',
	'customer_type': '类型',
	'customer_phone': '联系方式',
	'customer_stage': {
		headerName: '客情阶段',
		cellRendererFramework: CustomerPhaseRender
	},
	'product_wanted': {
		headerName: '产品意向',
		cellRendererFramework: ProductWanttedRender
	},
	'visit_record': {
		headerName: '拜访记录',
		cellRendererFramework: VisitRecordRender
	},
	'action': {
		headerName: '操作',
		cellRendererFramework: ActionRender
	}
}

function mapStateToProps(state) {
	return {
		columnDefs: column,
		rowData: state.customerList.data
	}
}

export default connect(mapStateToProps)(Grid)                       