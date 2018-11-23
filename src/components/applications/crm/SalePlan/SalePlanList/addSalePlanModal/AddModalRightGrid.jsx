/*
 * @Author: lcj
 * @Date:   2017-08-25 20:06:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 14:41:11
 * @Descriptions: 销售计划-添加销售计划右侧表单逻辑组件
 */

import Grid from '../../../../../common/Grid.jsx'
import React from 'react'
import {
	Input,
	Button,
	Row,
	Col
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalRightGrid.js'
import {
	addModalLeftFormChangeFormDataActionCreater
} from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'

const columnDefs = {
	"customer_name": "客户姓名",
	"customer_type": "客户类型",
	"hospital_name": "归属医院",
	"customer_phone": "联系方式"
}

export class AddModalRightGrid extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			api: undefined
		}
	}

	componentWillReceiveProps(props) {
		if (props.visitType === this.props.visitType)
			return false;
		this.props.updateGridRowDate();
	}

	saveSelect() {
		const gridApi = this.state.api;
		const name = ['phone_customer_ids', 'onsite_customer_ids'][this.props.visitType - 1]
		this.props.updateFormDate(name, gridApi.getSelectedRows())
	}
    handleBtn(){
       this.props.updateGridRowDate()
	}
	render() {
		return (
			<div>
				<Row>
					<Col span={12}>
						<Input
							placeholder="输入客户姓名/电话进行查询"
							value={this.props.filter}
							onChange={(e)=>this.props.updateGridData('filter',e.target.value)}/>
					</Col>
					<Col span={6} offset={1}>
						<Button icon="search"
							className="mainButton" onClick={this.handleBtn.bind(this)}/>
					</Col>
					<Col span={4} offset={1}>
						<Button style={{float:'right'}}
							className="mainButton"
							onClick={this.saveSelect.bind(this)}>
							保存
						</Button>
					</Col>
				</Row>
				<Grid
					rowData={this.props.data}
					componentDidMount={(that)=>{
						this.setState({
							api:that.gridApi
						})
					}}
					columnDefs={columnDefs}
					selection/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.addModalRightGrid.data,
		filter: state.addModalRightGrid.filter,
		visitType: state.addModalRightGrid.visitType,
	}
}

function mapDispatchToProps(dispacth) {
	return {
		updateGridData: (name, value) => dispacth(actionCreater.addModalRightGridUpdateData({
			name,
			value
		})),
		updateFormDate: (name, value) => dispacth(addModalLeftFormChangeFormDataActionCreater({
			name,
			value
		})),
		updateGridRowDate: () => dispacth(actionCreater.getModalRightGridData())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModalRightGrid)