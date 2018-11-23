/*
 * @Author: lcj
 * @Date:   2017-08-24 15:52:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 14:36:06
 * @Descriptions: 用户管理-批量导入-添加拜访客户modal
 */

import React from 'react'
import {
	Modal,
	Button,
	Input
} from 'antd'
import {
	connect
} from 'react-redux'
import Grid from './addVisitCustomerModal/Grid.jsx'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/addVisitCustomerModal.js'
import {
	addFollowRecordModalActionCreater
} from '../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'

export class AddVisitCustomerModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: ''
		}
	}

	cancelModal() {
		this.props.closeModal()
		this.props.clearModal()
	}

	shouldCompnentUpdate(props) {
		if (!props.visible)
			return true;
		return false;
	}

	componentWillReceiveProps(props) {
		if (props.visible) {
			this.props.getCustomer();
		}
	}

	onSearch() {
		this.props.getCustomer(this.state.filter)
	}

	save() {
		this.props.followRecordGridApi.updateRowData({
			add: this.props.gridApi.getSelectedRows(),
			addIndex: 0
		})
		this.props.addCustomer(this.props.gridApi.getSelectedRows())
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				visible={this.props.visible}
				width={width}
				footer={null}
				onCancel={this.cancelModal.bind(this)}
				key={this.props.visible}
				title="添加拜访用户">
				<div>
					<Input
						style={{width:'180px',marginRight:'20px'}}
						placeholder="输入客户姓名/电话进行查询"
						value={this.state.filter}
						onChange={(e)=>this.setState({filter:e.target.value})}/>
					<Button
						className="mainButton"
						onClick={this.onSearch.bind(this)}>
						查询
					</Button>
				</div>
				<Grid/>
				<div style={{textAlign:'center'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'20px'}}
						onClick={this.cancelModal.bind(this)}>
						取消
					</Button>
					<Button
						className="mainButton"
						onClick={this.save.bind(this)}>
						保存
					</Button>
				</div>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.addVisitCustomerModal.visible,
		// selected: state.addVisitCustomerModal.selected,
		gridApi: state.addVisitCustomerModal.gridApi,
		followRecordGridApi: state.followRecordModal.gridApi
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchModalVisibleActionCreater(false)),
		clearModal: () => dispatch(actionCreater.clearModalActionCreater()),
		getCustomer: (filter) => dispatch(actionCreater.getCustomerListActionCreater(filter)),
		addCustomer: (data) => dispatch(addFollowRecordModalActionCreater(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVisitCustomerModal)