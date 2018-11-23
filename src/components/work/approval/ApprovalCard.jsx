/*
 * @Author: lcj
 * @Date:   2017-08-07 15:11:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 11:16:07
 */

'use strict';
import React from 'react'
import {
	Card
} from 'antd'
import CardTitle from './approvalCard/CardTitle.jsx'
import ApprovalProcess from './approvalCard/ApprovalProcess.jsx'
import ApprovalRecord from './approvalCard/ApprovalRecord.jsx'
import ApprovalOpinion from './approvalCard/ApprovalOpinion.jsx'
import Order from './approvalCard/Order.jsx'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px'
	},
	card: {
		marginTop: '14px'
	}
}

export class ApprovalCard extends React.Component {

	render() {
		let title = <CardTitle data={this.props.data} />
		return (
			<Card style={styles.card} title={title}>
				{/*<p style={Object.assign({},styles.dataContainer,{margin:0})}>
					审批内容：{this.props.data.approval_content}
				</p>*/}
				<p style={styles.dataContainer}>
					关联表单：
					<Order id={this.props.data.relate_detail_id}>
						{this.props.data.relate_form_name}
					</Order>
				</p>
				<ApprovalProcess data={this.props.data}/>
				<ApprovalRecord data={this.props.data}/>
				<ApprovalOpinion type={this.props.type} approvalId={this.props.data.approval_id}/>
			</Card>
		)
	}
}

export default ApprovalCard;