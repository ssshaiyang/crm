/*
 * @Author: lcj
 * @Date:   2017-08-29 13:08:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 13:26:15
 * @Descriptions: 工作汇报-添加报表-拜访记录
 */

import React from 'react'
import Grid from '../../../../common/Grid.jsx'
import {
	Card,
	Button,
	Input
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	formatDate,
	formatDateWithOutYears
} from '../../../../../utils/common.js'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'

export class VisitRecordPanel extends React.Component {
	constructor(props) {
		super(props)
	}

	renderFilter() {
		return (
			<div>
				<Input
					placeholder="输入客户姓名或记录搜索"
					value={this.props.filter}
					onChange={(e)=>this.props.changeFilter(e.target.value)}
					style={{width:'150px',marginRight:'10px'}}/>
				<Button
					className='mainButton'
					onClick={this.props.searchData}>
						搜索
				</Button>
			</div>
		)
	}

	render() {
		const startTime = formatDate(this.props.startTime.valueOf(), '年', '月', '日')
		const endTime = formatDate(this.props.endTime.valueOf(), '年', '月', '日')
		const columnDefs = {
			"customer_name": "拜访对象",
			"communicate_way":{
                headerName:"拜访方式",
                valueGetter: (params) =>{
                	if(params.data.communicate_way==0){
                		return "未拜访"
					}else if(params.data.communicate_way==1){
                        return "电话沟通"
					}else if(params.data.communicate_way==2){
						return "上门拜访"
					}
				}
			},
			"visit_date": {
				headerName: "记录时间",
				valueGetter: (params) => formatDateWithOutYears(params.data.visit_date, '月', '日')
			},
			"customer_spend": "客情支出",
			"visit_content": "拜访记录"
		}
		return (
			<Card
				noHovering
				extra={this.renderFilter.call(this)}
				style={{marginTop:'10px'}}
				title={`${startTime}-${endTime}拜访记录`}>
				<Grid
					rowData={this.props.visitData}
					columnDefs={columnDefs}/>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	const panelState = state.addSaleReportModal
	return {
		startTime: panelState.startTime,
		endTime: panelState.endTime,
		visitData: panelState.visitData,
		filter: panelState.filter,
		visitData: panelState.visitData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeFilter: (filter) => dispatch(actionCreater.changeFilterActionCreater(filter)),
		searchData: () => dispatch(actionCreater.getModalVisitActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitRecordPanel)