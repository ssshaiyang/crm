/*
 * @Author: lcj
 * @Date:   2017-08-08 12:44:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 17:25:52
 */
'use strict';

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Modal,
	Col
} from 'antd'
import * as actionCreater from '../../../../actions/work/approval/approvalCard/orderModel.js'

let styles = {
	model: {
		color: '#050507'
	},
	leftItem: {
		flex: 1,
		textAlign: 'right'
	},
	rightItem: {
		flex: 3,
		textAlign: 'left',
		paddingLeft: '10px'
	},
	modelTitle: {
		fontSize: '16px',
		textAlign: 'center',
		lineHeight: '16px'
	},
	orderId: {
		fontSize: '12px',
		textAlign: 'right',
		color: '#737373',
		lineHeight: '12px'
	},
	block: {
		border: '1px #c1c1c1 solid',
		marginBottom: '20px',
	},
	blockTitle: {
		fontSize: '16px',
		color: 'white',
		background: '#333b4e',
		height: '40px',
		lineHeight: '40px',
	}
}

export class OrderModel extends React.Component {

	makeBlocks() {
		let datas = this.props.data;
		delete datas['单据编号'];
		delete datas.title;
		let blocks = [];
		for (let data in datas) {
			blocks.push(<Block data={datas[data]} title={data} key={data}/>)
		}
		return blocks;
	}

	render() {
		let data = this.props.data;
		return (
			<Modal
				visible={this.props.visible}
				footer={false}
				closable={true}
				onCancel={this.props.cancelModel}
				style={styles.model}>
				<p style={styles.modelTitle}>{data.title}</p>
				<p style={styles.orderId}>单据编号：{data['单据编号']}</p>
				{this.makeBlocks.call(this)}
			</Modal>
		)
	}
}

class Block extends React.Component {

	makeInfs() {
		let data = this.props.data;
		let infs = [];
		for (let title in data) {
			infs.push(<Inf title={title} content={data[title]} key={title}/>)
		}
		return infs;
	}

	render() {
		let data = this.props.data
		return (
			<div style={styles.block}>
				<div style={styles.blockTitle}><p style={{width:'25%',textAlign:'right'}}>{this.props.title}</p></div>
				{this.makeInfs.call(this)}
			</div>
		)
	}
}

class Inf extends React.Component {
	render() {
		return (
			<div style={{display:'flex',margin:'10px 0',fontSize:'14px'}}>
				<p style={styles.leftItem}>{this.props.title}</p>
				<p style={styles.rightItem}>{this.props.content}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.approvalOrderModel.data,
		visible: state.approvalOrderModel.visible
	}
}

function mapDispatchToProps(dispatch) {
	return {
		cancelModel: () => dispatch(actionCreater.onOrderModelSwitchActionCreater(false))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderModel)