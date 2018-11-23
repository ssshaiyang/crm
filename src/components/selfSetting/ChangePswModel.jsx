/*
 * @Author: lcj
 * @Date:   2017-08-14 10:42:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:48:32
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
	message
} from 'antd'
const FormItem = Form.Item
import * as actionCreater from '../../actions/selfSetting.js'
import error from '../../utils/error-message.json'
import {
	modifyPassword,
	modifyEmploeePassword
} from '../../utils/interface.js'

let styles = {
	title: {
		color: '#292929',
		fontSize: '18px',
		textAlign: 'center'
	},
	button: {
		borderRadius: '30px',
		width: '90px'
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

export class ChangePswModel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			repeatHelp: undefined,
			repeatValidateStatus: undefined,
			newHelp: undefined,
			newValidateStatus: undefined,
		}
	}

	validetaOld(e) {
		const old_password = e.target.value;
		const new_password = this.props.form.getFieldValue('new_password');
		this.setState({
			newHelp: undefined,
			newValidateStatus: undefined,
		})
		if (new_password && new_password === old_password) {
			this.setState({
				newHelp: error.NEW_PASSWORD_SAME_AS_OLD,
				newValidateStatus: 'error'
			})
		}

	}

	validetaNew(e) {
		const old_password = this.props.form.getFieldValue('old_password');
		const new_password = e.target.value;
		const repeatNewPassword = this.props.form.getFieldValue('repeatNewPassword');
		this.setState({
			newHelp: undefined,
			newValidateStatus: undefined,
			repeatHelp: undefined,
			repeatValidateStatus: undefined,
		})
		if (new_password && new_password === old_password) {
			this.setState({
				newHelp: error.NEW_PASSWORD_SAME_AS_OLD,
				newValidateStatus: 'error'
			})
		}
		if (new_password && new_password !== repeatNewPassword) {
			this.setState({
				repeatHelp: error.REPEAT_PASSWORD_NOT_SAME,
				repeatValidateStatus: 'error'
			})
		}

	}

	validetaRepeat(e) {
		const new_password = this.props.form.getFieldValue('new_password');
		const repeatNewPassword = e.target.value;
		this.setState({
			repeatHelp: undefined,
			repeatValidateStatus: undefined,
		})
		if (new_password && new_password !== repeatNewPassword) {
			this.setState({
				repeatHelp: error.REPEAT_PASSWORD_NOT_SAME,
				repeatValidateStatus: 'error'
			})
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			const error = !err && !this.state.repeatValidateStatus && !this.state.newValidateStatus;
			if (error) {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						message.success('修改密码成功')
						this.cancel()
					}
				}
				this.props.forCompany ?
					modifyEmploeePassword(values, cb.bind(this)) :
					modifyPassword(values, cb.bind(this));
			}
		});
	}

	cancel() {
		this.props.closeChangePswModel();
		this.props.form.resetFields();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.visible}
				onCancel={this.cancel.bind(this)}
				maskClosable={false}
				footer={null}>
				<p style={styles.title}>修改密码</p>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<FormItem
			          	{...formItemLayout}
			          	label="旧密码"
			          	colon={false}>
		          	{getFieldDecorator('old_password', {
		            	rules: [
		            		{required: true, message: error.PASSWORD_REQUIRED},
							{min:6,message:error.PASSWORD_LENGTH_ERROR},
							{max:16,message:error.PASSWORD_LENGTH_ERROR}
		            	],
		          	})(
		            	<Input type="password" onChange={(e)=>this.validetaOld.call(this,e)}/>
		          	)}
        			</FormItem>
        			<FormItem
			          	{...formItemLayout}
			          	label="新密码"
			          	help={this.state.newHelp}
			          	validateStatus={this.state.newValidateStatus}
			         	colon={false}>
		          	{getFieldDecorator('new_password', {
		            	rules: [
		            		{required: true, message: error.PASSWORD_REQUIRED},
							{min:6,message:error.PASSWORD_LENGTH_ERROR},
							{max:16,message:error.PASSWORD_LENGTH_ERROR}
		            	],
		          	})(
		            	<Input type="password" onChange={(e)=>this.validetaNew.call(this,e)}/>
		          	)}
        			</FormItem>
        			<FormItem
			          	{...formItemLayout}
			          	help={this.state.repeatHelp}
			          	validateStatus={this.state.repeatValidateStatus}
			          	label="密码确认"
			          	colon={false}>
		          	{getFieldDecorator('repeatNewPassword', {
		            	rules: [
		            		{required: true, message: error.PASSWORD_REQUIRED}
		            	],
		          	})(
		            	<Input type="password" onChange={(e)=>this.validetaRepeat.call(this,e)}/>
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
		closeChangePswModel: () => dispatch(actionCreater.switchChangePswModelActionCreater(false))
	}
}

function mapStateToProps(state) {
	return {
		visible: state.selfSetting.changePswModelVisible
	}
}

const ChangePswModelWithForm = Form.create()(ChangePswModel)

export default connect(mapStateToProps, mapDispatchToProps)(ChangePswModelWithForm)