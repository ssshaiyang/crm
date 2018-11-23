/*
 * @Author: lcj
 * @Date:   2017-08-29 15:10:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-11 09:43:02
 * @Descriptions: crm-政策申请
 */

import React from 'react'
import {
	Card,
	DatePicker,
	Button,
	Input,
	Select
} from 'antd'
import moment from 'moment'
import Pagination from '../../common/Pagination.jsx'
import Grid from '../../common/Grid.jsx'
import {
	getPolicyList,
	policyDetail,
	pushPolicy
} from '../../../utils/interface.js'
import {
	exportDate,
	formatDate
} from '../../../utils/common.js'
const {
	RangePicker
} = DatePicker;
const Option = Select.Option;
import AddPolicyApplyModal from './policyApply/AddPolicyApplyModal.jsx'
import GridActionButton from './policyApply/actionButton.jsx'

export class PolicyApply extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			status: "-1",
			type: "-1",
			filter: '',
			page: 1,
			limit: 5,
			totalCount: 0,
			rowData: [],
			startTime: moment(),
			endTime: moment(),
			visible: false,
			modalType: 0,
			data: {},
		}
		this.getList = this.getList.bind(this)
	}

	getList(params = {}) {
		console.log(this.state.startTime)
		let param = {
			policy_apply_status: params.policy_apply_status || this.state.status,
			approval_types: params.approval_types || this.state.type,
			page: params.page || this.state.page,
			limit: params.limit || this.state.limit,
			filter: params.filter || this.state.filter,
			start_time: exportDate(params.startTime  ),
			end_time: exportDate(params.endTime )
		}
		console.log(param)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				console.log(res)
				this.setState({
					totalCount: res.data.total_count,
					rowData: res.data.data
				})
			}
		}
		getPolicyList(param, cb.bind(this))
	}

	componentWillMount() {
		this.getList();
	}

	onSearch() {
		this.changePagination(0, 5);
		this.getList({
			filter: this.state.filter
		})
	}

	openModal(modalType) {
		console.log(modalType)
		this.setState({
			visible: true,
			modalType: modalType
		})
	} 

	selectChange(status) {
		this.changePagination(0, 5);
		this.getList({
			policy_apply_status: status
		})
		this.setState({
			status
		})
	}

	selectTypeChange(type) {
		this.changePagination(0, 5);
		this.getList({
			approval_types: type
		})
		this.setState({
			type
		})
	}

	changeRange(range) {
		console.log(range)
		this.changePagination(0, 5);
		const params = {
			startTime: range[0],
			endTime: range[1]
		}
		this.setState({
			startTime:range[0],
			endTime: range[1]
		})
		console.log(params)
		this.getList(params)
		this.setState(params)
	}

	changePagination(page, limit) {
		this.setState({
			page,
			limit
		})
	}

	getDetail(id){
		// console.log(id)
		// function cb(res) {
		// 	if (res.error_code === GLOBALSUCCESS) {

		// 		console.log(res)
		// 		this.setState({
					
		// 		})
		// 	}
		// }
		
		console.log(this.state)
		// getMeetingDetail(id, cb.bind(this));
		this.setState({
				data:{
					id:id
				}
		})
	}

	overAdd() {
		this.changePagination(0, 5);
		this.getList({
			page: 1,
			limit: 5
		})
	}

	render() {
		const that = this;
		const columnDefs = {
			"policy_apply_id": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"approval_types": {
				headerName: '审核类型',
				valueGetter: (params) => ['我的申请', '待我审核', '我已审核'][params.data.approval_types - 1]
			},
			"policy_apply_status": {
				headerName: "申请状态",
				valueGetter: (params) => ['未提交', '待审批', '已通过', '已拒绝'][params.data.policy_apply_status]
			},
			"drug_name": "药品名称",
			"specification": "规格",
			"dosage": "剂型",
			"manufacture": "生产厂家",
			"hospital_name": "销售医院",
			"apply_proportion": "申请比例",
			"policy_apply_money": "申请金额",
			"create_time": {
				headerName: "创建日期",
				valueGetter: (params) => formatDate(params.data.create_time, '年', '月', '日')
			},
			"action": {
				headerName: "操作",
				pinned: 'right',
				cellRendererFramework: GridActionButton,
				cellRendererParams: {
					that: that,
					openModal:this.openModal.bind(this),
					getDetail: this.getDetail.bind(this),
					submit: pushPolicy,
					getList: this.getList.bind(this)
				}
			}
		}
		return (
			<Card
				title="政策申请列表">
				<div>
					<RangePicker
						style={{width:'200px'}}
						value={[this.state.startTime,this.state.endTime]}
						onChange={this.changeRange.bind(this)}/>
					<span style={{marginLeft:'20px'}}>审核类型</span>
					<Select
						style={{width:'100px'}}
						value={this.state.type}
						onChange={this.selectTypeChange.bind(this)}>
						<Option value="-1">所有</Option>
						<Option value="1">我的申请</Option>
						<Option value="2">待我审核</Option>
						<Option value="3">我已审核</Option>
					</Select>
					<span style={{marginLeft:'20px'}}>申请状态</span>
					<Select
						style={{width:'100px'}}
						value={this.state.status}
						onChange={this.selectChange.bind(this)}>
						<Option value="-1">所有</Option>
						<Option value="0">未提交</Option>
						<Option value="1">待审批</Option>
						<Option value="2">已通过</Option>
						<Option value="3">已拒绝</Option>
					</Select>
					<div style={{float:'right'}}>
						<Input style={{width:'150px'}} placeholder="输入产品名称进行查询" value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})}/>
						<Button className="mainButton" style={{margin:'0 20px 0 10px'}} onClick={this.onSearch.bind(this)}>搜索</Button>
						<Button icon="plus" className="mainButton" onClick={()=>this.setState({visible:true,modalType:0})}/>
					</div>
				</div>
				<Grid
					rowData={this.state.rowData}
					columnDefs={columnDefs}/>
				<div style={{textAlign:'center'}}>
					<Pagination
						page={this.state.page}
						limit={this.state.limit}
						totalCount={this.state.totalCount}
						onChange={this.changePagination.bind(this)}
						refresh={this.getList.bind(this)}/>
				</div>
				<AddPolicyApplyModal
					visible={this.state.visible}
					modalType={this.state.modalType}
					data={this.state.data}
					over={this.overAdd.bind(this)}
					closeModal={()=>this.setState({visible:false})}/>
			</Card>
		)
	}
}

export default PolicyApply