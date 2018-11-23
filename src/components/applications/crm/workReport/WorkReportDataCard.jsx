 /*
 * @Author: lcj
 * @Date:   2017-08-25 09:10:53
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:41:48
 * @Descriptions: 销售计划-目标达成一览图
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	DatePicker,
	Row,
	Card,
	Col,
	Modal,
	Icon
} from 'antd'
import Chart from '../common/CustomerDataDisplayPieChart.jsx'
import LineChart from '../common/LineChart.jsx';
const RangePicker = DatePicker.RangePicker;
import * as actionCreater from '../../../../actions/applications/crm/workReport/workReportDataCard.js';
 import * as actionCreator from '../../../../actions/applications/crm/workReport/reportList/reportGrid.js';
import {
	formatDate,
	exportDate
} from '../../../../utils/common.js'
const width = window.screen.availWidth > 1000 ? 800 : '100%';
const colSpan = {
	md: {
		span: 8
	},
	sm: {
		span: 12
	},
	xs: {
		span: 24
	}
}

export class GoalReachedGeneralMap extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getWorkData();
	}

	handleChange(range) {
		console.log(range)
		this.props.setDateRange(range);
		this.props.getWorkData(range);
	}

	showLineChart(e, data, stageId) {
		const startTime = this.props.startTime;
		const endTime = this.props.endTime;
		Modal.info({
			title: `${data.customer_stage} ${formatDate(exportDate(startTime),'年','月','日')}-${formatDate(exportDate(endTime),'年','月','日')}`,
			iconType: null,
			style: {
				top: 20
			},
			width: width,
			content: <LineChart
						customerStage={stageId}
						totalCount={data.customer_complete}
						startTime={startTime}
						endTime={endTime}
						url={'/reports/chart'}/>,
			okText: '关闭'
		})
	}

	renderLabel(data, stageId, color) {
		return (
			<div>
				<p>{data.customer_stage}</p>
				<Icon
					type="chart"
					onClick={()=>this.showLineChart(this,data,stageId)}
					style={{color:color,border:'1px #eaeaea solid',padding:'2px 5px',cursor:'pointer'}}/>
			</div>
		)
	}

	renderChart() {
		const keys = Object.keys(this.props.data);
		return keys.map(key => {
			let data = this.props.data[key];
			let color = ['#ee2024', '#ed950d', '#54a3ee', '#05d6b9', '#54d022', '#c148ef'][key];
			return (<Col {...colSpan} key={key}>
						<Chart
							label={this.renderLabel.call(this,data,key,color)}
							finishedNumber={data.customer_complete}
							willFinishedNumber={data.customer_complete}
							finishedColor={color}/>
					</Col>)
		})
	}

	render() {
		return (
			<Card
				className="shadowCard"
				noHovering
				title="数据面板">
				<RangePicker
					value={[this.props.startTime,this.props.endTime]}
					onChange={this.handleChange.bind(this)}/>
				<Row>
					{this.renderChart.call(this)}
				</Row>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const cardState = state.workReportDataCard;
	return {
		data: cardState.data,
		startTime: cardState.startTime,
		endTime: cardState.endTime
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setDateRange: (range) => dispatch(actionCreater.setRangePickerValueActionCreater(range)),
		getWorkData: (range) => dispatch(actionCreater.getDataCardDataActionCreater(range)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalReachedGeneralMap)