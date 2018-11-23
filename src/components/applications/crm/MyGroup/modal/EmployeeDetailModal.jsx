/*
 * @Author: lcj
 * @Date:   2017-08-30 13:32:51
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 13:54:59
 * @Descriptions: 我的团队-客户列表-具体用户信息
 */

import React from 'react'
import {
	getCustomerDetail
} from '../../../../../utils/interface.js'
import {
	Row,
	Col
} from 'antd'
export default class EmployeeDetailModal extends React.Component {
	constructor(props) {
		super(props)
		this.setState({
			data: []
		})
	}

	getDetail() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					data: res.data
				})
			}
		}
		getCustomerDetail({
			customer_id: this.props.customer_id
		}, cb.bind(this))
	}

	componentWillMount() {
		this.getDetail.call(this)
	}

	render() {
		const customer_id = this.props.customer_id
		const data = this.state.data
		return (
			<Row>
				<Inf title="客户类型:" content={data.customer_type}/>
				<Inf title="客情阶段:" content={data.customer_stage}/>
				<Inf title="医生姓名:" content={data.customer_name}/>
				<Inf title="联系方式:" content={data.customer_phone}/>
				<Inf title="微信号:" content={data.customer_webchat}/>
				<Inf title="邮箱地址:" content={data.customer_email}/>
				<Inf title="归属医院:" content={data.hospital_name}/>
				<Inf title="归属科室:" content={data.hospital_department_name}/>
				<Inf title="科室负责人:" content={data.department_leader}/>
				<Inf title="医院地址:" content={data.hospital_address}/>
			</Row>
		)
	}
}

export class Inf extends React.Component {
	render() {
		return (
			<Col span={12}>
				<Col span={8}>
					<span style={{color:'#aaaaaa'}}>{this.props.title}</span>
				</Col>
				<Col span={14}>
					<span style={{color:'#5e626e'}}>{this.props.content}</span>
				</Col>
			</Col>
		)
	}
}