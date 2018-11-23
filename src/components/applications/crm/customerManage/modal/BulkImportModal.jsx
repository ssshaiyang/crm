/*
 * @Author: lcj
 * @Date:   2017-08-24 09:34:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 20:35:00
 * @Descriptions: 客户管理-批量导入
 */

import React from 'react'
import {
	Modal,
	Icon
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/bulkImportModal.js'
import {
	switchFollowRecordModalActionCreater
} from '../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'
import {
	switchModalVisibleActionCreater
} from '../../../../../actions/applications/crm/customerManage/modal/importNewUserModal.js'
export class BulkImportModal extends React.Component {
	constructor(props) {
		super(props)
		this.handleFollowClick = this.handleFollowClick.bind(this);
	}

	handleFollowClick() {
		this.props.closeModal();
		this.props.openFollowRecordModal();
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				title="批量导入"
				onCancel={this.props.closeModal}
				footer={null}>
				<div style={{textAlign:'center'}}>
					<HoverButton title="拜访记录" type="jihuaguanli" onClick={this.handleFollowClick}/>
					<HoverButton title="新客户" type="wodekehu" onClick={this.props.openImportModal}/>
				</div>
			</Modal>
		)
	}
}

class HoverButton extends React.Component {
	render() {
		return (
			<div
				className="hoverButton"
				onClick={this.props.onClick}
				style={{width:'150px',display:'inline-block',textAlign:'center',margin:'20px',padding:'20px'}}>
				<Icon type={this.props.type} style={{fontSize:'45px'}}/>
				<p style={{fontSize:'16px',margin:'20px 0 0'}}>{this.props.title}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.bulkImportModal.visible
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchBulkImportModalVisible(false)),
		openFollowRecordModal: () => dispatch(switchFollowRecordModalActionCreater(true)),
		openImportModal: () => dispatch(switchModalVisibleActionCreater(true))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BulkImportModal)