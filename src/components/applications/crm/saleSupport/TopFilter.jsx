/*
 * @Author: lcj
 * @Date:   2017-09-04 08:04:23
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-11 10:06:50
 * @Descriptions: 销售支持-头部过滤器
 */

import React from 'react'
import {
	DatePicker,
	Input,
	Button,
	Select,
	Row,
	Col
} from 'antd'
const RangePicker = DatePicker.RangePicker;
const Option = Select.Option;

const selectStyle = {
	width: '80px',
	marginLeft: '5px'
}

const colStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

const colSpan = {
	lg: {
		span: 3
	},
	sm: {
		span: 6
	}
}

export default class TopFilter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			approvalTypeOptions: {
				'1': '我的申请',
				'2': '待我审核',
				'3': '我已审核'
			},
			approvalPhaseOptions: {
				'0': '未提交',
				'1': '待审批',
				'2': '已通过',
				'3': '已拒绝'
			}
		}
	}

	componentDidMount(){
		
	}

	changeRange(range) {
		console.log(range)
		this.props.initPagination()
		this.props.onChange('range', range)
		this.props.refresh({
			range: range,
			page: 1,
			limit: 5
		});
	}

	changeApprovalType(value) {
		this.props.initPagination()
		this.props.onChange('approvalType', value)
		this.props.refresh({
			approvalType: value,
			page: 1,
			limit: 5
		});
	}

	changeApprovalPhase(value) {
		this.props.initPagination()
		this.props.onChange('approvalPhase', value)
		this.props.refresh({
			approvalPhase: value,
			page: 1,
			limit: 5
		});
	}

	changeTypes(value) {
		this.props.initPagination()
		this.props.onChange('types', value)
		this.props.refresh({
			types: value,
			page: 1,
			limit: 5
		});
	}

	handleSearch() {
		this.props.initPagination();
		this.props.refresh({
			filter: this.props.filter,
			page: 1,
			limit: 5
		})
	}

	render() {
		return (
			<Row>
				<Col lg={{span:6}}>
					<RangePicker
						value={this.props.range}
						onChange={this.changeRange.bind(this)}/>
				</Col>
				<Col lg={{span:4}} style={colStyle}>
					<span>审核类型</span>
					<Select
						style={selectStyle}
						value={this.props.approvalType}
						onChange={this.changeApprovalType.bind(this)}>
						<Option key="-1">全部</Option>
						{makeOptions(this.state.approvalTypeOptions)}
					</Select>
				</Col>
				<Col {...colSpan} style={colStyle}>
					<span>状态</span>
					<Select
						style={selectStyle}
						onChange={this.changeApprovalPhase.bind(this)}
						value={this.props.approvalPhase}>
						<Option key="-1">全部</Option>
						{makeOptions(this.state.approvalPhaseOptions)}
					</Select>
				</Col>
				<Col {...colSpan} style={colStyle}>
					<span>类型</span>
					<Select
						style={selectStyle}
						onChange={this.changeTypes.bind(this)}
						value={this.props.types}>
						<Option key="-1">全部</Option>
						{makeOptions(this.props.typeOptions)}
					</Select>
				</Col>
				<Col  offset={1}>
					{this.props.showFilter?
						<div style={{display:'inline-block'}}>
							<Input
								style={{width:'60%'}}
								onChange={(e)=>this.props.onChange('filter',e.target.value)}
								placeholder={this.props.placeholder}
								value={this.props.filter}/>
							<Button
								className="mainButton"
								style={{margin:'0 5px'}}
								onClick={this.handleSearch.bind(this)}>
								搜索
							</Button>
						</div>
						:false}
					<Button
						icon="plus"
						className="mainButton"
						onClick={this.props.addApplyModal}
						style={{fontSize:'14px',float:'right'}}/>
				</Col>
			</Row>
		)
	}
}

function makeOptions(options = {}) {
	let keys = Object.keys(options);
	return keys.map(key => (
		<Option key={key.toString()}>
			{options[key]}
		</Option>
	))
}

TopFilter.defaultProps = {
	typeOptions: {},
	placeholder: '',
	types: '-1',
	approvalType: '-1',
	approvalPhase: '-1',
	filter: '',
	range: [],
	showFilter: true,
	onChange: () => false,
	initPagination: () => false,
	refresh: () => false,
	addApplyModal: () => false,
}