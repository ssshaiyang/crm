/*
 * @Author: lcj
 * @Date:   2017-08-23 14:07:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 15:15:37
 * @Descriptions: 客户管理-客户列表-查看产品意向列表删除按钮组件
 */

import React from 'react'
import {
	Button,
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/productWantedModal.js'
import {
	deleteProductWanted
} from '../../../../../../utils/interface.js'

export class ProductWantedModalGridDeleteButtonRender extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		Modal.confirm({
			content: "是否删除" + this.props.data.drug_name + "产品意向?",
			iconType: null,
			onOk: this.deleteRow.bind(this)
		})
	}

	deleteRow() {
		const rowIndex = this.props.rowIndex;
		const params = {
			drug_id: this.props.data.drug_id,
			customer_id: this.props.customerId,
		}

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.api.updateRowData({
					remove: [this.props.data]
				})
			}
		}
		deleteProductWanted(params, cb.bind(this))
	}

	render() {
		return (
			<Button
				icon='delete'
				className="gridButton"
				onClick={this.handleClick.bind(this)}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		customerId: state.productWantedModal.customerId
	}
}

export default connect(mapStateToProps)(ProductWantedModalGridDeleteButtonRender)