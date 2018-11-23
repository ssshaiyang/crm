/*
 * @Author: lcj
 * @Date:   2017-08-30 10:47:33
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:35:15
 * @Descriptions: 
 */

import React from 'react'
import {
	Input,
	Button,
	DatePicker
} from 'antd'
import moment from 'moment'
import {
	getTeamPlan
} from '../../../../../utils/interface.js'
import {
	exportDate,
	formatDateWithOutYears
} from '../../../../../utils/common.js'
import Pagination from '../../../../common/Pagination.jsx'
import Grid from '../../../../common/Grid.jsx'

const RangePicker = DatePicker.RangePicker

const columnDefs = {
	"sale_plan_id": "序号",
	"sale_plan_name": "计划名称",
	"execute_time": {
		"headerName": "执行日期",
		valueGetter: (params) => formatDateWithOutYears(params.data.execute_time, '月', '日')
	},
	"new_customer_target": "新客户拜访计划",
	"phone_customer_target": "电话拜访计划",
	"onsite_customer_target": "上门拜访计划",
	"create_time": {
		headerName: "创建日期",
		valueGetter: (params) => formatDateWithOutYears(params.data.create_time, '月', '日')
	},
}

export default class SalePlanList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			startTime: moment(),
			endTime: moment(),
			filter: '',
			data: [],
			page: 1,
			limit: 5,
			totalCount: 0,
		}
	}

	componentWillMount() {
		this.getDate.call(this)
	}

	getDate(params = {}) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					data: res.data.data,
					totalCount: res.data.total_count
				})
			}
		}
		let param = {
			employee_id: this.props.employee_id,
			filter: params.filter || this.state.filter,
			start_time: exportDate(params.startTime || this.state.startTime),
			end_time: exportDate(params.endTime || this.state.endTime),
			page: params.page || this.state.page,
			limit: params.limit || this.state.limit
		}
		getTeamPlan(param, cb.bind(this))
	}

	changeRange(range) {
		let params = {
			startTime: range[0],
			endTime: range[1],
			page: 1,
			limit: 5
		}
		this.setState(params)
		this.getDate.call(this, params)
	}

	onSearch() {
		this.setState({
			page: 1,
			limit: 5
		})
		this.getDate.call(this, {
			page: 1,
			limit: 5,
			filter: this.state.filter
		})
	}

	render() {
		return (
			<div>
				<div>
					<RangePicker
						value={[this.state.startTime,this.state.endTime]}
						onChange={this.changeRange.bind(this)}/>
					<div style={{float:'right'}}>
						<Input style={{width:'150px',marginRight:'10px'}} value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})} placeholder="输入报表名称进行查询"/>
						<Button icon="sousuo" className="mainButton" onClick={this.onSearch.bind(this)}/>
					</div>
					<Grid rowData={this.state.data} columnDefs={columnDefs}/>
				</div>
				<div style={{textAlign:'center'}}>
					<Pagination
						page={this.state.page}
						limit={this.state.limit}
						totalCount={this.state.totalCount}
						onChange={(page,limit)=>this.setState({page,limit})}
						refresh={this.getDate.bind(this)}/>
				</div>
			</div>
		)
	}
}