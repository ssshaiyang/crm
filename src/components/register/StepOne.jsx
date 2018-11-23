/*
 * @Author: lcj
 * @Date:   2017-08-07 08:27:29
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 16:54:06
 */

'use strict';

import React from 'react'
import {
	Form,
	Input,
	Button,
	Icon,
	Row,
	Col,
	Checkbox
} from 'antd'
import {
	Link
} from 'react-router-dom'
const FormItem = Form.Item
import {
	register,
	sendPhoneCode
} from '../../utils/interface.js'
import error from '../../utils/error-message.json'
import StepTwo from './StepTwo.jsx'

let styles = {
	title: {
		fontSize: '24px',
		letterSpacing: '2px',
		marginBottom: '2%'
	},
	form: {
		padding: '0 20% 0 20%',
		textAlign: 'left',
	},
	submitButton: {
		background: '#00b8ae',
		color: 'white',
		fontSize: '18px',
		width: '100%',
		height: '40px',
		margin: '2% 0'
	},
	link: {
		color: '#c6c6c6',
		fontSize: '14px'
	},
	codeButton: {
		background: '#00b8ae',
		color: 'white',
		width: '100%'
	}
}

export class StepOne extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			codeButtonValue: '获取验证码',
			codeButtonDisabled: false,
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				sessionStorage.setItem(TOKENNAME, res.data.token);
				sessionStorage.setItem('uid', res.data.uid);
				this.props.changeStep(StepTwo);
			}
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				register(values, cb.bind(this))
			}
		})
	}

	//手机号正确时才能获取验证码
	changeCodeVisible() {
		if (!this.props.form.getFieldError('phone') && !this.state.codeButtonDisabled)
			this.setState({
				codeButtonDisabled: true
			})
		if (this.props.form.getFieldError('phone') && this.state.codeButtonValue === '获取验证码')
			this.setState({
				codeButtonDisabled: false
			})
	}

	getCode() {
		this.setState({
			codeButtonDisabled: true,
		});
		sendPhoneCode({
			phone: this.props.form.getFieldValue('phone')
		})
		this.changeButtonStatus.call(this, 60);
	}

	changeButtonStatus(t) {
		if (t > 0) {
			this.setState({
				codeButtonValue: t + '秒后获取验证码'
			})
			setTimeout(() => this.changeButtonStatus.call(this, t - 1), 1000)
		} else {
			this.setState({
				codeButtonValue: '获取验证码',
				codeButtonDisabled: false
			})
		}
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const formItemLayout = {
			labelCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 6
				},
			},
			wrapperCol: {
				xs: {
					span: 24
				},
				sm: {
					span: 14
				},
			},
		};
		let codeButtonBg = {
			background: this.state.codeButtonDisabled ? 'gray' : '#00b8ae'
		}
		let registerButtonBg = {
			background: !this.state.premission ? 'gray' : '#00b8ae'
		}
		return (
			<div style={{width:'100%'}}>
				<p style={styles.title}>注册</p>
				<Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
					<FormItem
						{...formItemLayout}
						label="手机号码"
			        >
						{getFieldDecorator('phone', {
							rules: [
								{required: true, message: error.PHONE_REQUIRED},
								{len:11,message:error.PHONE_LENGTH_ERROR},
								{whitespace:true,message:error.PHONE_SPACE_ERROR},
								{validator:(rule, value, cb)=>!Number.isNaN(-value)?cb():cb(error.PHONE_TYPE_ERROR)}
							],
						})(
						    <Input />
						)}
			        </FormItem>
					<FormItem
						{...formItemLayout}
						label="验证码"
			        >
						{getFieldDecorator('code', {
							rules: [
								{required: true, message: error.CODE_REQUIRED},
								{len:6,message:error.CODE_LENGTH_ERROR}
							],
						})(
							<Row gutter={20}>
								<Col md={{span:13}} xs={{span:24}}>
						    		<Input />
								</Col>
								<Col md={{span:11}} xs={{span:24}}>
									<Button 
										disabled={this.state.codeButtonDisabled}
										style={Object.assign({},styles.codeButton,codeButtonBg)}
										onClick={this.getCode.bind(this)}>
										{this.state.codeButtonValue}
									</Button>
								</Col>
							</Row>
						)}
			        </FormItem>
					<FormItem
						{...formItemLayout}
						label="设置密码"
			        >
						{getFieldDecorator('password', {
							rules: [
								{required: true, message: error.PASSWORD_REQUIRED},
								{min:6,message:error.PASSWORD_LENGTH_ERROR},
								{max:16,message:error.PASSWORD_LENGTH_ERROR}
							],
						})(
						    <Input type="password"/>
						)}
			        </FormItem>
					<FormItem
						{...formItemLayout}
						label="确认密码"
			        >
						{getFieldDecorator('repeatPsd', {
							rules: [
								{required: true, message: '请输入密码!'},
								{validator:(rule,value,cb)=>{
								this.props.form.getFieldValue('password')===value?cb():cb(error.REPEAT_PASSWORD_NOT_SAME)
								}}
							],
						})(
						    <Input type="password"/>
						)}
			        </FormItem>
			        <FormItem {...formItemLayout} label=" " colon={false}>
			            <Checkbox
				            checked={this.state.premission||false}
				            onChange={(e)=>{
				            	this.setState({premission:e.target.checked})
				            }}
				            style={{fontSize:'14px'}}>
			            	已阅读并同意《康策CRM用户协议》
			            </Checkbox>
		        		<Button
		        			htmlType="submit"
		        			style={Object.assign({},styles.submitButton,registerButtonBg)}
		        			disabled={!this.state.premission}>
		        			注册
		        		</Button>
			        </FormItem>
				</Form>
				<p style={{fontSize:'16px'}}>我已注册，现在去<Link to='/login'>登录</Link></p>
			</div>
		)
	}
}

export default Form.create()(StepOne);