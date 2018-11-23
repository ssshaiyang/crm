/*
 * @Author: lcj
 * @Date:   2017-08-29 09:16:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:42:49
 * @Descriptions: 工作汇报
 */

import React from 'react'
import {
	Card
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	getReportListActionCreater
} from '../../../../actions/applications/crm/workReport/reportList/reportGrid.js'
import {
	initPaginationActionCreater
} from '../../../../actions/applications/crm/workReport/reportList/reportListPagination.js'
import Grid from './ReportList/ReportGrid.jsx'
import ReportListFilter from './ReportList/ReportListFilter.jsx'
import ReportListPagination from './ReportList/ReportListPagination.jsx'
import AddSaleReportModal from './modal/AddSaleReportModal.jsx'

export class ReportList extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.getReportListData();
	}

	render() {
		return (
			<Card
				title="报表列表"
				className="shadowCard"
				noHovering
				style={{margin:'20px 0'}}>
				<ReportListFilter
					refreshList={this.props.getReportListData}
					initPagination={this.props.initPagination}/>
				<Grid/>
				<div style={{textAlign:'center'}}>
					<ReportListPagination refresh={this.props.getReportListData}/>
				</div>
				<AddSaleReportModal
					refreshList={this.props.getReportListData}
					initPagination={this.props.initPagination}/>
			</Card>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getReportListData: (params) => dispatch(getReportListActionCreater(params)),
		initPagination: () => dispatch(initPaginationActionCreater())
	}
}

export default connect(null, mapDispatchToProps)(ReportList)