/*
 * @Author: lcj
 * @Date:   2017-08-10 11:10:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 17:23:51
 */

'use strict';

import React from 'react'
import {
	formatDate
} from '../../../../utils/common.js'
import Name from './Name.jsx'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px'
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
			var  checknum = 0;
            if(!isNaN(step.approval_record_status)){
                checknum =step.approval_record_status;
            }
			if (checknum < 2){
                    return false;
			}
			return (
				<p key={i} style={styles.records}>
					<span style={styles.recordsSpan}>{formatDate(step.approval_create_time)}</span>
					<span style={styles.recordsSpan}>{steps[i].employee_name}</span>
					<span style={styles.recordsSpan}>{['同意','拒绝'][step.approval_record_status-2]}</span>
                    <span style={Object.assign({},styles.recordsSpan,{flex:3})}>{['备注：','备注：','备注：','拒绝原因：','备注：'][checknum]+step.approval_record_remark}</span>
				</p>
			)
		})
	}

	render() {
		return (
			<div style={Object.assign({},styles.dataContainer,{margin:0})}>
				<p>审批记录：</p>
				<div style={{flex:1}}>
					{this.renderStepRecords(this.props.data.approval_step)}
				</div>
			</div>
		)
	}
}

export default ApprovalRecord