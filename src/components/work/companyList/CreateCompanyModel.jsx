/*
 * @Author: lcj
 * @Date:   2017-08-03 11:27:43
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 14:12:57
 */

'use strict';

import React from 'react'
import {
	Modal,
	Form,
	Button,
	Input,
	Icon,
	Select,
	Row,
	Col,
	message
} from 'antd'
const FormItem = Form.Item
const Option = Select.Option
import {
	connect
} from 'react-redux'
import error from '../../../utils/error-message.json'
import {
	getArea,
	createCompany,
	getCompanyList
} from '../../../utils/interface.js'
import * as actionCreater from '../../../actions/work/companyList/createCompanyModel.js'

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

let styles = {
	submitButton: {
		background: '#00b8ae',
		color: 'white',
		height: '48px',
		fontSize: '17px',
		letterSpacing: '2px',
		width: '200px'
	},
	form: {
		width: '100%',
		textAlign: 'left'
	}
}

export class CreateCompanyModel extends React.Component {
	constructor(props) {
		super(props)
	}

	handleSubmit(e) {
		e.preventDefault();

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.form.resetFields();
				this.props.closeModel();
				this.props.updateCompanyList();
				message.info('企业创建成功!');
			}
		}

		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("ssssssss",values)
				createCompany(values, cb.bind(this))
			}
		});
	}

	//选择省
	selectProvince(e) {
		this.props.form.setFieldsValue({
			'city': ''
		});
		this.props.getCity(this.props.province[e])
	}

	//遍历构建下拉框
	makeOptions(datas) {
		let options = [];
		for (let i in datas) {
			let data = datas[i];
			options.push(<Option value={data.key} key={data.key}>{data.value}</Option>)
		}
		return options;
	}

	componentWillMount() {
		this.props.getProvince();
	}

	closeModel() {
		this.props.closeModel();
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.createCompanyModelVisible||false}
				onCancel={this.closeModel.bind(this)}
				footer={null}>
				<div style={{textAlign:'center',padding:'0 30px 30px'}}>
					<p style={{fontSize:'24px',marginBottom:'50px'}}>创建企业</p>
					<Form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
						<FormItem
				          	{...formItemLayout}
							  	label="企业名称"
							>
						  	{getFieldDecorator('company_name', {
						   	 	rules: [
						   	 	{required: true, message: error.COMPANY_REUIRED}],
						  	})(
						    <Input />
						  	)}
				        </FormItem>
				        <FormItem
				          	{...formItemLayout}
							  	label="人员规模"
							>
						  	{getFieldDecorator('employee_num', {
						   	 	rules: [
						   	 	{required: true, message: error.COMPANY_SIZE_REUIRED},
						   	 	{validator:(rule, value, cb)=>!Number.isNaN(-value)?cb():cb(error.COMPANY_SIZE_TYPE_ERROR)}
						   	 	],
						  	})(
						    <Input />
						  	)}
				        </FormItem>
				        <FormItem
				          	label="企业性质"
				          	{...formItemLayout}
				        >
			          	{getFieldDecorator('company_type', {
				            rules: [],
			          	})(
				            <Select
				              	placeholder=""
				            >
				              	{this.makeOptions(this.props.companyProps)}
				            </Select>
			          	)}
				        </FormItem>
				        <FormItem
				          	label="所属城市"
				          	{...formItemLayout}
				        >
				        <Row gutter={20}>
				        	<Col sm={{span:24}} md={{span:12}} style={{marginBottom:'10px'}}>
					        	{getFieldDecorator('province', {
						            rules: [],
					          	})(
						            <Select
						              	placeholder="省"
						              	onChange={this.selectProvince.bind(this)}
						            >
						            {this.makeOptions(this.props.province)}
						            </Select>
					          	)}
				        	</Col>
				        	<Col sm={{span:24}} md={{span:12}}>
					        	{getFieldDecorator('city', {
						            rules: [],
					          	})(
						            <Select
						              	placeholder="市"
						            >
						            {this.makeOptions(this.props.city)}
						            </Select>
					          	)}
				        	</Col>
				        </Row>
				        </FormItem>
				        <FormItem style={{textAlign:'center'}}>
				            <Button htmlType="submit" style={styles.submitButton}>创建企业</Button>
				        </FormItem>
				    </Form>
			    </div>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return state.createCompanyModel;
}

function mapDispatchToProps(dispatch) {
	return {
		getArea: () => dispatch(actionCreater.getAreaActionCreator()),
		getProvince: () => dispatch(actionCreater.getProvinceActionCreator()),
		getCity: (province) => dispatch(actionCreater.getCityActionCreator(province)),
		closeModel: () => dispatch(actionCreater.onModelSwitchActionCreator(false))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CreateCompanyModel));