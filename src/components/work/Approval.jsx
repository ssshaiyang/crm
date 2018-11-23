/*
 * @Author: lcj
 * @Date:   2017-08-07 09:46:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 13:16:23
 */

'use strict';

import React from 'react'
import TopStateBar from './approval/TopStateBar.jsx'
import Filter from './approval/Filter.jsx'
import ApprovalCard from './approval/ApprovalCard.jsx'
import Pagination from './approval/Pagination.jsx'
import ApprovalOpinionModel from './approval/approvalCard/ApprovalOpinionModel.jsx'
import NameModel from './approval/approvalCard/NameModel.jsx'
import OrderModel from './approval/approvalCard/OrderModel.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../actions/work/approval.js'

export class Approval extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getApprovals();
	}

	renderCard() {
		return this.props.datas.map((data, i) =>
			<ApprovalCard data={data} key={i} type={this.props.approvalType} getApprovals={this.props.getApprovals}/>
		)
	}

	render() {
		return (
			<div>
				<TopStateBar refreshApprovals={this.props.getApprovals}/>
				<Filter refreshApprovals={this.props.getApprovals}/>
				{this.renderCard.call(this)}
				<ApprovalOpinionModel refreshApprovals={this.props.getApprovals}/>
				<NameModel/>
				<OrderModel/>
				<Pagination refresh={this.props.getApprovals}/>
			</div>
		)
	}
}

function changePagActionCreater(page, limit) {
	return {
		type: 'TOP_STATE_BAR_CHANGE_PAGINATION_LIMIT_AND_PAGE',
		payload: {
			page,
			limit
		}
	}
}

function mapStateToProps(state) {
	return {
		datas: state.approval.datas,
		limit: state.approvalPagination.limit,
		page: state.approvalPagination.page,
		totalCount: state.approvalPagination.totalCount,
		approvalType: state.topStateBar.approvalType,
		approvalState: state.approvalFilter.approvalState,
		startTime: state.approvalFilter.startTime,
		endTime: state.approvalFilter.endTime,
		filter: state.approvalFilter.filter,
	}
}

function mapDispatchToProps(dispatch, state) {
	return {
		getApprovals: (params) => dispatch(actionCreater.getApprovalsActionCreater(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Approval);