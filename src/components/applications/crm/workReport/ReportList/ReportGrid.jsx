/*
 * @Author: lcj
 * @Date:   2017-08-29 09:20:49
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:23:16
 * @Descriptions: 工作汇报-报表列表-列表
 */

import Grid from '../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import {
	formatDate
} from '../../../../../utils/common.js'
import ActionButton from './GridActionButton.jsx'

const columnDefs = {
	"sale_report_id": "序号",
	"sale_report_name": "名称",
	"sale_report_type": "日报",
	"create_time": {
		headerName: "创建时间",
		valueGetter: (params) => formatDate(params.data.create_time, '年', '月', '日', true)
	},
	"sale_report_remark": "备注",
	"update_time": {
		headerName: "最后修改时间",
		valueGetter: (params) => formatDate(params.data.update_time, '年', '月', '日', true)
	},
	"action": {
		headerName: "操作",
		cellRendererFramework: ActionButton
	}
}

function mapStateToProps(state) {
	return {
		rowData: state.workReportReportList.data,
		columnDefs
	}
}

export default connect(mapStateToProps)(Grid)