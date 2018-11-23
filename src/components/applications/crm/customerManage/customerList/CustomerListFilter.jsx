/*
 * @Author: lcj
 * @Date:   2017-08-21 18:06:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:07:07
 * @Descriptions: 客户列表-头部过滤选项
 */

import React from 'react'
import {
	Select,
	Button,
	Row,
	Col
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/customerList/customerListFilter.js'
import {
	switchBulkImportModalVisible
} from '../../../../../actions/applications/crm/customerManage/modal/bulkImportModal.js'
const Option = Select.Option

let styles = {
	container: {
		marginBottom: '24px'
	},
	importButton: {
		float: 'right'
	}
}

let SelectCol = (title = 'title', data = [], onChange = () => false, value = "0") => (
	<Col span={6}>
		<Row type="flex" align="middle">
			<Col md={{span:8}} xs={{span:10}}>
				<span>{title}</span>
			</Col>
			<Col md={{span:16}} xs={{span:14}}>
				<Select
					defaultValue="0"
					value={value}
					style={{width:'100%'}}
					onChange={onChange}>
					{data.map(option=>(
						<Option value={option.key} key={option.key}>
							{option.value}
						</Option>
					))}
			    </Select>
		    </Col>
	    </Row>
	</Col>
)

export class CustomerListFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		//初始化客情阶段select
		this.props.initPhaseList();
		//初始化客户类型select
		this.props.initTypeList();
	}

	/**
	 * [select组件的change事件]
	 * @param  {[type]} changedSelectId [0则change的时客户类型,1为客情阶段]
	 * @param  {[type]} value           [修改以后的value]
	 */
	handleChange(changedSelectId, value) {
		changedSelectId ? this.props.changePhaseValue(value) : this.props.changeTypeValue(value);
		this.props.initPagination();
		let params = {
			page: 1,
			limit: 5
		}
		this.props.refreshList(params);
	}

	makeSelectCol(colNumber, additionNode = false) {
		const title = ['客户类型', '客情阶段'][colNumber];
		const options = [this.props.customerTypeOptions, this.props.customerPhaseOptions][colNumber];
		const value = [this.props.customerType, this.props.customerPhase][colNumber]
		const keys = Object.keys(options)
		return (
			<Col span={6}>
				<Row type="flex" align="middle">
					<Col md={{span:8}} xs={{span:10}}>
						<span>{title}</span>
					</Col>
					<Col md={{span:16}} xs={{span:14}}>
						<Select
							defaultValue="0"
							value={value}
							style={{width:'100%'}}
							onChange={this.handleChange.bind(this,colNumber)}>
							{additionNode}
							{keys.map(key=>(
								<Option value={key} key={key}>
									{options[key]}
								</Option>
							))}
					    </Select>
				    </Col>
			    </Row>
			</Col>
		)
	}

	render() {
		const {
			customerType,
			customerPhase,
			customerTypeOptions,
			customerPhaseOptions
		} = this.props;
		const allType = <Option value={"-1"} key={"-1"}>所有类型</Option>
		const allPhase = <Option value={"-1"} key={"-1"}>所有客户</Option>
		return (
			<Row gutter={20} style={styles.container}>
				{this.makeSelectCol.call(this,0,allType)}
				{this.makeSelectCol.call(this,1,allPhase)}
				<Col span={12}>
					<Button
						className="mainButton"
						style={styles.importButton}
						onClick={this.props.openImportModal}>
						批量导入
					</Button>
				</Col>
			</Row>
		)
	}
}

function mapStateToProps(state) {
	const filter = state.customerListFilter
	return {
		customerType: filter.customerType,
		customerTypeOptions: filter.customerTypeOptions,
		customerPhase: filter.customerPhase,
		customerPhaseOptions: filter.customerPhaseOptions
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeTypeValue: (value) => dispatch(actionCreater.changeTypeSelectValue(value)),
		changePhaseValue: (value) => dispatch(actionCreater.changePhaseSelectValue(value)),
		initTypeList: () => dispatch(actionCreater.getCustomerTypeOptions()),
		initPhaseList: () => dispatch(actionCreater.getCustomerPhaseOptions()),
		openImportModal: () => dispatch(switchBulkImportModalVisible(true))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListFilter)