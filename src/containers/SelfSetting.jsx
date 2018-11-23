/*
 * @Author: lcj
 * @Date:   2017-08-10 16:35:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:37:35
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
import * as actionCreater from '../actions/selfSetting.js'
import {
	saveUserDetail
} from '../utils/interface.js'
import error from '../utils/error-message.json'
import ChangePswModel from '../components/selfSetting/ChangePswModel.jsx'
import ChangePhoneModel from '../components/selfSetting/ChangePhoneModel.jsx'
import ChangeAvatarModel from '../components/selfSetting/ChangeAvatarModel.jsx'

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

	componentWillMount() {
		this.props.initSelfSetting();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		console.log(this.props.head_pictrue)
		return (
			<div className='bodyContainer'>
				<Form onSubmit={this.handleSubmit.bind(this)} layout="inline">
					<Row className="shadowBox">
			        
				        <FormItem
				          	label="上传头像"
				          	formId="avatar"
				          	getFieldDecorator={getFieldDecorator}>
				          	<div style={styles.container}>
				            	<img src={this.props.head_pictrue.value} alt="avatar" style={{width:'80px',height:'80px'}}/>
				            	<p
				            		style={styles.letterButton}
				            		onClick={this.props.openChangeAvatarModel}>
				            		上传头像
				            	</p>
				            </div>
				        </FormItem>
 
					</Row>

					<Row className="shadowBox">

				        <FormItem
				          	label="姓名"
				          	formId="username"
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

				        <FormItem
				          	label="性别"
				          	formId="sex"
				          	getFieldDecorator={getFieldDecorator}>
				            <RadioGroup>
				              	<Radio value="1">男</Radio>
				              	<Radio value="2">女</Radio>
				            </RadioGroup>
				        </FormItem>

				        <FormItem
				          	label="昵称"
				          	formId="nickname"
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

				        <FormItem
				          	label="密码"
				          	formId="nickname"
				          	getFieldDecorator={getFieldDecorator}>
				          	<div style={styles.container}>
				            	<p>******</p>
				            	<p
				            		style={styles.letterButton}
				            		onClick={this.props.openChangePswModel}>修改密码</p>
				          	</div>
				        </FormItem>

					</Row>

					<Row className="shadowBox">

						<FormItem
				          	label="手机"
				          	formId="phone"
				          	getFieldDecorator={getFieldDecorator}>
				          	<div style={styles.container}>
				            	<p>{this.props.phone.value}</p>
				            	<p
				            		style={styles.letterButton}
				            		onClick={this.props.openChangePhoneModel}>修改手机号码</p>
				          	</div>
				        </FormItem>

				        <FormItem
				          	label="邮箱"
				          	formId="email"
				          	rules={[{type: 'email', message: error.EMAILNOTCURRECT}]}
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

				        <FormItem
				          	label="微信"
				          	formId="webchat"
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

				        <FormItem
				          	label="QQ"
				          	formId="qq"
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

				        <FormItem
				          	label="地址"
				          	formId="address"
				          	getFieldDecorator={getFieldDecorator}>
				            <Input />
				        </FormItem>

					</Row>

					<Button style={styles.button} htmlType="submit">保存</Button>
				</Form>
				<ChangePswModel/>
				<ChangePhoneModel/>
				<ChangeAvatarModel/>
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
	return {
		uid: {
			value: selfSetting.uid
		},
		phone: {
			value: selfSetting.phone
		},
		nickname: {
			value: selfSetting.nickname
		},
		head_pictrue: {
			value: selfSetting.head_picture
		},
		username: {
			value: selfSetting.username
		},
		sex: {
			value: selfSetting.sex && selfSetting.sex.toString()
		},
		email: {
			value: selfSetting.email
		},
		webchat: {
			value: selfSetting.webchat
		},
		qq: {
			value: selfSetting.qq
		},
		address: {
			value: selfSetting.address
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
		initSelfSetting: () => dispatch(actionCreater.getUserDetailActionCreater()),
		openChangePswModel: () => dispatch(actionCreater.switchChangePswModelActionCreater(true)),
		openChangePhoneModel: () => dispatch(actionCreater.switchChangePhoneModelActionCreater(true)),
		openChangeAvatarModel: () => dispatch(actionCreater.switchChangeAvatarModelActionCreater(true))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelfSettingWithForm)