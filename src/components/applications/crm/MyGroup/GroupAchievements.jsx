/*
 * @Author: lcj
 * @Date:   2017-08-29 19:38:54
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:43:36
 * @Descriptions: 
 */

import React from 'react'
import Chart from '../common/CustomerDataDisplayPieChart.jsx'
import {
	Card,
	DatePicker,
	Row,
	Col,
	Icon,
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
const RangePicker = DatePicker.RangePicker
import LineChart from '../common/LineChart.jsx'
import * as actionCreater from '../../../../actions/applications/crm/myGroup/groupAchievements.js'
import {
	getTeamList
} from '../../../../utils/interface.js'
import {
	formatDate,
	exportDate
} from '../../../../utils/common.js'

const width = window.screen.availWidth > 1000 ? 750 : '90%';

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

export class GroupAchievements extends React.Component {

	constructor(props) {
		super(props)
		this.state={
			member: []
		}
	}

	changeRange(range) {
		this.props.changeRange(range)
		this.props.getData(range)
	}

	componentWillMount() {
		this.props.getData()
			//获取团队信息
		getTeamList({
			page: -1,
			limit: -1
		}, (res) => {
			if (res.error_code === GLOBALSUCCESS) {

				this.setState({
					member: res.data.data
				})
			}
		})
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
						member={this.state.member}
						url={'/teams/chart'}/>,
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

	renderChart(i) {
		const data = this.props.data[i];
		const color = ['#f22220', '#ec9919', '#2f92f7', '#02d7b7', '#5ad022', '#bf5af6'][i - 1]
		const params = {
			finishedNumber: data.customer_complete,
			willFinishedNumber: data.customer_complete,
			label: this.renderLabel(data, i, color),
			finishedColor: color
		}
		return (
			<Col {...colSpan} key={i}>
				<Chart {...params}/>
			</Col>
		)
	}

	render() {
		const dataKeys = Object.keys(this.props.data)
		return (
			<Card title="团队绩效" noHovering className="shadowCard">
				<RangePicker
					value={[this.props.startTime,this.props.endTime]}
					onChange={this.changeRange.bind(this)}/>
				<Row>
					{
						dataKeys.map(key=>(
							this.renderChart.call(this,key)
						))
					}
				</Row>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const groupState = state.groupAchievements;
	return {
		startTime: groupState.startTime,
		endTime: groupState.endTime,
		data: groupState.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeRange: (range) => dispatch(actionCreater.setGroupRangeActionCreater(range)),
		getData: (range = []) => dispatch(actionCreater.getGroupAchievementsActionCreater(range))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupAchievements)