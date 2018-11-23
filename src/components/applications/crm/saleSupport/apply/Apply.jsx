/*
 * @Author: lcj
 * @Date:   2017-09-06 18:09:54
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 10:38:10
 * @Descriptions: 报销申请
 */
import React from 'react'
import moment from 'moment'
import TopFilter from '../TopFilter.jsx'
import Grid from '../../../../common/Grid.jsx'
import {
	Modal
} from 'antd'
import Pagination from '../../../../common/Pagination.jsx'
import {
	getApplyTypes,
	getApplyList,
	getApplyDetail,
	pushApply,
	getApplyCustomer
} from '../../../../../utils/interface.js'
import {
	formatDate,
	formatDateWithOutYears,
	exportDate
} from '../../../../../utils/common.js'
import GridActionButton from '../../policyApply/GridActionButton.jsx'
import SelectModal from './SelectModal.jsx'
import CustomerFeeModal from './CustomerFeeModal.jsx'
import DailyFeeModal from './DailyFeeModal.jsx'
const width = window.screen.availWidth > 1000 ? 800 : '100%';

export default class Apply extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			filter: {
				typeOptions: {},
				types: '-1',
				approvalType: '-1',
				approvalPhase: '-1',
				filter: '',
				showFilter: false,
				range: [moment(), moment()],
				placeholder: '输入产品名称进行查询'
			},
			pagination: {
				page: 1,
				limit: 5,
				totalCount: 0
			},
			materials: [],
			visible: false,
			customerVisible: false,
			dailyVisible: false,
			modalType: 0,
			data: []
		}
		this.filterChange = this.filterChange.bind(this)
		this.getApplys = this.getApplys.bind(this)
	}

	componentWillMount() {
		this.getMeetingsTypesOptions.call(this);
		this.getApplys()
	}

	//获得会议申请类型列表
	getMeetingsTypesOptions() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const data = {}
				res.data.map(item => {
					data[item.expense_type_id.toString()] = item.expense_type_name;
				})
				this.filterChange('typeOptions', data)
			}
		}
		getApplyTypes(null, cb.bind(this))
	}

	//获取物料申请列表
	getApplys(params = {}) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const pagination = this.state.pagination;
				pagination.totalCount = res.data.total_count
				this.setState({
					materials: res.data.data,
					pagination
				})
			}
		}
		let param = {
			start_time: exportDate((params.range && params.range[0]) || this.state.filter.range[0]),
			end_time: exportDate((params.range && params.range[1]) || this.state.filter.range[1]),
			approval_type: params.approvalType || this.state.filter.approvalType,
			expense_apply_status: params.approvalPhase || this.state.filter.approvalPhase,
			filter: params.filter || this.state.filter.filter,
			page: params.page || this.state.pagination.page,
			limit: params.limit || this.state.pagination.limit
		}
		getApplyList(param, cb.bind(this))
	}

	//新建物料申请
	addApplyModal() {
		this.setState({
			visible: true,
			modalType: 0
		})
	}

	filterChange(key, value) {
		const filter = this.state.filter;
		filter[key] = value;
		this.setState({
			filter
		})
	}

	changePagination(page, limit) {
		const pagination = this.state.pagination;
		pagination.page = page;
		pagination.limit = limit;
		this.setState({
			pagination
		})
	}

	//刷新界面
	over() {
		this.changePagination(1, 5);
		this.getApplys({
			page: 1,
			limit: 5
		})
	}

	render() {
		const that = this;
		const innerGridDefs = {
			"expense_apply_id": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"customer_id": "拜访对象",
			"communicate_way": {
				headerName: "拜访方式",
				valueGetter: (params) => ['未拜访', '电话拜访', '上门拜访'][params.data.communicate_way]
			},
			"visit_date": {
				headerName: "创建日期",
				valueGetter: (params) => formatDateWithOutYears(params.data.visit_date, '月', '日')
			},
			"customer_spend": "客情支出",
		}
		const columnDefs = {
			"expense_apply_id": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"approval_types": {
				headerName: "审核类型",
				valueGetter: (params) => ['我的申请', '待我审核', '我已审核'][params.data.approval_types - 1]
			},
			"expense_apply_status": {
				headerName: "状态",
				valueGetter: (params) => ['未提交', '待审批', '已通过', '已拒绝'][params.data.expense_apply_status]
			},
			"expense_type_id": {
				headerName: "类型",
				valueGetter: (params) => this.state.filter.typeOptions[params.data.expense_type_id]
			},
			"expense_apply_money": "金额",
			"expense_user_name": {
				headerName: "对象",
				cellStyle: {
					cursor: 'pointer'
				},
				onCellClicked: (params) => {
					function cb(res) {
						if (res.error_code === GLOBALSUCCESS) {
							Modal.success({
								title: '客情费报销对象',
								width: width,
								iconType: null,
								content: <Grid columnDefs={innerGridDefs} rowData={res.data}/>,
								okText: '关闭'
							})
						}
					}
					getApplyCustomer({
						expense_apply_id: params.data.expense_apply_id
					}, cb.bind(this));
				}
			},
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
					getDetail: getApplyDetail,
					submit: pushApply,
					getList: this.getApplys.bind(this),
					edit: function() {
						const isCustomer = this.data.expense_user_name === "查看"
						that.setState({
							customerVisible: isCustomer,
							dailyVisible: !isCustomer
						})
					}
				}
			}
		}
		return (
			<div style={{marginTop:'5px'}}>
				<TopFilter
					{...this.state.filter}
					onChange={this.filterChange}
					addApplyModal={this.addApplyModal.bind(this)}
					refresh={this.getApplys.bind(this)}
					initPagination={()=>this.changePagination.call(this,1,5)}/>
				<Grid
					rowData={this.state.materials}
					columnDefs={columnDefs}/>
				<div style={{textAlign:'center'}}>
					<Pagination
						{...this.state.pagination}
						refresh={this.getApplys.bind(this)}
						onChange={this.changePagination.bind(this)}/>
				</div>
				<SelectModal
					visible={this.state.visible}
					closeModal={()=>this.setState({visible:false})}
					openDailyModal={()=>this.setState({dailyVisible:true})}
					openCustomerModal={()=>this.setState({customerVisible:true})}/>
				<CustomerFeeModal
					data={this.state.data}
					visible={this.state.customerVisible}
					modalType={this.state.modalType}
					typeOptions={this.state.filter.typeOptions}
					over={this.over.bind(this)}
					closeAll={()=>this.setState({data:[],visible:false,customerVisible:false,modalType:0})}
					closeModal={()=>this.setState({data:[],customerVisible:false,modalType:0})}/>
				<DailyFeeModal
					data={this.state.data}
					visible={this.state.dailyVisible}
					modalType={this.state.modalType}
					typeOptions={this.state.filter.typeOptions}
					over={this.over.bind(this)}
					closeAll={()=>this.setState({data:[],visible:false,dailyVisible:false,modalType:0})}
					closeModal={()=>this.setState({data:[],dailyVisible:false,modalType:0})}/>
			</div>
		)
	}
}