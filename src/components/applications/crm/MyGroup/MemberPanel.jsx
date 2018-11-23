/*
 * @Author: lcj
 * @Date:   2017-08-30 09:52:09
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:50:18
 * @Descriptions: 团队通讯录-团队个人列表行
 */

import React from 'react'
import {
	Icon,
	Popover,
	Modal
} from 'antd'
import {
	getNameDetail
} from '../../../../utils/interface.js'
import NameModal from './modal/NameModal.jsx'
import SalePlanList from './modal/SalePlanList.jsx'
import CustomerListModal from './modal/CustomerListModal.jsx'
import WorkReportModal from './modal/WorkReportModal.jsx'

let styles = {
	container: {
		borderTop: '1px #cdcdcd solid',
		height: '100px',
		display: 'flex',
		alignItems: 'center'
	},
	avator: {
		height: '70px',
		width: '70px',
		marginRight: '10px'
	},
	rightButtonContainer: {
		flex: 1,
		textAlign: 'right',
		paddingRight: '20px'
	},
	rightIcon: {
		fontSize: '21px',
		border: '1px #dadada solid',
		margin: '10px',
		padding: '5px',
		cursor: 'pointer'
	}
}

const width = window.screen.availWidth > 1000 ? 800 : '100%';

export default class MemberPanle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			employeeData: {},
		}
	}

	getName() {
		getNameDetail({
			'employee_id': this.props.data.employee_id
		}, (res) => {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					employeeData: res.data
				})
			}
		})
	}

	showSaleModal() {
		Modal.info({
			title: `${this.props.data.employee_name}·销售计划列表`,
			iconType: null,
			okText: '关闭',
			width: width,
			content: <SalePlanList employee_id={this.props.data.employee_id}/>
		})
	}

	showCustomerList() {
		Modal.info({
			title: `${this.props.data.employee_name}的客户列表`,
			iconType: null,
			okText: '关闭',
			width: width,
			content: <CustomerListModal employee_id={this.props.data.employee_id}/>
		})
	}

	showWorkReport() {
		Modal.info({
			title: `${this.props.data.employee_name}的工作汇报`,
			iconType: null,
			okText: '关闭',
			width: width,
			content: <WorkReportModal employee_id={this.props.data.employee_id}/>
		})
	}

	render() {
		const data = this.props.data;
		return (
			<div style={styles.container}>
				<img src={data.head_picture} alt="avator" style={styles.avator}/>
				<Popover
					content={<NameModal data={this.state.employeeData}/>}
					trigger="click"
					placement="rightBottom"
					onClick={this.getName.bind(this)}>
					<div style={{display:'flex',height:'21px',lineHeight:'21px',cursor:'pointer'}}>
						<Icon type="geren" style={{fontSize:'21px'}}/>
						<h3>{data.employee_name}</h3>
					</div>
				</Popover>
				{data.is_show&&data.is_show.toString()==='1'?
					<div style={styles.rightButtonContainer}>
						<Icon type="kehuliebiao" style={styles.rightIcon} onClick={this.showCustomerList.bind(this)}/>
						<Icon type="jihua" style={styles.rightIcon} onClick={this.showSaleModal.bind(this)}/>
						<Icon type="huibaoguanli" style={styles.rightIcon} onClick={this.showWorkReport.bind(this)}/>
					</div>
					:false
				}
			</div>
		)
	}
}