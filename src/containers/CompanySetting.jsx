/*
 * @Author: lcj
 * @Date:   2017-08-10 16:35:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-21 18:16:30
 */

'use strict';

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Form,
	Row,
	Col,
	Radio,
	Input,
	Button,
	message
} from 'antd'
const RadioGroup = Radio.Group
import FormItem from '../components/selfSetting/FormItem.jsx'
import * as actionCreater from '../actions/companySetting.js'
import ChangePswModel from '../components/selfSetting/ChangePswModel.jsx'
import {
	formatDate
} from '../utils/common.js'

let styles = {
	letterButton: {
		marginLeft: '10px',
		color: '#02d3b3',
		cursor: 'pointer'
	},
	container: {
		display: 'flex',
		alignItems: 'center',
	},
	button: {
		display: 'block',
		width: '146px',
		height: '38px',
		borderRadius: '80px',
		margin: '20px auto',
		background: '#02d3b3',
		color: 'white'
	}
}

export class SelfSetting extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						message.success('用户信息保存成功!');
					}
				}
				saveUserDetail(values, cb)
			}
		});
	}

	componentDidMount() {
		if (!this.props.companyLogined) {
			this.props.history.replace('/');
		}
	}

	componentWillMount() {
		this.props.initSelfSetting();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<div className='bodyContainer'>
				<Form onSubmit={this.handleSubmit.bind(this)} layout="inline">
					<Row className="shadowBox">

				        <FormItem
				          	label="姓名"
				          	formId="employee_name"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{this.props.employee_name&&this.props.employee_name.value}</p>
				        </FormItem>

				        <FormItem
				          	label="性别"
				          	formId="sex"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{['男','女'][this.props.sex.value-1]}</p>
				        </FormItem>
				    </Row>

				    <Row className="shadowBox">

				        <FormItem
				          	label="企业登录密码"
				          	formId="password"
				          	getFieldDecorator={getFieldDecorator}>
				          	<div style={styles.container}>
				            	<p>******</p>
				            	<p
				            		style={styles.letterButton}
				            		onClick={this.props.openChangePswModel}>修改密码</p>
				          	</div>
				        </FormItem>

				        <FormItem
				          	label="汇报对象"
				          	formId="superior_name"
				          	getFieldDecorator={getFieldDecorator}>
			            	<p>{this.props.superior&&this.props.superior.value}</p>
				        </FormItem>

						<FormItem
				          	label="主属部门"
				          	formId="department"
				          	getFieldDecorator={getFieldDecorator}>
			            	<p>{this.props.department&&this.props.department.value}</p>
				        </FormItem>

				        <FormItem
				          	label="职位"
				          	formId="position"
				          	getFieldDecorator={getFieldDecorator}>
			            	<p>{this.props.position&&this.props.position.value}</p>
				        </FormItem>

				        <FormItem
				          	label="入职日期"
				          	formId="create_time"
				          	getFieldDecorator={getFieldDecorator}>
			            	<p>
			            		{formatDate(this.props.create_time&&this.props.create_time.value)}
			            	</p>
				        </FormItem>

					</Row>

					<Row className="shadowBox">

						<FormItem
				          	label="手机"
				          	formId="telephone"
				          	getFieldDecorator={getFieldDecorator}>
			            	<p>{this.props.telephone&&this.props.telephone.value}</p>
				        </FormItem>

				        <FormItem
				          	label="邮箱"
				          	formId="email"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{this.props.email&&this.props.email.value}</p>
				        </FormItem>

				        <FormItem
				          	label="微信"
				          	formId="webchat"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{this.props.webchat&&this.props.webchat.value}</p>
				        </FormItem>

				        <FormItem
				          	label="QQ"
				          	formId="qq"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{this.props.qq&&this.props.qq.value}</p>
				        </FormItem>

 						<FormItem
				          	label="生日"
				          	formId="birthday"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>
				            	{formatDate(this.props.birthday&&this.props.birthday.value)}
				            </p>
				        </FormItem>

				        <FormItem
				          	label="地址"
				          	formId="address"
				          	getFieldDecorator={getFieldDecorator}>
				            <p>{this.props.address&&this.props.address.value}</p>
				        </FormItem>

					</Row>
				</Form>
				<ChangePswModel forCompany/>
			</div>
		)
	}
}

function onFieldsChange(props, fields) {
	// console.log(props, fields)
}

function mapPropsToFields(props) {
	return Object.assign({}, props)
}

const SelfSettingWithForm = Form.create({
	onFieldsChange,
	mapPropsToFields
})(SelfSetting);

function mapStateToProps(state) {
	let selfSetting = state.selfSetting;
	let returnSetting = {};
	for (let key in selfSetting) {
		returnSetting[key] = {
			value: selfSetting[key]
		}
	}
	returnSetting.companyLogined = state.global.companyLogined;
	return returnSetting;
}

function mapDispatchToProps(dispatch) {
	return {
		initSelfSetting: () => dispatch(actionCreater.getUserDetailActionCreater()),
		openChangePswModel: () => dispatch(actionCreater.switchChangePswModelActionCreater(true)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfSettingWithForm)