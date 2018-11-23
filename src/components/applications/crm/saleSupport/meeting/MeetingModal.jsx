/*
 * @Author: lcj
 * @Date:   2017-09-07 16:36:06
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 08:58:09
 * @Descriptions: 添加/编辑会议申请modal
 */

import React from 'react'
import {
	Modal,
	Form,
	Select,
	Row,
	Col,
	DatePicker,
	Input,
	Button,
	InputNumber,
	message
} from 'antd'
import Grid from '../../../../common/Grid.jsx'
import {
	getCustomerList,
	getCustomersTypeSelectList,
	addMeeting,
	editMeeting,
	getMeetingInformation,
	reMeeting
} from '../../../../../utils/interface.js'
import {
	exportDate
} from '../../../../../utils/common.js'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option

const width = window.screen.availWidth > 1000 ? 800 : '100%';
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

const formRowItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 3
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 19
		},
	},
};

export class MeetingModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			customerList: [],
			filter: '',
			customerTypes: {},
			gridApi: undefined,
			selectedCustomer: [],
		}
	}

	componentWillMount() {
		this.getCustomerList.call(this)
	}

	componentWillReceiveProps(props) {
		if (!this.props.visible && props.visible && props.modalType !== 0) {
			this.getMeetingInformation.call(this, props)
		}
		if (this.props.visible && !props.visible) {
			this.props.form.resetFields()
		}
	}

	getMeetingInformation(props) {
		console.log(props)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const data = res.data;
				const selectedCustomer = this.state.customerList.filter(
					(row) => data.meeting_staff.indexOf(row.customer_id.toString()) >= 0)
				this.setState({
					selectedCustomer: selectedCustomer,
				})
				this.props.form.setFieldsValue({
					meeting_type_id: data.meeting_type_id.toString(),
					meeting_date: moment(data.meeting_date * 1000),
					meeting_name: data.meeting_name,
					meeting_budget: data.meeting_budget,
					meeting_address: data.meeting_address,
					meeting_apply_reason: data.meeting_apply_reason,
					meeting_number: selectedCustomer.length,
				})
			}
		}
		let params = {
			meeting_apply_id: props.data.id
		}
		getMeetingInformation(params, cb.bind(this))
	}

	/**
	 * 获取客户类型
	 */
	getCustomersTypes() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					customerTypes: res.data
				})
			}
		}
		getCustomersTypeSelectList(null, cb.bind(this))
	}


	/**
	 * 获取客户列表
	 * @return {[type]} [description]
	 */
	getCustomerList() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					customerList: res.data.data
				})
			}
		}
		let params = {
			filter: this.state.filter,
			customer_type: -1,
			customer_stage: -1,
			page: -1,
			limit: -1,
		}
		getCustomerList(params, cb.bind(this))
	}

	/**
	 * 保存勾选的客户
	 * @return {[type]} [description]
	 */
	saveCustomer() {
		const selectedCustomer = this.state.gridApi.getSelectedRows();
		this.setState({
			selectedCustomer
		})
		this.props.form.setFieldsValue({
			meeting_number: selectedCustomer.length
		})
	}

	onOk(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				values.meeting_staff = this.state.selectedCustomer.map(item => item.customer_id).join(',')
				values.meeting_date = exportDate(values.meeting_date)
				switch (this.props.modalType.toString()) {
					case '0':
						this.addMeeting.call(this, values);
                        this.props.over()
						break;
					case '1':
						values.meeting_apply_id = this.props.data.meeting_apply_id;
						this.editMeeting.call(this, values, 1);
                        this.props.over()
						break;
					case '2':
						values.meeting_apply_id = this.props.data.meeting_apply_id;
						this.editMeeting.call(this, values, 2);
                        this.props.over()
						break
				}
			}
		});
	}

	addMeeting(params) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success('添加会议申请成功!')
				this.props.closeModal();
			}
		}
		addMeeting(params, cb.bind(this))
	}

	editMeeting(params, modalType) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success('修改会议申请成功!')
				this.props.closeModal();
			}
		}
		modalType === 1 ? editMeeting(params, cb.bind(this)) : reMeeting(params, cb.bind(this))
	}

	render() {
		const {
			getFieldDecorator
		} = this.props.form;
		const modalType = this.props.modalType;
		const columnDefs = {
			"customer_name": "客户姓名",
			"customer_type": {
				headerName: "客户类型",
				valueGetter: (params) => this.state.customerTypes[params.data.customer_type]
			},
			"customer_phone": "联系方式",
		}
		return (
			<Modal
				visible={this.props.visible}
				width={width}
				footer={null}
				title={(modalType===0?'添加':'修改')+'会议申请'}
				onCancel={this.props.closeModal}>
				<Form>
					<Row span={12}>
						<Col span={12}>
							<FormItem
					          {...formItemLayout}
					          label="会议类型">
					          {getFieldDecorator('meeting_type_id', {
					            rules: [],
					          })(
					          	<Select>
					          		{makeOptions(this.props.typeOptions)}
					            </Select>
					          )}
					        </FormItem>
						</Col>
				        <Col span={12}>
							<FormItem
					          {...formItemLayout}
					          label="会议日期">
					          {getFieldDecorator('meeting_date', {
					            rules: [],
					          })(
					          	<DatePicker style={{width:'100%'}}/>
					          )}
					        </FormItem>
				        </Col>
			        </Row>
			        <FormItem
			          {...formRowItemLayout}
			          label="会议名称">
			          {getFieldDecorator('meeting_name', {
			            rules: [],
			          })(
			          	<Input/>
			          )}
			        </FormItem>
			        <FormItem
			          {...formRowItemLayout}
			          label="参会人员">
			          {getFieldDecorator('meeting_staff', {
			            rules: [],
			          })(
			          	<div>
			          		<p>
			          			<Input
			          				placeholder="输入客户姓名/电话查询"
			          				style={{width:'50%',marginRight:'20px'}}
			          				value={this.state.filter}
			          				onChange={(e)=>this.setState({filter:e.target.value})}/>
			          			<Button
			          				className="mainButton"
			          				onClick={this.getCustomerList.bind(this)}>
			          				搜索
			          			</Button>
			          			<Button
			          				className="mainButton"
			          				onClick={this.saveCustomer.bind(this)}
			          				style={{float:'right'}}>
			          				保存
			          			</Button>
			          		</p>
			          		<Grid
			          			rowData={this.state.customerList}
			          			columnDefs={columnDefs}
			          			componentDidMount={(that)=>this.setState({gridApi:that.gridApi})}
			          			selection/>
			          	</div>
			          )}
			        </FormItem>
			        <FormItem
			          {...formRowItemLayout}
			          label="参会人数">
			          {getFieldDecorator('meeting_number', {
			            rules: [],
			          })(
			          	<Input disabled/>
			          )}
			        </FormItem>
			        <FormItem
			          {...formRowItemLayout}
			          label="费用申请">
			          {getFieldDecorator('meeting_budget', {
			            rules: [],
			          })(
			          	<InputNumber style={{width:'100%'}}/>
			          )}
			        </FormItem>
			        <FormItem
			          {...formRowItemLayout}
			          label="会议地址">
			          {getFieldDecorator('meeting_address', {
			            rules: [],
			          })(
			          	<Input/>
			          )}
			        </FormItem>
			        <FormItem
			          {...formRowItemLayout}
			          label="申请原因">
			          {getFieldDecorator('meeting_apply_reason', {
			            rules: [],
			          })(
			          	<Input.TextArea/>
			          )}
			        </FormItem>
				</Form>
				<div style={{textAlign:'center'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'20px'}}
						onClick={this.props.closeModal}>
						取消
					</Button>
					<Button
						className="mainButton"
						onClick={this.onOk.bind(this)}>
						保存
					</Button>
				</div>
			</Modal>
		)
	}
}

function makeOptions(options = {}) {
	let keys = Object.keys(options);
	return keys.map(key => (
		<Option key={key.toString()}>
			{options[key]}
		</Option>
	))
}



export default Form.create()(MeetingModal)