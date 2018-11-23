/*
 * @Author: lcj
 * @Date:   2017-08-22 19:49:03
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 09:10:21
 * @Descriptions: 客户管理-添加客户-第三步组件
 */

import React from 'react'
import {
	Button,
	Card,
	Row,
	Col,
	Tag,
	message
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	saveCustomerDetail,
	editCustomerDeatil
} from '../../../../../../utils/interface.js'

export class StepThreeBlock extends React.Component {
	constructor(props) {
		super(props);
	}

	makeTags() {
		const drugs = this.props.drugSelecteds;
		let tags = [];
		for (let key in drugs) {
			tags.push(
				<Tag key={key} style={{margin:'5px'}}>
					{drugs[key]}
				</Tag>
			)
		}
		return tags;
	}

	lastStep() {
		this.props.changeStep(1)
	}

	save() {
		let data = this.props.data;
		let drugs = this.props.drugSelecteds;
		data.drug_ids = Object.keys(drugs).join(',')
		const modalType = this.props.modalType;
		modalType.toString() === '0' ? this.saveModal.call(this, data) : this.editModal.call(this, data);
	}

	saveModal(data) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success("添加客户成功!")
				this.props.initFilter();
				this.props.initPagination();
				this.props.refreshList({
					customer_type: 0,
					customer_stage: 0,
					filter: '',
					page: 1,
					limit: 5,
				});
				this.props.closeModal();
			}
		}
		saveCustomerDetail(data, cb.bind(this))
	}

	editModal(data) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success("修改客户信息成功!")
				Object.assign(this.props.api.data, data);
				this.props.api.api.updateRowData({
					update: [this.props.api.data]
				})
				this.props.closeModal();
			}
		}
		editCustomerDeatil(data, cb.bind(this))
	}

	render() {
		const data = this.props.data;
		return (
			<div>
				<Card
					className="shadowCard"
					noHovering
					title="基本信息-核对">
					 <Row>
					 	<RowInf title="客户类型:" content={this.props.customerTypeOptions[data.customer_type]}/>
					 	<RowInf title="客情阶段:" content={this.props.customerPhaseOptions[data.customer_stage]}/>
					 	<RowInf title="客户姓名:" content={data.customer_name}/>
					 	<RowInf title="联系方式:" content={data.customer_phone}/>
					 	<RowInf title="邮箱地址:" content={data.customer_email}/>
					 	<RowInf title="微信号:" content={data.customer_webchat}/>
					 	<RowInf title="归属医院:" content={this.props.hospitalOptions[data.hospital_id]}/>
					 	<RowInf title="归属科室:" content={this.props.hospitalDepartmentOptions[data.hospital_department]}/>
					 	<RowInf title="医院地址:" content={data.hospital_address}/>
					 	<RowInf title="科室负责人:" content={data.department_leader}/>
					 </Row>
				</Card>
				<Card
					className="shadowCard"
					noHovering
					title="意向产品-核对">
					{this.makeTags.call(this)}
				</Card>
				<div style={{textAlign:'center',marginTop:'18px'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'80px'}}
						onClick={this.lastStep.bind(this)}>
						上一步
					</Button>
					<Button
						className="mainButton"
						onClick={this.save.bind(this)}>
						保存
					</Button>
				</div>
			</div>
		)
	}
}

class RowInf extends React.Component {
	render() {
		return (
			<Col md={{span:12}} sm={{span:24}} style={{fontSize:'14px',marginBottom:'10px'}}>
				<Col span={8}>
					<p style={{color:'#ababab',textAlign:'right'}}>{this.props.title||''}</p>
				</Col>
				<Col span={16}>
					<p style={{color:'#5e606d',paddingLeft:'10px'}}>{this.props.content||''}</p>
				</Col>
			</Col>
		)
	}
}

function mapStateToProps(state) {
	const modalState = state.addCustomerModal;
	return {
		modalType: modalState.modalType,
		drugSelecteds: modalState.drugSelecteds,
		data: modalState.data,
		hospitalOptions: modalState.hospitalOptions,
		api: modalState.api,
		hospitalDepartmentOptions: modalState.hospitalDepartmentOptions,
		customerTypeOptions: state.customerListFilter.customerTypeOptions,
		customerPhaseOptions: state.customerListFilter.customerPhaseOptions,
	}
}

export default connect(mapStateToProps)(StepThreeBlock)