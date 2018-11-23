/*
 * @Author: lcj
 * @Date:   2017-08-10 11:05:46
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 13:46:09
 */

'use strict';

import React from 'react'
import {
	Steps
} from 'antd'
const Step = Steps.Step
import {
	formatDate
} from '../../../../utils/common.js'
import Name from './Name.jsx'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px'
	}
}

export class ApprovalProcess extends React.Component {

		renderStep(steps) {
				return steps.map((step, i) => {
							let description = step.approval_record_status >= 2 ? <p>{formatDate(step.approval_create_time)}</p> : <p/>;
							return <Step
								key={i}
								status={['wait','process','finish','error'][step.approval_record_status]}
								title={<Name uid={step.applicant_uid} noColor>{step.applicant}</Name>}
								description={description}/>})
		}

	render() {
		return (
			<div style={styles.dataContainer}>
				<p>审批流程：</p>
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