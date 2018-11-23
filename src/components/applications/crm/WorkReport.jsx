/*
 * @Author: lcj
 * @Date:   2017-08-26 13:46:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 09:19:25
 * @Descriptions: 工作汇报
 */

import React from 'react'
import DataCard from './workReport/WorkReportDataCard.jsx'
import ReportList from './workReport/ReportList.jsx'

export class WorkReport extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<DataCard/>
				<ReportList/>
			</div>
		)
	}
}

export default WorkReport