/*
 * @Author: lcj
 * @Date:   2017-08-21 14:25:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 15:06:11
 * @Descriptions: 客户管理-客户列表
 */

import React from 'react'
import {
	Card
} from 'antd'
import {
	connect
} from 'react-redux'
import Grid from './customerList/CustomerListGrid.jsx'
import CustomerListCardExtra from './customerList/CustomerListCardExtra.jsx'
import CustomerListFilter from './customerList/CustomerListFilter.jsx'
import Pagination from './customerList/CustomerListPagination.jsx'
import AddCustomerModal from './modal/AddCustomerModal.jsx'
import ProductWanttedModal from './modal/ProductWantedModal.jsx'
import VisitRecordModal from './modal/VisitRecordModal.jsx'
import VisitRecordWatchModal from './modal/VisitRecordWatchModal.jsx'
import BulkImportModal from './modal/BulkImportModal.jsx'
import FollowRecordModal from './modal/FollowRecordModal.jsx'
import AddVisitCustomerModal from './modal/AddVisitCustomerModal.jsx'
import ImportNewUserModal from './modal/ImportNewUserModal.jsx'
import * as PaginationActionCreater from '../../../../actions/applications/crm/customerManage/customerList/customerListPagination.js'
import * as FilterActionCreater from '../../../../actions/applications/crm/customerManage/customerList/customerListFilter.js'
import * as actionCreater from '../../../../actions/applications/crm/customerManage/customerList.js'
import {
	getCustomerDataActionCreater
} from '../../../../actions/applications/crm/customerManage/customerDataReview.js'

export class CustomerList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.refreshList()
	}

	refreshAll() {
		this.props.refreshList();
		this.props.refreshCustomerData();
	}

	render() {
		return (
			<div>
				<Card
					noHovering
					title="客户列表"
					extra={
						<CustomerListCardExtra refreshList={this.props.refreshList} initPagination={this.props.initPagination} initFilter={this.props.initFilter}/>
					}>
					<CustomerListFilter
						refreshList={this.props.refreshList}
						initPagination={this.props.initPagination}/>
					<Grid/>
					<div style={{textAlign:'center',marginTop:'24px'}}>
						<Pagination refresh={this.props.refreshList}/>
					</div>
				</Card>
				<AddCustomerModal
					initFilter={this.props.initFilter}
					initPagination={this.props.initPagination}
					refreshList={this.refreshAll.bind(this)}/>
				<ProductWanttedModal/>
				<VisitRecordModal/>
				<VisitRecordWatchModal/>
				<BulkImportModal/>
				<FollowRecordModal/>
				<AddVisitCustomerModal/>
				<ImportNewUserModal
					initFilter={this.props.initFilter}
					initPagination={this.props.initPagination}
					refreshList={this.refreshAll.bind(this)}/>
			</div>
		)
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		refreshList: (params) => dispatch(actionCreater.getCustomerListActionCreater(params)),
		refreshCustomerData: () => dispatch(getCustomerDataActionCreater()),
		initPagination: () => dispatch(PaginationActionCreater.initPagination()),
		initFilter: () => dispatch(FilterActionCreater.initFilter())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)
                           