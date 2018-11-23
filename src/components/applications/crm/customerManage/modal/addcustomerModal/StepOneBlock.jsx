/*
 * @Author: lcj
 * @Date:   2017-08-22 10:57:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 12:56:06
 * @Descriptions: 客户管理-添加客户-第一步
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Form,
	Input,
	Select,
	Row,
	Col,
	Button
} from 'antd'
const Option = Select.Option;
import ERROR from '../../../../../../utils/error-message.json'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
const formItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 8
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 16
		},
	},
};
const rowItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 4
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 20
		},
	},
}
export class StepOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hospitalName: '',
			hospital_address:''
		}
	}

	makeOptions(options) {
		let keys = Object.keys(options)
		return keys.map(key => (
			<Option value={key.toString()} key={key.toString()}>
				{options[key]}
			</Option>
		))
	}

	componentWillMount() {
		const modalType = this.props.modalType
		this.props.getHospitalOptions(null, modalType === 1);
		this.props.getHospitalAddressOptions();
		// this.props.getHospitalDepartmentOptions();
		modalType === 0 && this.initCreaterModal.call(this)
	}

	componentWillReceiveProps(nextProps){
	
	}

	initCreaterModal() {
		this.props.completeInf({
			name: 'customer_stage',
			value: 1
		});
		this.props.selectfirstListItem('customer_type', this.props.customerTypeOptions)
	}

	selectHospital(value) {
		// this.props.getHospitalDepartmentOptions(value);
		this.props.getHospitalAddress(value);
		console.log(value)
		const hospitalAddress = this.props.hospitalAddressOptions[value];
		console.log(hospitalAddress)
		
		this.setState({
			hospital_address: hospitalAddress
		}, () => {
			console.log(this.state.hospital_address)
		});
		this.props.form.setFieldsValue({
			hospital_address:hospitalAddress
		},() => {
			console.log(this.state.hospital_address)
		})
		console.log(this.state.hospital_address)
	}

	onSearchHospital(e) {
		e.preventDefault();
		this.props.getHospitalOptions(this.state.hospitalName)
		this.props.form.setFieldsValue({
			'hospital_id': ''
		})
	}

	nextStep() {
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.changeStep(1);
			}
		})
	}

	cancelStep() {
		this.props.closeModal();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div>
				<div className="shadowCard" style={{padding:'20px 40px 0'}}>
					<Form>
						<Row>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={12}
								itemName="customer_type"
								label="客户类型"
								rules={
									[{ required: true, message: ERROR.CUSTMOER_TYPE_REQUIRED }]
								}>
									<Select>
										{this.makeOptions(this.props.customerTypeOptions)}
									</Select>
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={12}
								itemName="customer_stage"
								label="客情阶段"
								rules={
									[{ required: true, message: ERROR.CUSTMOER_PHASE_REQUIRED }]
								}>
									{
										this.props.modalType?
										<Select>
											{this.makeOptions(this.props.customerPhaseOptions)}
										</Select>:
										<p>新开发客户</p>
									}
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={24}
								itemName="customer_name"
								row
								label="客户姓名"
								rules={
									[{ required: true, message: ERROR.CUSTOMER_NAME_REQUIRED }]
								}>
									<Input/>
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={12}
								itemName="customer_phone"
								label="联系方式">
									<Input/>
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={12}
								itemName="customer_webchat"
								label="微信号">
									<Input/>
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={24}
								itemName="customer_email"
								row
								label="邮箱地址"
								rules={
									[{ type: 'email', message: ERROR.EMAILNOTCURRECT, }]
								}>
									<Input/>
							</FormItem>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={12}
								itemName="hospital_id"
								label="归属医院"
								rules={
									[{ required: true, message: ERROR.HOSPITAL_REQUIRED }]
								}>
									<Select
										onChange={this.selectHospital.bind(this)}>
										{this.makeOptions(this.props.hospitalOptions)}
										{/*<Option value="0">无该医院</Option>*/}
									</Select>
							</FormItem>
							<Col span={11} offset={1}>
								<Form.Item>
									<Col span={17}>
							            <Input
							            	placeholder="输入医院名称"
							            	value={this.state.hospitalName}
							            	onChange={(e)=>this.setState({hospitalName:e.target.value})}/>
							        </Col>
							        <Col span={6} offset={1}>
							        	<Button
							        		className="mainButton"
							        		onClick={this.onSearchHospital.bind(this)}>
							        		搜索
							        	</Button>
							        </Col>
								</Form.Item>
							</Col>
							<Col span={12}>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								
								itemName="hospital_department"
								label="所属科室"
								rules={
									[{ required: true, message: ERROR.HOSPITAL_DEPARTMENT_REQUIRED }]
								}>
									{/*<Select>
										{this.makeOptions(this.props.hospitalDepartmentOptions)}
									</Select>*/}
									<Input/>
							</FormItem>
							</Col>
							<Col span={11} offset={1}>
								<Form.Item>
						          	{getFieldDecorator('department_leader', {
						            rules: [],
						          	})(
						            	<Input placeholder="输入科室负责人姓名"/>
						          	)}
						        </Form.Item>
							</Col>
							<FormItem 
								getFieldDecorator={getFieldDecorator}
								col={24}
								itemName="hospital_address"	
								value={this.state.hospital_address}
								label="医院地址"
								rules={
									[{ required: true, message: ERROR.HOSPITAL_ADDRESS_REQUIRED,
									 }]

								}>
									<Input disabled ></Input>
							</FormItem>

				        </Row>
					</Form>
				</div>
				<div style={{textAlign:'center',marginTop:'18px'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'80px'}}
						onClick={this.cancelStep.bind(this)}>
						取消
					</Button>
					<Button
						className="mainButton"
						onClick={this.nextStep.bind(this)}>
						下一步
					</Button>
				</div>
			</div>
		)
	}
}

class FormItem extends React.Component {
	render() {
		const Layout = this.props.row ? rowItemLayout : formItemLayout;
		return (
			<Col span={this.props.col}>
				<Form.Item
				{...Layout}
					label={this.props.label}>
		          	{this.props.getFieldDecorator(this.props.itemName, {
		            rules: this.props.rules,
		          	})(
		            	this.props.children
		          	)}
		        </Form.Item>
	        </Col>
		)
	}
}

FormItem.defaultProps = {
	col: 24,
	itemName: 'itemName',
	rules: [],
	label: 'label'
}

function onFieldsChange(props, fields) {
	props.completeInf(fields)
}

function mapPropsToFields(props) {
	let fields = {};
	let data = props.datas;
	for (let key in props.datas) {
		fields[key] = {
			value: props.datas[key] && props.datas[key].toString()
		}
	}
	return fields
}

const StepOneWithForm = Form.create({
	onFieldsChange,
	mapPropsToFields
})(StepOne)

function mapStateToProps(state) {
	return {
		//0为添加用户,1为修改用户
		modalType: state.addCustomerModal.modalType,
		customerTypeOptions: state.customerListFilter.customerTypeOptions,
		customerPhaseOptions: state.customerListFilter.customerPhaseOptions,
		datas: state.addCustomerModal.data,
		hospitalOptions: state.addCustomerModal.hospitalOptions,
		hospitalDepartmentOptions: state.addCustomerModal.hospitalDepartmentOptions,
		hospitalAddressOptions:state.addCustomerModal.hospitalAddressOptions
	}
}

function mapDispatchToProps(dispatch) {
	return {
		completeInf: (fields) => dispatch(actionCreater.completeCustomerInf(fields)),
		getHospitalOptions: (hospital_name, cb) => dispatch(actionCreater.getHospitalOptionsActionCreater(hospital_name, cb)),
		// getHospitalDepartmentOptions: (hospital_id) => dispatch(actionCreater.getHospitalDepartmentOptionsActionCreater(hospital_id)),
		getHospitalAddress: (hospital_id) => dispatch(actionCreater.getHospitalAddressActionCreater(hospital_id)),
		selectfirstListItem: (itemName, options) => dispatch(actionCreater.selectfirstListItemActionCreater(itemName, options)),
		getHospitalAddressOptions:() => dispatch(actionCreater.getHospitalAdressOptionsActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StepOneWithForm)