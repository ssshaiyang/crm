/*
 * @Author: lcj
 * @Date:   2017-08-02 09:57:03
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-07 08:37:24
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
import {
	connect
} from 'react-redux'
import {
	valideCode,
	sendPhoneCode
} from '../../utils/interface.js'
import error from '../../utils/error-message.json'
const FormItem = Form.Item

class StepOne extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.valideCode(values);
			}
		})
	}

	getCode() {
		sendPhoneCode({
			phone: this.props.form.getFieldValue('phone')
		})
		this.props.getCode();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		let codeButtonBg = {
			background: this.props.codeButtonDisabled ? 'gray' : '#00b8ae'
		}
		let styles = this.props.styles;
		return (
			<div style={{width:'100%',height:'100%'}}>
				<Col sm={{span:0,order:2}} md={{span:12,order:1}} style={Object.assign({},styles.col,{borderRight:'1px #f2f4f3 solid'})}>
					<img src={this.props.img.caption} alt="login-caption-pic" style={styles.caption}/>
				</Col>
				<Col sm={{span:24,order:1}} md={{span:12,order:2}} style={styles.col}>
					<p style={styles.title}>找回密码</p>
					<Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
						<FormItem>
					        {getFieldDecorator('phone', {
					            rules: [
					            	{ required: true, message: error.PHONE_REQUIRED },
					            	{len:11,message:error.PHONE_LENGTH_ERROR},
					            	{validator:(rule, value, cb)=>!Number.isNaN(-value)?cb():cb(error.PHONE_TYPE_ERROR)}
					            ],
					        })(
					            <Input prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="手机号码" />
					        )}
				    	</FormItem>
						<FormItem>
							{getFieldDecorator('code', {
								rules: [
									{required: true, message: error.CODE_REQUIRED},
									{len:6,message:error.CODE_LENGTH_ERROR}
								],
							})(
								<Row gutter={20}>
									<Col md={{span:12}} xs={{span:24}} style={{marginBottom:'10px'}}>
							    		<Input size="large" placeholder="验证码"/>
									</Col>
									<Col md={{span:12}} xs={{span:24}}>
										<Button
											size="large"
											disabled={this.props.codeButtonDisabled}
											style={Object.assign({},styles.codeButton,codeButtonBg)}
											onClick={this.getCode.bind(this)}>
											{this.props.codeButtonValue}
										</Button>
									</Col>
								</Row>
							)}
				        </FormItem>
				        <FormItem>
			        		<Button htmlType="submit" style={styles.submitButton}>
			        				下一步
			        		</Button>
				        </FormItem>
					</Form>
				</Col>
			</div>
		)
	}

}

function mapStateToProps(state) {
	return state.changePsw;
}

//获取验证码
function getCode(dispatch) {
	changeState(dispatch, true);
	changeValue(dispatch, 60);
}

//修改按钮状态
function changeState(dispatch, state) {
	let action = {
		type: 'CHANGE_CODE_BUTTON_TYPE',
		payload: {
			codeButtonDisabled: state
		}
	}
	dispatch(action)
}

//修改按钮内容
function changeValue(dispatch, remainTime = 60) {
	let action = {
		type: 'CHANGE_CODE_BUTTON_VALUE',
		payload: {
			codeButtonValue: remainTime > 0 ? remainTime + '秒后获取验证码' : '获取验证码'
		}
	}
	dispatch(action)
	if (remainTime <= 0) {
		changeState(dispatch, false)
	} else {
		setTimeout(() => changeValue(dispatch, remainTime - 1), 1000)
	}

}

//下一步
function nextStep(dispatch, values) {
	function cb(res) {
		if (res.error_code === GLOBALSUCCESS) {
			let changePhoneAction = {
				type: 'CHANGE_PHONE',
				payload: {
					phone: values.phone
				}
			}
			let nextStepAction = {
				type: 'CHANGE_STEP',
				payload: {
					step: 1
				}
			}
			dispatch(changePhoneAction);
			dispatch(nextStepAction);
		}
	}
	return valideCode(values, cb);
}

function mapDispatchToProps(dispatch) {
	return {
		getCode: () => getCode(dispatch),
		valideCode: (values) => nextStep(dispatch, values)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(StepOne));