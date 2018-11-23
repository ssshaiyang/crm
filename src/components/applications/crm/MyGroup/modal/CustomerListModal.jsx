/*
 * @Author: lcj
 * @Date:   2017-08-30 11:16:28
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:33:25
 * @Descriptions: crm-我的团队-客户列表弹窗
 */

import React from 'react'
import {
	Select,
	Input,
	Button,
	Row,
	Col,
	Modal,
	Icon
} from 'antd'
const Option = Select.Option
import {
	getSpecialCustomerList
} from '../../../../../utils/interface.js'
import Grid from '../../../../common/Grid.jsx'
import Pagination from '../../../../common/Pagination.jsx'
import EmployeeDetailModal from './EmployeeDetailModal.jsx'
import ProductWantted from './ProductWantted.jsx'
import VisitRecordModal from './VisitRecordModal.jsx'

const width = window.screen.availWidth > 1000 ? 800 : '100%';

export default class CustomerListModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			customerType: '-1',
			customerPhase: '-1',
			filter: '',
			page: 1,
			limit: 5,
			totalCount: 0,
			data: [],
		}
		this.getCustomerList = this.getCustomerList.bind(this)
	}

	componentWillMount() {
		this.getCustomerList(this);
	}

	getCustomerList(params = {}) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					totalCount: res.data.total_count,
					data: res.data.data
				})
			}
		}
		let param = {
			customer_type: params.customerType || this.state.customerType,
			customer_stage: params.customerPhase || this.state.customerPhase,
			filter: params.filter || this.state.filter,
			page: params.page || this.state.page,
			limit: params.limit || this.state.limit,
			employee_id: this.props.employee_id
		}
		getSpecialCustomerList(param, cb.bind(this))
	}

	handleChange(status, value) {
		let params = {};
		if (status === 0) {
			params = {
				customerType: value,
				page: 1,
				limit: 5
			}
		} else {
			params = {
				customerPhase: value,
				page: 1,
				limit: 5
			}
		}
		this.setState(params)
		this.getCustomerList(params)
	}

	onSearch() {
		this.setState({
			page: 1,
			limit: 5
		})
		this.getCustomerList({
			page: 1,
			limit: 5,
			filter: this.state.filter
		})
	}

	render() {
		const columnDefs = {
			"customer_id": "客户ID",
			"customer_name": {
				headerName: "姓名",
				cellStyle: {
					cursor: 'pointer'
				},
				onCellClicked: (params) => Modal.info({
					title: params.value,
					okText: '返回',
					iconType: false,
					width: width,
					content: <EmployeeDetailModal customer_id={params.data.customer_id}/>
				})
			},
			"customer_type": {
				headerName: "类型",
				valueGetter: (params) => ['医生', '其他'][params.data.customer_type - 1]
			},
			"customer_phone": "联系方式",
			"customer_stage": {
				headerName: "客情阶段",
				valueGetter: (params) => ['新开发的客户', '电话拜访客户', '上门拜访客户', '意向客户', '成交客户'][params.data.customer_stage - 1]
			},
			"product": {
				headerName: "产品意向",
				cellStyle: {
					cursor: 'pointer'
				},
				valueGetter: () => '查看',
				onCellClicked: (params) => Modal.info({
					title: `${params.data.customer_name}·产品意向`,
					okText: '返回',
					iconType: false,
					width: width,
					content: <ProductWantted customer_id={params.data.customer_id}/>
				})
			},
			"record": {
				headerName: "拜访记录",
				cellStyle: {
					cursor: 'pointer'
				},
				cellRendererFramework: () => <Icon type="jihuaguanli"/>,
				onCellClicked: (params) => Modal.info({
					title: `${params.data.customer_name}·拜访记录`,
					okText: '返回',
					iconType: false,
					width: width,
					content: <VisitRecordModal customer_id={params.data.customer_id}/>
				})
			},
		}
		return (
			<div>
				<Row>
					<Col span={6}>
						<span style={{marginRight:'10px'}}>客户类型</span>
						<Select value={this.state.customerType} style={{width:'100px'}} onChange={this.handleChange.bind(this,0)}>
							<Option value="-1">所有类型</Option>
							<Option value="1">医生</Option>
							<Option value="2">其他</Option>
						</Select>
					</Col>
					<Col span={6}>
						<span style={{marginRight:'10px'}}>客情阶段</span>
						<Select value={this.state.customerPhase} style={{width:'100px'}} onChange={this.handleChange.bind(this,1)}>
							<Option value="-1">所有客户</Option>
							<Option value="1">新开发的客户</Option>
							<Option value="2">电话拜访客户</Option>
							<Option value="3">上门拜访客户</Option>
							<Option value="4">意向客户</Option>
							<Option value="5">成交客户</Option>
						</Select>
					</Col>
					<Col span={12} style={{textAlign:'right'}}>
						<Input placeholder="输入客户ID/姓名/联系方式..." style={{width:'200px',marginRight:'10px'}} value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})}/>
						<Button className="mainButton" onClick={this.onSearch.bind(this)}>搜索</Button>
					</Col>
				</Row>
				<Grid rowData={this.state.data} columnDefs={columnDefs}/>
				<div style={{textAlign:'center'}}>
					<Pagination
						page={this.state.page}
						limit={this.state.limit}
						refresh={this.getCustomerList.bind(this)}
						totalCount={this.state.totalCount}
						onChange={(page,limit)=>this.setState({page,limit})}/>
				</div>
			</div>
		)
	}
}