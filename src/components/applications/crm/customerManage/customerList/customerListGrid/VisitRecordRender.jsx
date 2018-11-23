/*
 * @Author: lcj
 * @Date:   2017-08-23 15:25:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:35:50
 * @Descriptions: 客户管理-客户列表表单-拜访记录组件
 */

import React from 'react'
import {
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/visitRecordModal.js'
import * as watchActionCreater from '../../../../../../actions/applications/crm/customerManage/modal/visitRecordWatchModal.js'

export class VisitRecordRender extends React.Component {
	constructor(props) {
		super(props);
	}

	addRecord() {
		const customerId = this.props.data.customer_id;
		this.props.initWatchModal(customerId, '');
		this.props.openModel();
	}

	editRecord() {
		const customerId = this.props.data.customer_id;
		const customerName = this.props.data.customer_name;
		this.props.initWatchModal(customerId, customerName);
		this.props.openWatchModel();
	}

	render() {
		return (
			<div>
				<Button
					icon="ellipsis"
					className="gridButton"
					style={{marginRight:'10px'}}
					onClick={this.editRecord.bind(this)}/>
				<Button
					icon="plus"
					className="gridButton"
					onClick={this.addRecord.bind(this)}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModel: () => dispatch(actionCreater.switchVisitRecordModalVisibleActionCreater(true)),
		openWatchModel: () => dispatch(watchActionCreater.switchModalVisibleActionCreater(true)),
		initWatchModal: (customerId, customerName) => dispatch(watchActionCreater.initModalActionCreate(customerId, customerName))
	}
}

export default connect(undefined, mapDispatchToProps)(VisitRecordRender)