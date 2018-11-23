/*
 * @Author: lcj
 * @Date:   2017-08-29 20:07:56
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 08:53:32
 * @Descriptions: 销售支持-物料申请
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
	getMaterialsTypes,
	getMaterialsList,
	getMaterialDetail,
	pushMaterial
} from '../../../../../utils/interface.js'
import {
	formatDate,
	exportDate
} from '../../../../../utils/common.js'
import GridActionButton from './actionButton.jsx'
import MaterialModal from './MaterialModal.jsx'

export default class Material extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			filter: {
				typeOptions: {},
				types: '-1',
				approvalType: '-1',
				approvalPhase: '-1',
				filter: '',
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
			modalType: 0,
			data:{
					id:0
				}
		}
		this.filterChange = this.filterChange.bind(this)
		this.getMaterials = this.getMaterials.bind(this)
	}

	componentWillMount() {
		this.getMaterialsTypesOptions.call(this);
		this.getMaterials()
	}

	over() {
		// let filter = this.state.filter;
		// filter.approvalType = "-1";
		// filter.types = "-1";
		// filter.approvalPhase = "-1";
		// filter.filter = "";
		// filter.range = [moment(), moment()]
		let pagination = {
			page: 1,
			limit: 5,
			totalCount: 0
		};
		this.setState({
			// filter,
			pagination
		})
		this.getMaterials({
			page: 1,
			limit: 5
		})
	}

	//获取物料申请类型列表
	getMaterialsTypesOptions() {
		console.log("smkdskdks")
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const data = {}
					//因为接口格式不统一,因此加工返回值,将数组格式转化为json格式
				res.data.map(item => {
					data[item.material_type_id.toString()] = item.material_type_name;
				})
				this.filterChange('typeOptions', data)
			}
		}
		getMaterialsTypes(null, cb.bind(this))
	}

	//获取物料申请列表
	getMaterials(params = {}) {
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
			approval_types: params.approvalType || this.state.filter.approvalType,
			material_request_status: params.approvalPhase || this.state.filter.approvalPhase,
			material_type_id: params.types || this.state.filter.types,
			filter: params.filter || this.state.filter.filter,
			page: params.page || this.state.pagination.page,
			limit: params.limit || this.state.pagination.limit
		}
		getMaterialsList(param, cb.bind(this))
	}

	//新建物料申请
	addApplyModal() {
		this.setState({
			visible: true,
			modalType: 0
		})
	}

	openModal(modalType) {
		console.log(modalType)
		this.setState({
			visible: true,
			modalType: modalType
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
		console.log(id)
		console.log(this.state)
		// getMeetingDetail(id, cb.bind(this));
		this.setState({
				data:{
					id:id
				}
		})
		console.log(this.state)
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

	render() {
		const that = this;
		const columnDefs = {
			"material_apply_id": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"approval_types": {
				headerName: "审核类型",
				valueGetter: (params) => ['我的申请', '待我审核', '我已审核'][params.data.approval_types - 1]
			},
			"material_request_status": {
				headerName: "状态",
				valueGetter: (params) => ['未提交', '待审批', '已通过', '已拒绝'][params.data.material_request_status]
			},
			"material_type_id": {
				headerName: "类型",
				valueGetter: (params) => this.state.filter.typeOptions[params.data.material_type_id]
			},
			"material_name": "物料名称",
			"apply_number": "数量",
			"hospital_id": "使用对象",
			"apply_description": "用途",
			"create_time": {
				headerName: "创建日期",
				valueGetter: (params) => formatDate(params.data.create_time, '年', '月', '日')
			},
			"action": {
				headerName: "操作",
				pinned: 'right',
				cellRendererFramework: GridActionButton,
				cellRendererParams: {
					
					getDetail: this.getDetail.bind(this),
					openModal:this.openModal.bind(this),
					submit: pushMaterial,
					getList: this.getMaterials.bind(this)
				}
			}
		}
		return (
			<div style={{marginTop:'5px'}}>
				<TopFilter
					{...this.state.filter}
					onChange={this.filterChange}
					addApplyModal={this.addApplyModal.bind(this)}
					refresh={this.getMaterials.bind(this)}
					initPagination={()=>this.changePagination.call(this,1,5)}/>
				<Grid
					rowData={this.state.materials}
					columnDefs={columnDefs}/>
				<div style={{textAlign:'center'}}>
					<Pagination
						{...this.state.pagination}
						refresh={this.getMaterials.bind(this)}
						onChange={this.changePagination.bind(this)}/>
				</div>
				<MaterialModal
					data={this.state.data}
					visible={this.state.visible}
					modalType={this.state.modalType}
					over={this.over.bind(this)}
					typeOptions={this.state.filter.typeOptions}
					closeModal={()=>this.setState({data:[],visible:false,modalType:0})}/>
			</div>
		)
	}
}