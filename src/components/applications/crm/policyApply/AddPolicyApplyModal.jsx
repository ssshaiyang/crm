/*
 * @Author: lcj
 * @Date:   2017-08-29 15:50:11
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 08:49:22
 * @Descriptions: 政策申请-政策申请modal
 */
import React from 'react'
import {
	Modal,
	Form,
	Input,
	Button,
	Select,
	Row,
	Col,
	message,
} from 'antd'
import {
	addPolicy,
	editPolicy,
	rePolicy,
	getDrugPolicy,
	policyDetail
} from '../../../../utils/interface.js'
const Option = Select.Option
const FormItem = Form.Item

import {
	getDrugs,
	getHospitalOptions
} from '../../../../utils/interface.js'

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

const rowFormItemLayout = {
	labelCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 2
		},
	},
	wrapperCol: {
		xs: {
			span: 24
		},
		sm: {
			span: 21
		},
	},
};


export class AddPolicyApplyModal extends React.Component {

	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			drugList: {},
			hospitalList: {},
			originApplyProportion: 0,
			originApplyMoney: 0,
			price: 0,
			drug_id:0,
			rate:0,
			money:0,
			drug_price:null
		}
	}

	componentWillReceiveProps(props) {
		if (props.visible && !this.props.visible && props.modalType !== 0) {
			// console.log(props)
			// const data = props.data;
			// const originApplyProportion = Number.parseFloat(data.apply_proportion);
			// const originApplyMoney = data.policy_apply_money;
			// let price = originApplyMoney / originApplyProportion * 100;
			// // 判断是否为NaN
			// price = (price !== price) ? 0 : price;
			// this.setState({
			// 	originApplyMoney,
			// 	originApplyProportion,
			// 	price
			// })
			this.getPolicyInformation.call(this, props)
		}
		if (props.visible && !this.props.visible && props.modalType == 0) {
			console.log(props)
		}
	}

	componentWillMount() {
		this.getDrugList.call(this);
		this.getHospitalList.call(this);
	}

	closeModal() {
		this.setState({
			originApplyProportion: 0,
			originApplyMoney: 0,
			price: 0,
		})
		this.props.closeModal()
	}

	/**
	 * 获取药品下拉列表
	 * @return {[type]} [description]
	 */
	getDrugList() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let drugList = {};
				res.data.data.map(item => {
					console.log(item)
					drugList[item.drug_id] = item;
					drugList[item.drug_id].value = item.drug_name;

				})
				this.setState({
					drugList
				})
				console.log(drugList)
			}
		}
		let params = {
			page: -1,
			limit: -1
		}
		getDrugs(params, cb.bind(this))
	}

	getPolicyInformation(props) {
		console.log(props)
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				console.log(res)
				const data = res.data;
				// this.setState({
				// 	selectedCustomer: selectedCustomer,
				// })
				this.props.form.setFieldsValue({
					apply_proportion: data.apply_proportion,
					
					hospital_id: data.hospital_id,
					policy_apply_id: data.policy_apply_id,
					policy_apply_money: data.policy_apply_money,
					policy_apply_remark: data.policy_apply_remark,
					
				})
				this.selectDrug(data.drug_id)
			}
		}
		let params = {
			id:props.data.id
		}
		policyDetail(params, cb.bind(this))
	}

	/**
	 * 获取医院下拉列表
	 * @return {[type]} [description]
	 */
	getHospitalList() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					hospitalList: res.data
				})
			}
		}
		getHospitalOptions(null, cb.bind(this))
	}

	makeSelect(options) {
		const keys = Object.keys(options);
		return (
			keys.map(key => (
				<Option value={key} key={key}>{options[key].value||options[key]}</Option>
			))
		)
	}

	/**
	 * 获取药品原有申请比例与金额
	 * @param  {[type]} drugId [description]
	 * @return {[type]}        [description]
	 */
	getOriginApply(drugId,hospitalId) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				console.log(res.data)
				const money = res.data.money;
				const rate = res.data.rate;
				// const money = res.data.money;
				// console.log(originApplyProportion)
				// let price = originApplyMoney / originApplyProportion * 100;
				// // 判断是否为NaN
				// price = (price !== price) ? 0 : price;
				// 
				this.setState({
					rate,
					money,
					// price
				})
			}
		}
		let params = {
			drug_id: drugId,
			hospital_id:hospitalId
		}
		getDrugPolicy(params, cb.bind(this));
	}

	selectDrug(drug_id) {
		const drug = this.state.drugList[drug_id];
		console.log(drug)
		this.setState({
			drug_id : drug_id,
			drug_price:drug.retail_price
			// (drug.retail_price,props) =>({
				
			// })

		})
		this.props.form.setFieldsValue({
			'specification': drug.specification + '/' + drug.dosage,
			'manufacture': drug.manufacturer_name
		})
		console.log(this.state.drug_price)
		console.log(drug_id)
		console.log(drug.retail_price)
		console.log(this.state.drug_price)
	}

	selectHospital(hospital_id){
		const drug_id = this.state.drug_id;
		this.getOriginApply.call(this, drug_id,hospital_id)
	}

	save(e) {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			console.log(values)
			console.log(values+"==========="+err)
			if (!err) {
				function cb(res) {
					console.log(values)
					if (res.error_code === GLOBALSUCCESS) {
						message.success(this.props.modalType === 0 ? "保存成功!" : "编辑成功!");
						this.props.over();
						this.props.closeModal();
					}
				}
				const modalType = this.props.modalType;
				if (modalType === 0) {
					addPolicy(values, cb.bind(this))
				} else if (modalType === 1) {
					editPolicy(values, cb.bind(this))
				} else {
					rePolicy(values, cb.bind(this))
				}
			}
		});
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		const {
			getFieldDecorator
		} = this.props.form;
		return (
			<Modal
				visible={this.props.visible}
				width={width}
				onCancel={this.closeModal.bind(this)}
				title={this.props.modalType===0?'添加政策申请':'编辑政策申请'}
				key={this.props.visible}
				footer={null}>
				<Row>
					<Col span={8}>
						<FormItem
				          {...formItemLayout}
				          	label="选择产品">
				          {getFieldDecorator('drug_id', {
				            rules: [],
				          })(
				            <Select style={{width:'100%'}} onChange={this.selectDrug.bind(this)}>
				            	{this.makeSelect.call(this,this.state.drugList)}
				            </Select>
				          )}
				        </FormItem>
					</Col>
					<Col span={8}>
						<FormItem
				          {...formItemLayout}
				          	label="选择规格">
				          {getFieldDecorator('specification', {
				            rules: [],
				          })(
				          	<Input disabled/>
				          )}
				        </FormItem>
					</Col>
					<Col span={8}>
						<FormItem
				          {...formItemLayout}
				          	label="选择厂家">
				          {getFieldDecorator('manufacture', {
				            rules: [],
				          })(
				            <Input disabled/>
				          )}
				        </FormItem>
					</Col>
					<Col span={8}>
						<FormItem
				          {...formItemLayout}
				          	label="销售医院">
				          {getFieldDecorator('hospital_id', {
				            rules: [],
				          })(
				            <Select style={{width:'100%'}}  onChange={this.selectHospital.bind(this)}>
				            	{this.makeSelect.call(this,this.state.hospitalList)}
				            </Select>
				          )}
				        </FormItem>
					</Col>
					<Col span={14} offset={2}>
						<p style={{letterSpacing:'2px'}}>
							<span style={{marginRight:'20px'}}>
								政策比例:{this.state.rate}%
							</span>
							<span>
								提成金额:{this.state.money}元/盒
							</span>
						</p>
					</Col>
				</Row>
				<FormItem
		          	label="申请比例"
		          	{...rowFormItemLayout}>
		          {getFieldDecorator('apply_proportion', {
		            rules: [],
		          })(
		          	<Input
		          		onChange={(e)=>
		          			this.props.form.setFieldsValue({
		          				policy_apply_money:this.state.drug_price*e.target.value/100
		          			})}/>
		          )}
		        </FormItem>
				<FormItem
		          	label="提成金额"
		          	{...rowFormItemLayout}>
		          {getFieldDecorator('policy_apply_money', {
		            rules: [],
		          })(
		          	<Input
		          		onChange={(e)=>{
		          			let apply_proportion=e.target.value/this.state.drug_price*100||0;
		          			if(apply_proportion>100)
		          				apply_proportion=100
		          			if(apply_proportion<0)
		          				apply_proportion=0
		          			this.props.form.setFieldsValue({apply_proportion})
		          		}}/>
		          )}
		        </FormItem>
				<FormItem
		          	label="备注内容"
		          	{...rowFormItemLayout}>
		          {getFieldDecorator('policy_apply_remark', {
		            rules: [],
		          })(
		          	<Input.TextArea/>
		          )}
		        </FormItem>
		        <div style={{textAlign:'center'}}>
		        	<Button
		        		className="cancelButton"
		        		onClick={this.closeModal.bind(this)}
		        		style={{margin:'0 20px 0 0'}}>
		        		取消
		        	</Button>
		        	<Button
		        		className="mainButton"
		        		onClick={this.save.bind(this)}>
		        		保存
		        	</Button>
		        </div>
			</Modal>
		)
	}
}

function mapPropsToFields(props) {
	let fields = {};
	const data = props.data;
	for (let i in data) {
		fields[i] = {
			value: data[i].toString()
		}
	}
	return fields
}

export default Form.create({
	mapPropsToFields
})(AddPolicyApplyModal)