/*
 * @Author: lcj
 * @Date:   2017-09-05 16:32:04
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-05 16:43:19
 * @Descriptions: 
 */

'use strict';

import React from 'react'
import {
	formatDate
} from '../../../../../utils/common.js'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px',
		flexDirection: 'column'
	},
	records: {
		marginBottom: '5px',
		display: 'flex'
	},
	recordsSpan: {
		flex: 1
	}
}

export class ApprovalRecord extends React.Component {

	renderStepRecords(steps) {
		return steps.map((step, i) => {
			if (step.approval_record_status < 2)
				return false;
			return (
				<p key={i} style={styles.records}>
					<span style={styles.recordsSpan}>{formatDate(step.approval_create_time)}</span>
					<span style={styles.recordsSpan}><p>{step.applicant}</p></span>
					<span style={styles.recordsSpan}>{['同意','拒绝'][step.approval_record_status-2]}</span>
					<span style={Object.assign({},styles.recordsSpan,{flex:3})}>{['备注：','拒绝原因：'][step.approval_record_status-2]+step.approval_record_remark}</span>
				</p>
			)
		})
	}

	render() {
		return (
			<div style={Object.assign({},styles.dataContainer,{margin:0})}>
				<p style={{marginBottom:'5px'}}>审批记录：</p>
				<div style={{flex:1}}>
					{this.renderStepRecords(this.props.data.approval_step)}
				</div>
			</div>
		)
	}
}

export default ApprovalRecord