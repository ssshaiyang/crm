/*
 * @Author: lcj
 * @Date:   2017-08-25 09:10:53
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 16:35:00
 * @Descriptions: 销售计划-目标达成一览图
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	DatePicker,
	Row,
	Card
} from 'antd'
const RangePicker = DatePicker.RangePicker
import * as actionCreater from '../../../../actions/applications/crm/salePlan/goalReachedGeneralMap.js'
import Chart from './goalReachedGeneralMap/GeneralMapPieChart.jsx'

export class GoalReachedGeneralMap extends React.Component {
	constructor(props) {
		super(props);
	}
          
	componentWillMount() {
		this.props.refreshGeneralMapData();
	}

	onChange(dates) {
		console.log(dates)
		this.props.changeDateRange(dates);
		this.props.refreshGeneralMapData(dates);
	}

	render() {
		return (
			<Card
				className="shadowCard"
				title="目标达成一览图">
				<RangePicker
					onChange={this.onChange.bind(this)}
					value={[this.props.startTime,this.props.endTime]}/>
				<Row>
					<Chart data={this.props.newCustomerData} stage={0}/>
					<Chart data={this.props.phoneCustomerData} stage={1}/>
					<Chart data={this.props.onSiteCustomerDate} stage={2}/>
				</Row>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const mapState = state.goalReachedGeneralMap;
	return {
		newCustomerData: mapState.newCustomerData,
		phoneCustomerData: mapState.phoneCustomerData,
		onSiteCustomerDate: mapState.onSiteCustomerDate,
		startTime: mapState.startTime,
		endTime: mapState.endTime
	}
}

function mapDispatchToProps(dispatch) {
	return {
		refreshGeneralMapData: (range) => dispatch(actionCreater.refreshGeneralMapDataActionCreater(range)),
		changeDateRange: (range) => dispatch(actionCreater.setGeneralMapDataActionCreater(range))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalReachedGeneralMap)
                