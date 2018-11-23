/*
 * @Author: lcj
 * @Date:   2017-09-05 16:22:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-06 10:29:13
 * @Descriptions: 
 */


'use strict';

import React from 'react'
import {
	Steps
} from 'antd'
const Step = Steps.Step
import {
	formatDate
} from '../../../../../utils/common.js'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px',
		flexDirection: 'column'
	}
}

export class ApprovalProcess extends React.Component {

	renderStep(steps) {
		return steps.map((step, i) => {
			if (!step)
				return false;
			let description = step.approval_record_status >= 2 ? <p>{formatDate(step.approval_create_time)}</p> : <p/>;
			return <Step
				key={i}
				status={['wait','process','finish','error'][step.approval_record_status]}
				title={<p>{step.applicant}</p>}
				description={description}/>
		})
	}

	render() {
		return (
			<div style={styles.dataContainer}>
				<p style={{marginBottom:'5px'}}>审批流程：</p>
				<div style={{flex:1}}>
					<Steps>
						{this.renderStep(this.props.data.approval_step)}
					</Steps>
				</div>
			</div>
		)
	}

}

export default ApprovalProcess