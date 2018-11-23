/*
 * @Author: lcj
 * @Date:   2017-08-29 10:18:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 10:34:49
 * @Descriptions: 工作汇报-报表列表-底部导航栏
 */

import Pagination from '../../../../common/Pagination.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/reportList/reportListPagination.js'

function mapStateToProps(state) {
	const pageState = state.reportListPagination;
	return {
		page: pageState.page,
		limit: pageState.limit,
		totalCount: pageState.totalCount
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (page, size) => dispatch(actionCreater.changePaginationActionCreater(page, size))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)