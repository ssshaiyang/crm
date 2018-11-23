/*
 * @Author: lcj
 * @Date:   2017-08-25 19:18:25
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 10:18:51
 * @Descriptions: 
 */

import React from 'react'
import {
	Button,
	DatePicker,
	Input,
	InputNumber
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'
import * as actionRightCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalRightGrid.js'

import {
	addModalRightGridUpdateData
} from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalRightGrid.js'

export class AddModalLeftForm extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	handleClick(index) {
		let field = {
			name: 'visitType',
			value: index
		}
		this.props.changeRightType(field)
	}

	handleChange(key, value) {
		let field = {
			name: key,
			value: value
		}
		this.props.changeFormData(field)
	}

	render() {
		return (
			<div>
				<div>
					<Item title="执行日期">
						<DatePicker
							onChange={(date)=>this.handleChange.call(this,'execute_time',date)}
							value={this.props.execute_time}
							style={{width:'100%'}}/>
					</Item>
					<Item title="新客户">
						<InputNumber
							placeholder="计划开发客户数量"
							value={this.props.new_customer_target}
							onChange={(value)=>this.handleChange.call(this,'new_customer_target',value)}
							style={{width:'100%'}}/>
					</Item>
					<Item title="电话拜访">
						<Input
							placeholder="计划电话拜访客户数量"
							style={{cursor:'pointer'}}
							onClick={this.handleClick.bind(this,1)}
							value={this.props.phone_customer_ids.length}/>
					</Item>
					<Item title="上门拜访">
						<Input
							placeholder="计划上门拜访客户数量"
							style={{cursor:'pointer'}}
							onClick={this.handleClick.bind(this,2)}
							value={this.props.onsite_customer_ids.length}/>
					</Item>
					<Item title="计划名称">
						<Input
							value={this.props.sale_plan_name}
							onChange={(e)=>this.handleChange.call(this,'sale_plan_name',e.target.value)}
							placeholder="输入销售计划名称"/>
					</Item>
					<Item title="计划备注" nextLine>
						<Input.TextArea
							value={this.props.sale_plan_remark}
							onChange={(e)=>this.handleChange.call(this,'sale_plan_remark',e.target.value)}
							placeholder="点击输入备注内容"/>
					</Item>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const formState = state.addModalLeftForm;
	return {
		sale_plan_name: formState.sale_plan_name,
		new_customer_target: formState.new_customer_target,
		phone_customer_ids: formState.phone_customer_ids,
		onsite_customer_ids: formState.onsite_customer_ids,
		sale_plan_remark: formState.sale_plan_remark,
		execute_time: formState.execute_time
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeFormData: (field) => dispatch(actionCreater.addModalLeftFormChangeFormDataActionCreater(field)),
		changeRightType: (field) => dispatch(addModalRightGridUpdateData(field)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModalLeftForm)

class Item extends React.Component {
	render() {
		return (
			<div style={{margin:'10px',display:'flex'}}>
				<span style={{display:'inline-block',width:'75px',fontSize:'16px'}}>
					{this.props.title}
				</span>
				<div style={{display:this.props.nextLine?'block':'inline-block',flex:1}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}