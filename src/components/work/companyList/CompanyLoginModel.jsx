/*
 * @Author: lcj
 * @Date:   2017-08-02 12:40:35
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 18:02:45
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
import {
	connect
} from 'react-redux'
import error from '../../../utils/error-message.json'
import {
	companyLogin
} from '../../../utils/interface.js'
import {
	onLoginModelSwitchActionCreater
} from '../../../actions/work/companyList/companyLoginModel.js'
import {
	getDepartmentListActionCreater
} from '../../../actions/work/department.js'
import {
	globalChangeCompanyLogined
} from '../../../actions/global.js'

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

class CompanyLoginModel extends React.Component {

	handleSubmit(e) {
		e.preventDefault();

		function cb(res, error, params) {
			if (res.error_code === GLOBALSUCCESS) {
				message.info('企业登录成功!');
				sessionStorage.setItem('epluscompanyName', this.props.company_name);
				this.props.loginCompany(this.props.company_name);
				this.props.form.resetFields();
				//关闭modal并清空信息
				this.props.cancelCompany();
				//保存company信息到store

			}
		}
		this.props.form.validateFields((err, values) => {
			if (!err) {
				values.company_id = this.props.company_id;
				//公司登录
				companyLogin(values, cb.bind(this));
			}
		});
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.loginCompanyModelVisible||false}
				onCancel={this.props.cancelCompany}
				footer={null}>
				<div style={{textAlign:'center',padding:'0 100px 30px'}}>
					<p style={{fontSize:'24px',marginBottom:'50px'}}>企业登录</p>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<FormItem style={{textAlign:'left'}}>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: error.PASSWORD_REQUIRED }],
				          })(
				            <Input size="large" placeholder="请输入企业密码" type="password"/>
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

function mapStateToProps(state) {
	return state.companyLoginModel
}

function mapDispatchToProps(dispatch) {
	return {
		cancelCompany: () => dispatch(onLoginModelSwitchActionCreater(false, null, null)),
		refreshDepartment: () => dispatch(getDepartmentListActionCreater()),
		loginCompany: (name) => dispatch(globalChangeCompanyLogined(true, name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CompanyLoginModel));