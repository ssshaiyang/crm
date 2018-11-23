/*
 * @Author: lcj
 * @Date:   2017-08-25 14:23:25
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:52:44
 * @Descriptions: 销售计划列表-头部过滤器
 */

import React from 'react'
import {
	DatePicker,
	Input,
	Button
} from 'antd'
const RangePicker = DatePicker.RangePicker
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListFilter.js'
import {
	openAddSalePlanModal
} from '../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'

export class SalePlanListFilter extends React.Component {
	constructor(props) {
		super(props)
	}

	handleRangeChange(value) {
		this.props.setDateRange(value)
		this.props.initPagination();
		this.props.refreshList({
			startTime: value[0],
			endTime: value[1],
			page: 1,
			limit: 5,
		})
	}

	handleSearch() {
		this.props.initPagination();
		this.props.refreshList({
			filter: this.props.filter,
			page: 1,
			limit: 5,
		})
	}

	render() {
		return (
			<div>
				<RangePicker
					value={[this.props.startTime,this.props.endTime]}
					onChange={this.handleRangeChange.bind(this)}/>
				<div style={{float:'right'}}>
					<Input
						onChange={this.props.setFilter.bind(this)}
						value={this.props.filter}
						style={{width:'150px'}}
						placeholder="输入报表名称进行查询"/>
					<Button
						className="mainButton"
						onClick={this.handleSearch.bind(this)}
						style={{margin:'0 20px 0 10px'}}>
						搜索
					</Button>
					<Button icon="plus"
						className="mainButton"
						onClick={this.props.openAddPlanModal}/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const filterState = state.salePlanListFilter
	return {
		startTime: filterState.startTime,
		endTime: filterState.endTime,
		filter: filterState.filter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setDateRange: (range) => dispatch(actionCreater.setSalePlanListFilterDateRangeActionCreater(range)),
		setFilter: (e) => dispatch(actionCreater.setSalePlanListFilterFilterActionCreater(e.target.value)),
		openAddPlanModal: () => dispatch(openAddSalePlanModal(0))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SalePlanListFilter)