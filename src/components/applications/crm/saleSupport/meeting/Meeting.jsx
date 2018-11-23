/*
 * @Author: lcj
 * @Date:   2017-09-06 18:07:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 08:59:47
 * @Descriptions: 会议申请
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
	getMeetingTypes,
	getMeetingList,
	getMeetingDetail,
	pushMeeting
} from '../../../../../utils/interface.js'
import {
	formatDate,
	exportDate
} from '../../../../../utils/common.js'
import GridActionButton from './actionButton.jsx'
import MeetingModal from './MeetingModal.jsx'

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
				range: [moment(), moment()],
				placeholder: '输入会议名称进行查询'
			},
			pagination: {
				page: 1,
				limit: 5,
				totalCount: 0
			},
			materials: [],
			visible: false,
			modalType: 0,
			data: {
				id:0
			},
			
		}
		this.filterChange = this.filterChange.bind(this)
		this.getMeetings = this.getMeetings.bind(this)
	}

	componentWillMount() {
		this.getMeetingsTypesOptions.call(this);
		this.getMeetings()
	}
    over() {
    	console.log("over")
        let pagination = {
            page: 1,
            limit: 5,
            totalCount: 0
        };
        this.setState({
            // filter,
            pagination
        })
        this.getMeetings({
            page: 1,
            limit: 5
        })
    }
	//获得会议申请类型列表
	getMeetingsTypesOptions() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const data = {}
				res.data.map(item => {
					data[item.meeting_type_id.toString()] = item.meeting_type_name;
				})
				this.filterChange('typeOptions', data)
			}
		}
		getMeetingTypes(null, cb.bind(this))
	}

	//获取物料申请列表
	getMeetings(params = {}) {
		console.log("getMeetings")
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
            page: params.page || this.state.pagination.page,
            limit: params.limit || this.state.pagination.limit,
			start_time: exportDate((params.range && params.range[0]) || this.state.filter.range[0]),
			end_time: exportDate((params.range && params.range[1]) || this.state.filter.range[1]),
			approval_type: params.approvalType || this.state.filter.approvalType,
			meeting_apply_status: params.approvalPhase || this.state.filter.approvalPhase,
			meeting_type_id: params.types || this.state.filter.types,
			filter: params.filter || this.state.filter.filter,
		}
		getMeetingList(param, cb.bind(this))
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
			"meeting_apply_id": {
				headerName: "序号",
				width: 100,
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"approval_types": {
				headerName: "审核类型",
				width: 100,
				valueGetter: (params) => ['我的申请', '待我审核', '我已审核'][params.data.approval_types - 1]
			},
			"material_request_status": {
				headerName: "状态",
				width: 100,
				valueGetter: (params) => ['未提交', '待审', '已通过', '已拒绝'][params.data.meeting_apply_status]
			},
			"material_type_id": {
				headerName: "类型",
				width: 100,
				valueGetter: (params) => this.state.filter.typeOptions[params.data.meeting_type_id]
			},
			"meeting_name": "名称",
			"meeting_number": "人数",
			"meeting_address": "会议地址",
			"meeting_budget": "预算",

			"create_time": {
				headerName: "创建日期",
				width: 100,
				valueGetter: (params) => formatDate(params.data.create_time, '年', '月', '日')
			},
			"action": {
				headerName: "操作",
				pinned: 'right',
				width: 100,
				cellRendererFramework: GridActionButton,
				cellRendererParams: {
					that: that,
					openModal:this.openModal.bind(this),
					submit: pushMeeting,
					getList: this.getMeetings.bind(this),
					getDetail: this.getDetail.bind(this),
					over:this.over.bind(this)
					
				}
			}
		}
		return (
			<div style={{marginTop:'5px'}}>
				<TopFilter
					{...this.state.filter}
					onChange={this.filterChange}
					addApplyModal={this.addApplyModal.bind(this)}
					refresh={this.getMeetings.bind(this)}
					initPagination={()=>this.changePagination.call(this,1,5)}/>
				<Grid
					rowData={this.state.materials}
					columnDefs={columnDefs}/>
				<div style={{textAlign:'center'}}>
					<Pagination
						{...this.state.pagination}
						refresh={this.getMeetings.bind(this)}
						onChange={this.changePagination.bind(this)}/>
				</div>
				<MeetingModal
					over={this.over.bind(this)}
					data={this.state.data}
					visible={this.state.visible}
					modalType={this.state.modalType}
					typeOptions={this.state.filter.typeOptions}
					closeModal={()=>this.setState({data:[],visible:false,modalType:0})}/>
			</div>
		)
	}
}