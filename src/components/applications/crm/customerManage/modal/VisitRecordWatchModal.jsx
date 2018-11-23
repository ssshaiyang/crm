/*
 * @Author: lcj
 * @Date:   2017-08-23 17:23:12
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 09:11:31
 * @Descriptions: 客户管理-客户列表-拜访记录查看modal
 */

import React from 'react'
import {
	Modal,
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/visitRecordWatchModal.js'
import Grid from './visitRecordWatchModal/visitRecordWatchModalGrid.jsx'

export class VisitRecordWatchModal extends React.Component {
	constructor(props) {
		super(props);
	}

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				title={this.props.customerName+"·拜访记录"}
				key={this.props.visible}
				width={width}
				footer={null}
				onCancel={this.cancelModal.bind(this)}
				visible={this.props.visible}>
				<Grid/>
				<div style={{textAlign:'center',marginTop:'10px'}}>
					<Button
						className="cancelButton"
						onClick={this.cancelModal.bind(this)}>
						关闭
					</Button>
				</div>
			</Modal>
		)
	}
}

function mapStateToprops(state) {
	return {
		visible: state.visitRecordWatchModal.visible,
		customerName: state.visitRecordWatchModal.customerName
	}
}

function mapDispatchToprops(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchModalVisibleActionCreater(false)),
		clearModal: () => dispatch(actionCreater.clearModalVisibleActionCreater())
	}
}

export default connect(mapStateToprops, mapDispatchToprops)(VisitRecordWatchModal)