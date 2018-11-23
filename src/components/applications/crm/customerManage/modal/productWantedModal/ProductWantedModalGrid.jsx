/*
 * @Author: lcj
 * @Date:   2017-08-23 13:29:48
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 14:30:04
 * @Descriptions: 客户管理-产品意向modal-表单组件
 */

import Grid from '../../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import DeleteButton from './ProductWantedModalGridDeleteButtonRender.jsx'

const columnDefs = {
	"drug_id": "产品ID",
	"drug_name": "产品名称",
	"specifications": "产品规格",
	"dosage": "产品剂型",
	"manufacture_enterprise": "生成企业",
	"action": {
		headerName: '操作',
		cellRendererFramework: DeleteButton
	}
}

function mapStateToProps(state) {
	return {
		rowData: state.productWantedModal.data,
		columnDefs
	}
}

export default connect(mapStateToProps)(Grid)