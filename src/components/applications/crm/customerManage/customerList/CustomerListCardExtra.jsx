/*
 * @Author: lcj
 * @Date:   2017-08-21 17:40:11
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:45:49
 * @Descriptions: 客户列表-右上方搜索
 */

import React from 'react'
import {
	Input,
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/customerList/customerListCardExtra.js'
import * as addCustomerModalActionCreater from '../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'

let styles = {
	searchButton: {
		width: "59px",
		margin: '0 15px 0 5px',
		fontSize: '16px'
	},
	addButton: {
		fontSize: '16px'
	}
}

export class CustomerListCardExtra extends React.Component {
	constructor(props) {
		super(props);
	}

	onSearch() {
		const value = this.props.value;
		this.props.initPagination();
		this.props.initFilter();
		let params = {
			customer_type: -1,
			customer_stage: -1,
			page: 1,
			limit: 5
		}
		this.props.refreshList(params);
	}

	render() {
		return (
			<div style={{display:'flex',marginTop:"10px"}}>
				<Input
					value={this.props.value}
					placeholder="输入客户ID/姓名/联系方式..."
					onChange={this.props.changeSearchInputValue}
					onPressEnter={this.onSearch.bind(this)}/>
				<Button
					icon="search"
					className="mainButton"
					style={styles.searchButton}
					onClick={this.onSearch.bind(this)}/>
				<Button
					icon="plus"
					className="mainButton"
					onClick={this.props.openAddCustomerModal}
					style={styles.addButton}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const extra = state.customerListCardExtra
	return {
		value: extra.searchInputValue
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeSearchInputValue: (e) => dispatch(actionCreater.changeSearchInputValue(e.target.value)),
		openAddCustomerModal: () => dispatch(addCustomerModalActionCreater.openAddCustomerModel(0))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListCardExtra)