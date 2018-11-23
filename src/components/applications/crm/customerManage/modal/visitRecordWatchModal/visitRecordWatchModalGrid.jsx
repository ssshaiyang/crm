/*
 * @Author: lcj
 * @Date:   2017-08-23 17:46:43
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 19:11:48
 * @Descriptions: 客户管理-客户列表-查询拜访记录modal
 */

import Grid from '../../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import {
	formatDate
} from '../../../../../../utils/common.js'
import ActionButton from './VisitRecordWatchModalGridRender.jsx'

const columnDefs = {
	"visit_date": {
		headerName: "跟进时间",
		cellRenderer: (rowData) => formatDate(rowData.value)
	},
	"communicate_way": {
		headerName: "沟通方式",
		cellRenderer: (rowData) => (['未拜访', '电话沟通', '上门拜访'][rowData.value])
	},
	"customer_spend": "客情支出",
	"visit_content": "内容",
	"action": {
		headerName: "操作",
		cellRendererFramework: ActionButton
	}
}

function mapStateToProps(state) {
	return {
		rowData: state.visitRecordWatchModal.data,
		columnDefs
	}
}

export default connect(mapStateToProps)(Grid)