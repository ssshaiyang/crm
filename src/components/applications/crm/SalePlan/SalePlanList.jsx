/*
 * @Author: lcj
 * @Date:   2017-08-25 14:17:17
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 10:41:56
 * @Descriptions: 销售计划-销售计划列表
 */

import React from 'react'
import {
	Card,
	DatePicker
} from 'antd'
const RangePicker = DatePicker.RangePicker
import {
	connect
} from 'react-redux'
import {
	getPlanListDataActionCreater
} from '../../../../actions/applications/crm/salePlan/salePlanList/salePlanListGrid.js'
import {
	initSalePlanListPagination
} from '../../../../actions/applications/crm/salePlan/salePlanList/salePlanListPagination.js'
import SalePlanListFilter from './SalePlanList/SalePlanListFilter.jsx'
import Grid from './SalePlanList/SalePlanListGrid.jsx'
import Pagination from './SalePlanList/SalePlanListPagination.jsx'
import VisitRecordModal from './SalePlanList/salePlanListGrid/VisitRecordModal.jsx'
import AddSalePlanModal from './SalePlanList/SalePlanListAddSalePlanModal.jsx'

export class SalePlanList extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.getGridList()
	}

	render() {
		return (
			<Card
				style={{marginTop:'20px'}}
				className="shadowCard"
			 	title="销售计划列表">
			 	<SalePlanListFilter
			 		refreshList={this.props.getGridList}
			 		initPagination={this.props.initPagination}/>
			 	<Grid
			 		refreshList={this.props.getGridList}
			 		initPagination={this.props.initPagination}/>
			 	<div style={{textAlign:'center'}}>
			 		<Pagination refresh={this.props.getGridList}/>
			 	</div>
			 	<VisitRecordModal/>
			 	<AddSalePlanModal
			 		refreshList={this.props.getGridList}
			 		initPagination={this.props.initPagination}/>
			</Card>
		)
	}
}

function mapDispatchToprops(dispatch) {
	return {
		getGridList: () => dispatch(getPlanListDataActionCreater()),
		initPagination: () => dispatch(initSalePlanListPagination())
	}
}

export default connect(null, mapDispatchToprops)(SalePlanList)                     