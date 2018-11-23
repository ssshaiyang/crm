/*
 * @Author: lcj
 * @Date:   2017-08-03 15:51:39
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-04 14:20:55
 */

'use strict';
import React from 'react';
import {
	Modal,
	Form,
	Button,
	Input,
	Icon,
	message
} from 'antd'
const FormItem = Form.Item;
import error from '../../../common/error-message.json'

let styles = {
	submitButton: {
		color: 'white',
		background: '#01d9b8',
		// background: '-webkit-linear-gradient(#13d0c9,#4ea2c4)',
		// background: '-o-linear-gradient(#13d0c9,#4ea2c4)',
		// background: '-moz-linear-gradient(#13d0c9,#4ea2c4)',
		// background: 'linear-gradient(#13d0c9,#4ea2c4)',
		width: '150px',
		height: '40px',
		fontSize: '18px',
		marginTop: '30px',
	}
}

class CompanyLogin extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.cancelAdmin();
				this.context.history.push('/admin')
				this.props.changeTopBar();
				message.info('管理登录成功!')
			}
		});
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.visible||false}
				onCancel={this.props.cancelAdmin}
				footer={null}>
				<div style={{textAlign:'center',padding:'0 100px 30px'}}>
					<p style={{fontSize:'24px',marginBottom:'50px'}}>管理员登录</p>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormItem style={{textAlign:'left'}}>
				          {getFieldDecorator('compnayPsw', {
				            rules: [{ required: true, message: error.PASSWORD_REQUIRED }],
				          })(
				            <Input size="large" placeholder="请输入管理员密码" type="password"/>
				          )}
				        </FormItem>
				        <FormItem>
				            <Button htmlType="submit" style={styles.submitButton}>登录</Button>
				        </FormItem>
				    </Form>
			    </div>
			</Modal>
		)
	}
}

CompanyLogin.contextTypes = {
	history: React.PropTypes.object.isRequired
}

export default Form.create()(CompanyLogin);