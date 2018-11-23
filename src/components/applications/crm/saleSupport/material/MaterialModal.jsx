/*
 * @Author: lcj
 * @Date:   2017-09-06 10:40:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 08:55:44
 * @Descriptions: 销售支持-物料申请-添加/编辑modal
 */

import React from 'react'
import {
	Modal,
	Form,
	Input,
	Select,
	Button,
	Row,
	Col,
	message
} from 'antd'
import {
	getHospitalOptions,
	addMaterial,
	editMaterial,
	reMaterial,
	getMaterialDetail
} from '../../../../../utils/interface.js'
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

export class MaterialModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			store: 0,
			hospitalOptions: {}
		}
	}

	componentWillMount() {
		console.log(this.props)
		this.getHospitalOptions.call(this);
	}

	componentWillReceiveProps(props) {

		if (!this.props.visible && props.visible && props.modalType !== 0) {
			this.geMaterialInformation.call(this, props)
		}
		if (this.props.visible && !props.visible) {
			this.props.form.resetFields()
		}
	}

	getHospitalOptions() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					hospitalOptions: res.data
				})
			}
		}
		let params = {
			hospital_name: this.props.form.getFieldValue('hospital_name_filter')
		}
		getHospitalOptions(params, cb.bind(this))
	}

	geMaterialInformation(props) {
		console.log(props)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				const data = res.data;
				
				
				this.props.form.setFieldsValue({
					material_type_id: data.material_type_id.toString(),
					// material_date: moment(data.meeting_date * 1000),
					material_name: data.material_name,
					apply_number: data.apply_number,
					hospital_id: data.hospital_id,
					hospital_name_filter: data.hospital_name_filter,
					apply_description: data.apply_description
				})
			}
		}
		let params = {
			meeting_apply_id: props.data.id
		}
		getMaterialDetail(params, cb.bind(this))
	}

	onOk(e) {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						message.success(this.props.modalType === 0 ? "保存成功!" : "编辑成功!");
						this.props.over();
						this.props.closeModal();
					}
				}
				const modalType = this.props.modalType;
				if (modalType === 0) {
					addMaterial(values, cb.bind(this))
				} else if (modalType === 1) {
					values.material_apply_id = this.props.data.material_apply_id;
					editMaterial(values, cb.bind(this))
				} else {
					values.material_apply_id = this.props.data.material_apply_id;
					reMaterial(values, cb.bind(this))
				}
			}
		});
	}

	render() {
		const visible = this.props.visible;
		const modalType = this.props.modalType;
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={visible}
				key={visible}
				title={(modalType===0?'添加':'编辑')+'物料申请'}
				width={width}
				footer={null}
				onCancel={this.props.closeModal}>
				<Form>
					<Row>
					<Col span={12}>
						<FormItem
				          {...formItemLayout}
				          label="物料类型">
				          {getFieldDecorator('material_type_id', {
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
				          label="物料名称">
				          {getFieldDecorator('material_name', {
				            rules: [],
				          })(
				            <Input placeholder='输入物料名称'/>
				          )}
				        </FormItem>
					</Col>
					{/*
					<Col span={2}>
						<p style={{height:'32px',lineHeight:'32px'}}>
							库存:{this.state.store}
						</p>
					</Col>
					*/}
			        </Row>
			        <FormItem
						{...formRowItemLayout}
						label="申请数量">
						{getFieldDecorator('apply_number', {
							rules: [],
						})(
						<Input placeholder='申请数量不能超过库存'/>
						)}
				    </FormItem>
				   <Row>
				   		<Col span={12}>
						<FormItem
				          {...formItemLayout}
				          label="使用对象">
				          {getFieldDecorator('hospital_id', {
				            rules: [],
				          })(
				            <Select>
				            	{makeOptions(this.state.hospitalOptions)}
				            </Select>
				          )}
				        </FormItem>
						</Col>
						<Col span={7}>
							<FormItem>
					          {getFieldDecorator('hospital_name_filter', {
					            rules: [],
					          })(
					            <Input placeholder='输入医院名称'/>
					          )}
					        </FormItem>
						</Col>
						<Col span={2} offset={1}>
							<Button  style={{width:'100%'}} icon="search" className="mainButton" onClick={this.getHospitalOptions.bind(this)}/>
						</Col>
				   </Row>
				   <FormItem
						{...formRowItemLayout}
						label="用途说明">
						{getFieldDecorator('apply_description', {
							rules: [],
						})(
						<Input.TextArea placeholder='对用途进行描述'/>
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

function mapPropsToFields(props) {
	let fields = {}
	const data = props.data
	for (let key in data) {
		fields[key] = {
			value: data[key].toString()
		}
	}
	return fields
}

export default Form.create({
	mapPropsToFields
})(MaterialModal)