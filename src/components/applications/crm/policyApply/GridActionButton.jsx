/*
 * @Author: lcj
 * @Date:   2017-08-29 17:08:46
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 13:52:21
 * @Descriptions: 政策申请-操作按钮
 */

import React from 'react'
import {
	Button,
	Modal,
	message
} from 'antd'
import ApprovalCard from './ApprovalCard.jsx'
import {
	replyApproval
} from '../../../../utils/interface.js'

const width = window.screen.availWidth > 1000 ? 800 : '100%';

function getID(props) {
	let key = ['policy_apply_id', 'material_apply_id', 'meeting_apply_id', 'expense_apply_id']
	for (let i in key) {
		if (props.data[key[i]] !== undefined)
			return props.data[key[i]]
	}
}

function getStatus(props) {
	let key = ['policy_apply_status', 'material_request_status', 'meeting_apply_status', 'expense_apply_status']
	for (let i in key) {
		if (props.data[key[i]] !== undefined)
			return props.data[key[i]]
	}
}

export default class GridActionButton extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			note: '',
			id: getID(props),
			status: getStatus(props)
		}
		this.watch = this.watch.bind(this)
		this.approval = this.approval.bind(this)
		this.edit = this.edit.bind(this)
		this.submit = this.submit.bind(this)
	}

	//编辑
	edit(modalType = 1) {
		const that = this.props.that;
		const data = this.props.data;
		if (this.props.edit) {
			this.props.edit();
		} else {
			that.setState({
				visible: ture
			})
		}
		that.setState({
			modalType: modalType,
			data: data
		})
	}

	//审批
	handleApproval(closeFunc, status = 1) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					note: ''
				})
				message.success('审核成功!')
				closeFunc();
			}
		}
		if (typeof closeFunc === 'object')
			return false;
		if (status === 2 && this.state.note == '') {
			message.error('备注不可为空!')
			return false;
		}
		const params = {
			approval_id: this.state.id,
			approval_status: status ? 2 : 3,
			approval_record_remark: this.state.note
		}
		replyApproval(params, cb.bind(this))
		return false;
	}

	//审批审批单
	approval() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				Modal.confirm({
					title: '查看',
					width: width,
					iconType: null,
					cancelText: '拒绝',
					okText: '同意',
					content: <ApprovalCard
						data={res.data}
						approvalable
						note={this.props.note}
						changeNote={(note)=>this.setState({note:note,error:false,help:''})}/>,
					onOk: (cb) => this.handleApproval.call(this, cb, 1),
					onCancel: (cb) => this.handleApproval.call(this, cb, 2)
				})
			}
		}
		let params = {
			id: this.state.id
		}
		this.props.getDetail(params, cb.bind(this))
	}

	//查看审批流程信息
	watch() {
		function cb(res) {
			console.log(res)
			if (res.error_code === GLOBALSUCCESS) {
				console.log("watch")
				Modal.info({
					title: '查看',
					width: width,
					iconType: tool,
					okText: '关闭',
					content: <ApprovalCard data={res.data}/>
				})
			}
		}
		let params = {
			id: this.state.id
		}
		this.props.getDetail(params, cb.bind(this))
	}

	//提交审批
	submit() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success('提交成功!');
				this.props.getList();
			}
		}
		let params = {
			id: this.state.id
		}
		Modal.confirm({
			title: '提交申请',
			width: width,
			iconType: to-top,
			okText: '确认',
			cancelText: '取消',
			content: '提交审批后无法进行编辑与撤回，确认提交吗?',
			onOk: () => this.props.submit(params, cb.bind(this))
		})
	}

	render() {
		const data = this.props.data;
		//审核类型
		const type = data.approval_types;
		//申请状态
		const status = this.state.status;
		let Component = WatchButton;
		if (type == 2 && status == 1)
			Component = ApprovalButton
		if (type == 1 && status == 0)
			Component = EnsureApplyButton
		if (type == 1 && status == 3)
			Component = ReSureApplyButton
		return (
			<div>
				{Component?
					<Component
						watch={this.watch.bind(this)}
						approval={this.approval.bind(this)}
						edit={this.edit.bind(this)}
						submit={this.submit.bind(this)}/>
					:false}
			</div>
		)
	}
}

//审批按钮
class ApprovalButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button icon='Examination' className="gridButton" onClick={this.props.approval}/>
		)
	}
}

//待送审的我的申请
class EnsureApplyButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Button icon='modify' className="gridButton" onClick={()=>this.props.edit(1)}/>
				<Button icon='tijiao' className="gridButton" onClick={this.props.submit}/>
			</div>
		)
	}
}


//已拒绝的我的申请

class ReSureApplyButton extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Button icon="See" className="gridButton" onClick={this.props.watch}/>
				<Button icon="modify" className="gridButton" onClick={()=>this.props.edit(2)}/>
			</div>
		)
	}
}

//其他(仅查看)
class WatchButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Button icon="cloud" className="gridButton" onClick={this.props.watch}/>
			</div>
		)
	}
}