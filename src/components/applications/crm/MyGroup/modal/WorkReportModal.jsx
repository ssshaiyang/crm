/*
 * @Author: lcj
 * @Date:   2017-08-30 10:47:33
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:46:42
 * @Descriptions: 
 */

import React from 'react'
import {
	Input,
	Button,
	DatePicker,
	Icon,
	Modal
} from 'antd'
import moment from 'moment'
import {
	getMemberWorkReport
} from '../../../../../utils/interface.js'
import {
	exportDate,
	formatDate,
	formatDateWithOutYears
} from '../../../../../utils/common.js'
import Pagination from '../../../../common/Pagination.jsx'
import Grid from '../../../../common/Grid.jsx'
import WorkReportDetail from './WorkReportDetail.jsx'
const width = window.screen.availWidth > 1000 ? 800 : '100%';

const RangePicker = DatePicker.RangePicker

const columnDefs = {
	"sale_report_id": "序号",
	"sale_report_name": "名称",
	"sale_report_type": "类型",
	"create_time": {
		"headerName": "创建时间",
		valueGetter: (params) => formatDate(params.data.create_time, '年', '月', '日', true)
	},
	"sale_report_remark": "备注",
	"update_time": {
		"headerName": "最后修改时间",
		valueGetter: (params) => formatDate(params.data.update_time, '年', '月', '日', true)
	},
	"action": {
		headerName: "操作",
		cellStyle: {
			cursor: 'pointer'
		},
		onCellClicked: (params) => {
			Modal.info({
				title: `${formatDateWithOutYears(params.data.create_time,'月','日')}工作日报`,
				width: width,
				iconType: null,
				okText: '返回',
				content: <WorkReportDetail/>
			})
		},
		cellRendererFramework: () => <Icon type="jihuaguanli"/>
	}
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
		getMemberWorkReport(param, cb.bind(this))
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
						<Input style={{width:'150px',marginRight:'10px'}} value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})} placeholder="输入名称搜索"/>
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