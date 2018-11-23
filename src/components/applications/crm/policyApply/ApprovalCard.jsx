/*
 * @Author: lcj
 * @Date:   2017-09-05 16:17:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-05 18:27:53
 * @Descriptions: 申请详情页
 */

import React from 'react'
import {
	Input,
	Form
} from 'antd'
import ApprovalProcess from './approvalCard/ApprovalProcess.jsx'
import ApprovalRecord from './approvalCard/ApprovalRecord.jsx'

export default class ApprovalCard extends React.Component {
	constructor(props) {
		super(props)
	}

	renderNote() {
		return (
			<Form>
				<Form.Item
					validateStatus={this.props.error?'error':'validating'}
					help={this.props.help}>
					<p style={{margin:'10px 0 5px',fontSize:'14px'}}>审批备注:</p>
					<Input.TextArea onChange={(e)=>this.props.changeNote(e.target.value)} />
				</Form.Item>
			</Form>
		)
	}

	render() {
		return (
			<div>
				<ApprovalProcess data={{approval_step:this.props.data}}/>
				<ApprovalRecord data={{approval_step:this.props.data}}/>
				{this.props.approvalable?this.renderNote.call(this):false}
			</div>
		)
	}
}