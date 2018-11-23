/*
 * @Author: lcj
 * @Date:   2017-08-02 10:00:10
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-07 08:37:30
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
	changePsw
} from '../../utils/interface.js'
import error from '../../utils/error-message.json'
const FormItem = Form.Item

class StepTwo extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				values.phone = this.props.phone;
				this.props.changePsw(values)
			}
		})
	}

	render() {
		let styles = this.props.styles;
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
		return (
			<div style={{width:'100%'}}>
				<p style={styles.title}>重置密码</p>
				<Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
					<FormItem
						{...formItemLayout}
						label="设置新密码"
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
						label="确认新密码"
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
		        		<Button
		        			htmlType="submit"
		        			style={styles.submitButton}>
		        			确认
		        		</Button>
			        </FormItem>
				</Form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state.changePsw;
}

//下一步
function nextStep(dispatch, values) {
	function cb(res) {
		if (res.error_code === GLOBALSUCCESS) {
			let nextStepAction = {
				type: 'CHANGE_STEP',
				payload: {
					step: 2
				}
			}
			dispatch(nextStepAction);
		}
	}
	return changePsw(values, cb);
}

function mapDispatchToProps(dispatch) {
	return {
		changePsw: (values) => nextStep(dispatch, values),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(StepTwo));