/*
 * @Author: lcj
 * @Date:   2017-08-21 19:59:41
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:10:39
 * @Descriptions: 客户管理-客户列表-分页组件逻辑组件
 */
import Pagination from '../../../../common/Pagination.jsx'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/customerList/customerListPagination.js'


function mapStateToprops(state) {
	const pagination = state.customerListPagination;
	return {
		totalCount: pagination.totalCount,
		limit: pagination.limit,
		page: pagination.page,
		pageSizeOptions: ['5', '10', '15', '20', '25', '50', '100']
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (page, size) => dispatch(actionCreater.pageChange(page, size)),
	}
}

export default connect(mapStateToprops, mapDispatchToProps)(Pagination)