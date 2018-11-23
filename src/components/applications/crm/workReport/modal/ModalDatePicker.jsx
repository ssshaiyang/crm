/*
 * @Author: lcj
 * @Date:   2017-08-29 11:19:20
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 13:22:06
 * @Descriptions: 工作汇报-添加报表,左上方日期选择器
 */

import React from 'react'
import {
	Calendar,
	Col,
	Card
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'
export class ModalDatePicker extends React.Component {
	constructor(props) {
		super(props)
	}

	onSelect(moment) {
		console.log(moment)
		this.props.changeModalRange([moment, moment])
		this.props.getPlanData([moment, moment])
		this.props.getVisitData({
			startTime: moment,
			endTime: moment
		})
	}

	onPanelChange(date, mode) {
		console.log(date, mode)
	}

	componentWillMount() {
		this.props.getPlanData([this.props.startTime, this.props.endTime])
		this.props.getVisitData({
			startTime: this.props.startTime,
			endTime: this.props.endTime
		})
	}

	render() {
		return (
			<Col span={7}>
				<Card style={{height:'320px'}} noHovering>
					<Calendar
						fullscreen={false}
						value={this.props.startTime}
						onPanelChange={this.onPanelChange.bind(this)}
						onSelect={this.onSelect.bind(this)}/>
				</Card>
			</Col>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.addSaleReportModal.visible,
		startTime: state.addSaleReportModal.startTime,
		endTime: state.addSaleReportModal.endTime
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPlanData: (range) => dispatch(actionCreater.getModalPlanDataActionCreater(range)),
		getVisitData: (params = {}) => dispatch(actionCreater.getModalVisitActionCreater(params)),
		changeModalRange: (range) => dispatch(actionCreater.changeModalRangeActionCreater(range)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDatePicker)