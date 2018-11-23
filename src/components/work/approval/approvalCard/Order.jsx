/*
 * @Author: lcj
 * @Date:   2017-08-08 12:58:47
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 13:35:15
 */

'use strict';
import React from 'react'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/work/approval/approvalCard/orderModel.js'
export class Order extends React.Component {

	handleClick() {
		let name = this.props.children;
		let id = this.props.id;
		this.props.updateOrderModelData(name, id)
		this.props.showOrderModel();
	}

	render() {
		return (
			<span
				style={{cursor:'pointer',color:'#02d3b3'}}
				onClick={this.handleClick.bind(this)}>
				{this.props.children}
			</span>
		)
	}
}

function mapStateToProps() {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		showOrderModel:
			() => dispatch(actionCreater.onOrderModelSwitchActionCreater(true)),
		updateOrderModelData:
			(name, id) => dispatch(actionCreater.updateOrderModelDataActionCreater(name, id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)