/*
 * @Author: lcj
 * @Date:   2017-08-23 11:56:50
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 14:00:57
 * @Descriptions: 客户列表-查看按钮
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/productWantedModal.js'

let styles = {
	container: {
		cursor: 'pointer'
	}
}

export class ProductWanttedRendder extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		const customer_id = this.props.data.customer_id;
		const customer_name = this.props.data.customer_name;
		this.props.getProductWantedList(customer_id, customer_name);
		this.props.openModal()
	}

	render() {
		return (
			<div
				style={styles.container}
				onClick={this.handleClick.bind(this)}>
				查看
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: () => dispatch(actionCreater.switchProductWantedModalVisibleActionCreater(true)),
		getProductWantedList: (customerId, customerName) => dispatch(actionCreater.getProductWantedListActionCreater(customerId, customerName))
	}
}

export default connect(null, mapDispatchToProps)(ProductWanttedRendder)