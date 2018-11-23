/*
 * @Author: lcj
 * @Date:   2017-08-23 15:43:43
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 12:34:24
 * @Descriptions: 客户管理-客户列表-拜访记录modal
 */

import React from 'react'
import {
	Modal,
	Form,
	Input,
	InputNumber,
	Select,
	Row,
	Col,
	DatePicker,
	Button,
	message
} from 'antd'
const Option = Select.Option
const FormItem = Form.Item
import {
	connect
} from 'react-redux'
import {
	exportDate
} from '../../../../../utils/common.js'
import {
	saveCustomerVisitRecord,
	editCustomerVisitRecord
} from '../../../../../utils/interface.js'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/visitRecordModal.js'

const formItemLayout = {
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
			span: 14
		},
	},
};

export class VisitRecordModal extends React.Component {
	constructor(props) {
		super(props);
	}

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	onSave() {
		this.props.form.validateFields((err, values) => {
			if (!err) {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						this.props.modalType === 0 ? this.saveModal.call(this, values) : this.editModal.call(this, values)
						message.success("保存成功!")
						this.cancelModal()
					}
				}
				values.customer_id = this.props.customer_id;
				values.visit_date = exportDate(values.visit_date);
				values.visit_record_id = this.props.visit_record_id;
				this.props.modalType === 0 ? saveCustomerVisitRecord(values, cb.bind(this)) : editCustomerVisitRecord(values, cb.bind(this));
			}
		});
	}

	//保存不用做处理
	saveModal() {}

	editModal(values) {
		Object.assign(this.props.api.data, values)
		this.props.api.api.updateRowData({
			update: [this.props.api.data]
		})
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				title={this.props.modalType===0?'添加拜访记录':'修改拜访记录'}
				onCancel={this.cancelModal.bind(this)}
				footer={null}>
				<Form className="shadowCard">
					<Row style={{margin:'20px'}}>
						<Col span={12}>
							<FormItem
					          	{...formItemLayout}
					          	label="拜访日期">
					          	{getFieldDecorator('visit_date', {
					            	rules: [{
                                        required: true, message: '请选择拜访日期',
                                    }],
					          	})(
					            	<DatePicker />
					          	)}
					        </FormItem>
						</Col>
						<Col span={12}>
							<FormItem
					          	{...formItemLayout}
					          	label="沟通方式">
					          	{getFieldDecorator('communicate_way', {
					            	rules: [],
					          	})(
					            	<Select placeholder="请选择">
					            		<Option value="1">电话沟通</Option>
					            		<Option value="2">上门拜访</Option>
										{/*<Option value="0">未拜访</Option>*/}
									</Select>
					          	)}
					        </FormItem>
						</Col>
						<Col span={12}>
							<FormItem
					          	{...formItemLayout}
					          	label="客情支出">
					          	{getFieldDecorator('customer_spend', {
					            	rules: [{
                                        required: true, message: '请填写客情支出',
                                    }],
					          	})(
					          		<InputNumber/>
					          	)}
					        </FormItem>
						</Col>
						<Col span={24}>
							<FormItem
								labelCol={{span:4}}
								wrapperCol={{span:19}}
					          	label="拜访内容">
					          	{getFieldDecorator('visit_content', {
					            	rules: [{
                                        required: true, message: '请填写拜访内容',
                                    }],
					          	})(
					          		<Input.TextArea
					          			autosize={{ minRows: 4, maxRows: 4 }}/>
					          	)}
					        </FormItem>
						</Col>
					</Row>
				</Form>
				<div style={{textAlign:'center',marginTop:'10px'}}>
					<Button
						className="cancelButton"
						onClick={this.cancelModal.bind(this)}
						style={{marginRight:'80px'}}>
						取消
					</Button>
					<Button
						className="mainButton"
						onClick={this.onSave.bind(this)}>
						保存
					</Button>
				</div>
			</Modal>
		)
	}
}

function onFieldsChange(props, fields) {
	const field = fields[Object.keys(fields)[0]]
	props.modifyForm(field)
}

function mapPropsToFields(props) {
	return {
		visit_date: {
			value: props.visit_date
		},
		communicate_way: {
			value: props.communicate_way && props.communicate_way.toString()
		},
		customer_spend: {
			value: props.customer_spend
		},
		visit_content: {
			value: props.visit_content
		}
	}
}

const VisitRecordModalWithForm = Form.create({
	onFieldsChange,
	mapPropsToFields
})(VisitRecordModal)

function mapStateToProps(state) {
	const modalState = state.visitRecordModal;
	return {
		visible: modalState.visible,
		modalType: modalState.modalType,
		visit_date: modalState.visit_date,
		communicate_way: modalState.communicate_way,
		customer_spend: modalState.customer_spend,
		visit_content: modalState.visit_content,
		customer_id: state.visitRecordWatchModal.customerId,
		visit_record_id: modalState.visit_record_id,
		api: modalState.api,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		modifyForm: (field) => dispatch(actionCreater.modifyFormActionCreater(field)),
		closeModal: () => dispatch(actionCreater.switchVisitRecordModalVisibleActionCreater(false)),
		clearModal: () => dispatch(actionCreater.clearVisitRecordModalVisibleActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitRecordModalWithForm)