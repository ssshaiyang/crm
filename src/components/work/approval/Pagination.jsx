/*
 * @Author: lcj
 * @Date:   2017-08-10 10:05:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:17:08
 */

'use strict';
import React from 'react';
import Page from '../../common/Pagination.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../actions/work/approval/pagination.js'

export class Pagination extends React.Component {
	render() {
		return (
			<div style={{textAlign:'center',marginTop:'12px'}}>
				<Page {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		limit: state.approvalPagination.limit,
		page: state.approvalPagination.page,
		totalCount: state.approvalPagination.totalCount,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onShowSizeChange:
			(current, size) => dispatch(actionCreater.changePageInfActionCreater(current, size)),
		onChange:
			(page, pageSize) => dispatch(actionCreater.changePageInfActionCreater(page, pageSize))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);