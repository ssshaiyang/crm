/*
 * @Author: lcj
 * @Date:   2017-08-10 19:23:33
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 16:07:56
 */

'use strict';

import React from 'react'
import {
	Form
} from 'antd'

const localFormItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 8
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 6,
			offset: 1
		},
	},
};
export default class FormItem extends React.Component {
	render() {
		const label = this.props.label;
		const formId = this.props.formId;
		const formRules = this.props.rules || [];
		const formItemLayout = Object.assign({}, localFormItemLayout, this.props.formItemLayout);
		return (
			<Form.Item
	          	{...formItemLayout}
	          	style={{display:'flex',alignItems:'center',marginBottom:'20px'}}
	          	colon={false}
	          	label={label}>
	          	{this.props.getFieldDecorator(formId, {
	            	rules: formRules,
	          	})(
	            	this.props.children
	          	)}
	        </Form.Item>
		)
	}
}