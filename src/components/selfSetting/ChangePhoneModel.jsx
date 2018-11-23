/*
 * @Author: lcj
 * @Date:   2017-08-14 11:30:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 09:59:07
 */
'use strict';

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Modal,
	Form,
	Input,
	Button,
	Row,
	Col,
	message
} from 'antd'
const FormItem = Form.Item
import * as actionCreater from '../../actions/selfSetting.js'
import error from '../../utils/error-message.json'
import {
	modifyPhone,
	sendPhoneCode
} from '../../utils/interface.js'

let styles = {
	title: {
		color: '#292929',
		fontSize: '18px',
		textAlign: 'center',
		marginBottom: '20px'
	},
	button: {
		borderRadius: '30px',
		width: '90px'
	},
	codeButton: {
		color: '#41dec1'
	}
}

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

export class ChangePhoneModel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			codeButtonValue: '获取验证码',
			codeButtonDisabled: false,
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						message.success('修改手机号成功')
						this.cancel()
						this.props.changePhone(values.phone)
					}
				}
				modifyPhone(values, cb.bind(this));
			}
		});
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

	cancel() {
		this.props.closeChangePhoneModel();
		this.props.form.resetFields();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		let codeButtonBg = {
			background: this.state.codeButtonDisabled ? 'gray' : 'white',
			border: this.state.codeButtonDisabled ? '1px gray solid' : '1px #41dec1 solid'
		}
		return (
			<Modal
				visible={this.props.visible}
				onCancel={this.cancel.bind(this)}
				maskClosable={false}
				footer={null}>
				<p style={styles.title}>修改手机号码</p>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<FormItem
			          	{...formItemLayout}
			          	label="新手机号"
			          	colon={false}>
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
						label="短信验证码"
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

        			<FormItem style={{textAlign:'center'}}>
        				<Button htmlType="submit" className="mainButton" style={Object.assign({},styles.button,{marginRight:'40px'})}>确认</Button>
        				<Button className="cancelButton" style={styles.button} onClick={this.cancel.bind(this)}>取消</Button>
        			</FormItem>
				</Form>
			</Modal>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeChangePhoneModel: () => dispatch(actionCreater.switchChangePhoneModelActionCreater(false)),
		changePhone: (phone) => dispatch(actionCreater.changePhoneActionCreater(phone))
	}
}

function mapStateToProps(state) {
	return {
		visible: state.selfSetting.changePhoneModelVisible
	}
}

const ChangePhoneModelWithForm = Form.create()(ChangePhoneModel)

export default connect(mapStateToProps, mapDispatchToProps)(ChangePhoneModelWithForm)