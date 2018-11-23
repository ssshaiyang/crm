/*
 * @Author: lcj
 * @Date:   2017-08-23 18:15:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 12:45:13
 * @Descriptions: 客户管理-拜访记录-操作
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
import {
	deleteCustomerVisitRecord
} from '../../../../../../utils/interface.js'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/visitRecordModal.js'

export class Render extends React.Component {
	constructor(props) {
		super(props);
	}

	deleteRecord() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success("删除成功!")
				this.props.api.updateRowData({
					remove: [this.props.data]
				})
			}
		}
		let params = {
			customer_id: this.props.customerId,
			visit_record_id: this.props.data.visit_record_id
		}
		Modal.confirm({
			title: '删除拜访记录',
			content: '正在删除拜访记录,请确认',
			iconType: null,
			onOk: () => deleteCustomerVisitRecord(params, cb.bind(this))
		})
	}

	updateRecord() {
		this.props.updateEditModal(this.props.data, this.props);
		this.props.openEditModal();
	}

	render() {
		return (
			<div>
				<Button
					icon="edit"
					className="gridButton"
					onClick={this.updateRecord.bind(this)}
					style={{marginRight:'20px'}}/>
				<Button
					icon="lajitong"
					className="gridButton"
					onClick={this.deleteRecord.bind(this)}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		customerId: state.visitRecordWatchModal.customerId
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openEditModal: () => dispatch(actionCreater.switchVisitRecordModalVisibleActionCreater(true, 1)),
		updateEditModal: (data, api) => dispatch(actionCreater.updateModalValuesActionCreater(data, api))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Render)