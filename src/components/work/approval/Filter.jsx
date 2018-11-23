/*
 * @Author: lcj
 * @Date:   2017-08-07 13:04:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 16:14:22
 */

'use strict';

import React from 'react';
import {
	connect
} from 'react-redux'
import {
	Select,
	DatePicker,
	Input,
	Button
} from 'antd';
import {
	getApproval
} from '../../../utils/interface.js'
const Option = Select.Option;
import * as actionCreater from '../../../actions/work/approval/filter.js'
import {
	changePageInfActionCreater
} from '../../../actions/work/approval/pagination.js'

let styles = {
	filter: {
		width: '100%',
		background: 'white',
		padding: '16px',
		position: 'relative'
	},
	select: {
		width: '80px',
		marginRight: '10px',
	},
	time: {
		marginRight: '10px',
		width: '100px'
	},
	input: {
		display: 'inline-block',
		marginRight: '10px',
		width: '170px'
	},
	filterButton: {
		marginRight: '10px',
		background: '#02d9b8',
		color: 'white'
	},
	cancelFilterButton: {
		background: '#efeff1',
		color: '#989898'
	},
	selectPointer: {
		position: 'absolute',
		width: 0,
		height: 0,
		borderLeft: "6px solid transparent",
		borderRight: "6px solid transparent",
		borderBottom: "10px solid white",
		top: "-10px",
		left: "63px",
	}
}

export class Filter extends React.Component {
	constructor(props) {
		super(props);
	}

	doFilter() {
		let filter = this.props.filter;
		let params = {
			approval_status: filter.approvalStatus,
			start_time: filter.startTime,
			end_time: filter.endTime,
			filter: filter.filter,
			page: 1,
			limit: 5
		};
		this.props.initPagination();
		this.props.refreshApprovals(params);
	}

	cancelFilter() {
		this.props.cancelFilter();
		let params = {
			approval_status: 0,
			start_time: null,
			end_time: null,
			filter: null,
			page: 1,
			limit: 5
		};
		this.props.initPagination();
		this.props.refreshApprovals(params)
	}

	render() {
		let selects = ['全部', '审批中', '已通过', '被拒绝']
		let isShowSelect = this.props.approvalType === 1 ? {
			display: 'none'
		} : {};
		let left = 63 + 136 * this.props.approvalType + 'px';
		return (
			<div style={styles.filter}>
				<div style={Object.assign({},styles.selectPointer,{left:left})}/>
				<Select
					defaultValue="全部"
					style={Object.assign({},styles.select,isShowSelect)}
					onChange={this.props.changeFilterStatus}
					value={selects[this.props.filter.approvalStatus]}>
					<Option value="0">全部</Option>
					<Option value="1">审批中</Option>
					<Option value="2">已通过</Option>
					<Option value="3">被拒绝</Option>
			    </Select>
			    <DatePicker placeholder="发起时间" style={styles.time} onChange={this.props.changeFilterStartTime} value={this.props.filter.startTime}/>
			    <DatePicker placeholder="结束时间" style={styles.time} onChange={this.props.changeFilterEndTime} value={this.props.filter.endTime}/>
				<Input value={this.props.filter.filter} placeholder="输入审核内容、关联表、姓名" style={styles.input} onChange={this.props.changeFilterFilter}/>
				<Button style={styles.filterButton} onClick={this.doFilter.bind(this)}>筛选</Button>
				<Button style={styles.cancelFilterButton} onClick={this.cancelFilter.bind(this)}>清空筛选</Button>
			</div>
		)
	}
}



function mapStateToProps(state) {
	let filter = state.approvalFilter;
	return {
		approvalType: state.topStateBar.approvalType,
		filter: {
			approvalStatus: filter.approvalStatus,
			startTime: filter.startTime,
			endTime: filter.endTime,
			filter: filter.filter
		}
	}
}


function mapDispatchToProps(dispatch) {
	return {
		changeFilterStatus: (status) =>
			dispatch(actionCreater.changeFilterStatusActionCreater(status)),
		changeFilterStartTime: (time, dateString) =>
			dispatch(actionCreater.changeFilterStartTimeActionCreater(time, dateString)),
		changeFilterEndTime: (time, dateString) =>
			dispatch(actionCreater.changeFilterEndTimeActionCreater(time, dateString)),
		changeFilterFilter: (value) =>
			dispatch(actionCreater.changeFilterFilterActionCreater(value.target.value)),
		cancelFilter: () =>
			dispatch(actionCreater.cancelFilterActionCreater()),
		initPagination: () => dispatch(changePageInfActionCreater(1, 5))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);