/*
 * @Author: lcj
 * @Date:   2017-08-07 10:34:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 14:05:58
 */

'use strict';

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	getApproval
} from '../../../utils/interface.js'
import * as actionCreater from '../../../actions/work/approval/topStateBar.js'
import {
	changePageInfActionCreater
} from '../../../actions/work/approval/pagination.js'
import {
	cancelFilterActionCreater
} from '../../../actions/work/approval/filter.js'

let styles = {
	topStateBar: {
		height: '48px',
		background: 'white',
		marginBottom: '16px'
	},
	stateBlock: {
		height: '48px',
		lineHeight: '48px',
		width: '136px',
		textAlign: 'center',
		display: 'inline-block',
		borderRight: '2px #ebecf1 solid',
		cursor: 'pointer'
	},
	stateBlockTitle: {
		fontSize: '14px',
	}
}

//整个头部状态栏
export class TopStateBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let StateBlocks = connect(mapStateToProps, mapDispatchToProps)(StateBlock)
		return (
			<div>
				<div style={styles.topStateBar}>
					<StateBlocks title="我的申请" selfType={0} refreshApprovals={this.props.refreshApprovals}/>
					<StateBlocks title="待我审核" selfType={1} refreshApprovals={this.props.refreshApprovals}/>
					<StateBlocks title="我已审核" selfType={2} refreshApprovals={this.props.refreshApprovals}/>
				</div>
			</div>
		)
	}
}

//状态Item
class StateBlock extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		this.props.changeType(this.props.selfType);
		this.props.initPagination();
		this.props.initFilter();
		this.props.refreshApprovals({
			approval_type: this.props.selfType,
			approval_status: 0,
			start_tiem: null,
			end_time: null,
			page: 1,
			limit: 5
		})
	}

	render() {
		let selected = (this.props.approvalType === this.props.selfType);
		let selectedStyle = selected ? {
			background: '#02d9b8',
			color: 'white'
		} : {
			color: '#333b4e'
		};
		return (
			<div
				style={Object.assign({},styles.stateBlock,selectedStyle)}
				onClick={this.handleClick.bind(this)}>
				<p style={styles.stateBlockTitle}>{this.props.title}</p>
			</div>
		)
	}

}

function mapDispatchToProps(dispatch) {
	return {
		changeType: (type) => dispatch(actionCreater.typeActionCreater(type)),
		initPagination: () => dispatch(changePageInfActionCreater(1, 5)),
		initFilter: () => dispatch(cancelFilterActionCreater())
	}
}

function mapStateToProps(state) {
	return ({
		approvalType: state.topStateBar.approvalType,
	})
}

export default TopStateBar;