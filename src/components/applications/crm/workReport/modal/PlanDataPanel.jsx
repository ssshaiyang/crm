/*
 * @Author: lcj
 * @Date:   2017-08-29 12:40:17
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 13:08:01
 * @Descriptions: 工作汇报-添加报表-右上方计划执行数据显示
 */

import React from 'react'
import {
	Col,
	Card
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	formatDate
} from '../../../../../utils/common.js'
import Chart from '../../SalePlan/goalReachedGeneralMap/GeneralMapPieChart.jsx'

export class PlanDataPanel extends React.Component {
	constructor(props) {
		super(props)
	}

	renderCharts() {
		const data = this.props.salePlanData;
		let items = [];
		for (let i = 1; i < 4; i++) {
			items.push(
				<Chart data={data[i]} stage={i-1} key={i-1}/>
			)
		}
		return items;
	}

	render() {
		let startTime = formatDate(this.props.startTime.valueOf(), '年', '月', '日')
		let endTime = formatDate(this.props.endTime.valueOf(), '年', '月', '日')
		return (
			<Col span={16} offset={1}>
				<Card
					title={`${startTime}-${endTime}计划执行任务`}
					noHovering
					style={{height:'320px'}}>
					{this.renderCharts.call(this)}
				</Card>
			</Col>
		)
	}
}

function mapStateToProps(state) {
	return {
		startTime: state.addSaleReportModal.startTime,
		endTime: state.addSaleReportModal.endTime,
		salePlanData: state.addSaleReportModal.salePlanData
	}
}

export default connect(mapStateToProps)(PlanDataPanel)