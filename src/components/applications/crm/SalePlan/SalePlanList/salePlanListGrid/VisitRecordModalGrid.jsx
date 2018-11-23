/*
 * @Author: lcj
 * @Date:   2017-08-25 17:24:21
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 17:32:32
 * @Descriptions: 销售计划-销售列表-拜访方式
 */

import Grid from '../../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'

const columnDefs = {
	"customer_name": "拜访对象",
	"communicate_way": {
		headerName: "拜访方式",
		valueGetter: (params) => ['未拜访', '电话拜访', '上门拜访'][params.data.communicate_way]
	},
	"customer_spend": "客情支出",
	"visit_content": "拜访记录",
}

function mapStateToprops(state) {
	return {
		rowData: state.salePlanListVisitRecordModal.data,
		columnDefs
	}
}

export default connect(mapStateToprops)(Grid)