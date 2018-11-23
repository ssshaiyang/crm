/*
 * @Author: lcj
 * @Date:   2017-08-10 11:26:07
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 15:50:23
 */

'use strict';

import React from 'react'
import {
	Modal,
	Form,
	Input,
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/work/approval/approvalCard/approvalOpinionModel.js'

let styles = {
	yesButton: {
		background: '#02d9b8',
		color: 'white',
		margin: "0 10px"
	},
	noButton: {
		background: '#d4d5d7',
		color: '#838584'
	}
}

export class ApprovalOpinionModel extends React.Component {

	constructor(props) {
		super(props)
	}

	handleSubmit(e) {
		e.preventDefault();

		function cb() {
			this.props.refreshApprovals();
			this.props.form.resetFields();
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let params = {
					approval_status: this.props.state ? 2 : 3,
					approval_record_remark: values.approval_record_remark || "",
					approval_id: this.props.approvalId
				}
				this.props.confirmOpinion(params, cb.bind(this))
			}
		});
	}

	onCancel() {
		this.props.closeOpinionModel()
		this.props.changeOpinionModelState(null)
		this.props.changeOpinionModelApprovalid(null)
		this.props.form.resetFields();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		let rules = !this.props.state ? [{
			required: this.props.state === 0,
			message: '请填写拒绝原因!'
		}] : [];
		return (
			<Modal
				title={this.props.state===1?"备注":"请填写拒绝原因"}
				visible={this.props.visible}
				onCancel={this.onCancel.bind(this)}
				closable={false}
				key={this.props.approval_id}
				footer={null}>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<Form.Item>
			            {getFieldDecorator('approval_record_remark', {
			            	rules: rules,
			          	})(
			            <Input.TextArea />
			          	)}
			        </Form.Item>
			        <Form.Item style={{textAlign:'right'}}>
			        	<Button htmlType='submit' style={Object.assign({},styles.yesButton,{margin:'0 10px 0 0'})}>
			        		确认
			        	</Button>
			        	<Button style={styles.noButton} onClick={this.onCancel.bind(this)}>
			        		取消
			        	</Button>
			        </Form.Item>
				</Form>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.approvalOpinionModel.visible,
		state: state.approvalOpinionModel.state,
		approvalId: state.approvalOpinionModel.approvalId
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeOpinionModel:
			() => dispatch(actionCreater.onApprovalOpinionModelSwitchVisibleActionCreater(false)),
		changeOpinionModelState:
			(state) => dispatch(actionCreater.changeApprovalOpinionStateActionCreater(state)),
		changeOpinionModelApprovalid:
			(approvalId) => dispatch(actionCreater.changeApprovalOpinionApprovalIdActionCreater(approvalId)),
		confirmOpinion:
			(params, cb) => dispatch(actionCreater.confirmOpinionActionCreater(params, cb))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ApprovalOpinionModel))