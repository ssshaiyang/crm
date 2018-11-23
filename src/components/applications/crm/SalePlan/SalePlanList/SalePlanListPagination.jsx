/*
 * @Author: lcj
 * @Date:   2017-08-25 15:54:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 16:10:11
 * @Descriptions: 销售计划-销售计划列表-下方分页逻辑组件
 */

import Pagination from '../../../../common/Pagination.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListPagination.js'

function mapStateToprops(state) {
	const paginationState = state.salePlanListPagination;
	return {
		page: paginationState.page,
		limit: paginationState.limit,
		totalCount: paginationState.totalCount
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (page, size) => dispatch(actionCreater.setSalePlanListPagination(page, size))
	}
}

export default connect(mapStateToprops, mapDispatchToProps)(Pagination)      