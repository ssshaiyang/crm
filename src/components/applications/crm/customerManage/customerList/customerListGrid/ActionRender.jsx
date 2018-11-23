/*
 * @Author: lcj
 * @Date:   2017-08-23 20:12:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:32:29
 * @Descriptions: 客户管理-客户列表-操作render
 */

import React from 'react'
import {
	Button,
	Modal,
	message
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
import {
	deleteCustomerDetail
} from '../../../../../../utils/interface.js'

export class Render extends React.Component {
	constructor(props) {
		super(props);
	}

	/*componentWillMount(){
		this.props
	}*/

	deleteCustom() {
		Modal.confirm({
			content: "是否删除客户?",
			onOk: () => {
				deleteCustomerDetail({
					customer_id: this.props.data.customer_id
				}, () => {
					this.props.api.updateRowData({
						remove: [this.props.data]
					})
					message.success("删除成功!")

				})
			},
			iconType: null
		})

	}

	editCustom() {
		const customer_id = this.props.data.customer_id;
		this.props.getModalData(customer_id, this.props)
		this.props.openModal();
	}

	render() {
		return (
			<div>
				<Button
					icon="edit"
					className="gridButton"
					style={{marginRight:'10px'}}
					onClick={this.editCustom.bind(this)}/>
				<Button
					icon="delete"
					className="gridButton"
					onClick={this.deleteCustom.bind(this)}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: () => dispatch(actionCreater.openAddCustomerModel(1)),
		getModalData: (customer_id, api) => dispatch(actionCreater.getCustomerDetailActionCreater(customer_id, api))
	}
}

export default connect(null, mapDispatchToProps)(Render)