/*
 * @Author: lcj
 * @Date:   2017-08-25 15:18:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 09:17:11
 * @Descriptions: 销售计划-销售计划列表-表单
 */

import React from 'react'
import Grid from '../../../../common/Grid.jsx'
import {
	connect
} from 'react-redux'
import {
	formatDateWithOutYears
} from '../../../../../utils/common.js'
import GridCustomerButton from './salePlanListGrid/GridCustomerButton.jsx'
import GridActionButton from './salePlanListGrid/GridActionButton.jsx'

export class SelfGrid extends React.Component {

	makeColumnDefs() {
		return {
			"sale_plan_id": "序号",
			"sale_plan_name": "计划名称",
			"execute_time": {
				headerName: "执行日期",
				valueGetter: (params) => formatDateWithOutYears(params.data.execute_time, '月', '日')
			},
			"new_customer": {
				headerName: "新客户达成/指标",
				valueGetter: (params) => params.data.new_customer_complete + '/' + params.data.new_customer_target
			},
			"phone_customer": {
				headerName: "电话拜访达成/指标",
				cellRendererFramework: GridCustomerButton,
				cellRendererParams: {
					type: 0
				}
			},
			"onsite_customer": {
				headerName: "上门拜访达成/指标",
				cellRendererFramework: GridCustomerButton,
				cellRendererParams: {
					type: 1
				}
			},
			"create_time": {
				headerName: "创建日期",
				valueGetter: (params) => formatDateWithOutYears(params.data.create_time, '月', '日')
			},
			"action": {
				headerName: "操作",
				cellRendererParams: {
					initPagination: this.props.initPagination,
					refreshList: this.props.refreshList
				},
				cellRendererFramework: GridActionButton
			}
		}
	}

	render() {
		return (
			<Grid
				rowData={this.props.rowData}
				columnDefs={this.makeColumnDefs.call(this)}/>
		)
	}
}

function mapStateToProps(state) {
	return {
		rowData: state.salePlanListGrid.data
	}
}
                        
export default connect(mapStateToProps)(SelfGrid)                                 