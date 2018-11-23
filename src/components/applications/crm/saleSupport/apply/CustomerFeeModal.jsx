/*
 * @Author: lcj
 * @Date:   2017-09-07 19:29:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:49:49
 * @Descriptions: 客情费申请moda
 */

import React from 'react'
import {
	Modal,
	Row,
	Col,
	Input,
	Button,
	DatePicker,
	Upload,
	InputNumber,
	message
} from 'antd'
const width = window.screen.availWidth > 1000 ? 800 : '100%';
import moment from 'moment'
import Grid from '../../../../common/Grid.jsx'
import {
	getVisiRecordList,
	addCustomerApply,
	getApplyInformation,
	editCustomerApply,
	reCustomerApply
} from '../../../../../utils/interface.js'
import {
	exportDate,
	formatDateWithOutYears
} from '../../../../../utils/common.js'

const shadowCard = {
	margin: '10px 0 ',
	padding: '10px'
}
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

export default class CustomerFeeModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visitList: [],
			time: moment(),
			filter: '',
			gridApi: undefined,
			feeUsage: '',
			fee: 0,
			note: '',
			editted: {},
			selected: [],
			selectedFee: 0,
			file: '',
			defaultFileList: [],
		}
	}

	componentWillMount() {
		this.getVisitList.call(this)
	}

	componentWillReceiveProps(props) {
		if (props.visible && !this.props.visible && props.modalType !== 0) {
			function cb(res) {
				if (res.error_code === GLOBALSUCCESS) {
					const data = res.data;
					const selected = data.expense_user_id.split(',').map(item => ({
						data: {
							visit_record_id: item
						}
					}))
					this.setState({
						selected: selected,
						selectedFee: data.expense_apply_money,
						feeUsage: data.expense_apply_statement,
						fee: data.expense_additional_fee,
						file: data.expense_apply_file,
						defaultFileList: [{
							uid: -1,
							name: '附件',
							status: 'done',
							url: data.expense_apply_file,
							thumbUrl: data.expense_apply_file,
						}],
						note: data.expense_apply_remark
					})
				}
			}
			const params = {
				expense_apply_id: props.data.expense_apply_id
			}
			getApplyInformation(params, cb.bind(this))
		}
		if (!props.visible && this.props.visible) {
			this.setState({
				time: moment(),
				filter: '',
				feeUsage: '',
				fee: 0,
				note: '',
				editted: {},
				selected: [],
				selectedFee: 0,
				file: '',
				defaultFileList: [],
			})
		}
	}

	/**
	 * 获取拜访记录列表
	 * @param  {Object} params [description]
	 * @return {[type]}        [description]
	 */
	getVisitList(params = {}) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					visitList: res.data.data
				})
			}
		}
		let param = {
			start_time: exportDate(params.time || this.state.time),
			end_time: exportDate(params.time || this.state.time),
			page: -1,
			limit: -1,
			filter: this.state.filter
		}
		if (params.time === null) {
			param.start_time = undefined
			param.end_time = undefined
		}
		getVisiRecordList(param, cb.bind(this))
	}

	handleTimeChange(time) {
		this.setState({
			time
		})
		this.getVisitList.call(this, {
			time
		})
	}

	/**
	 * 修改拜访记录
	 * @param  {[type]} shouldEdit [description]
	 * @return {[type]}            [description]
	 */
	editVisit(shouldEdit) {
		for (let i in shouldEdit) {
			const data = shouldEdit[i];
			editCustomerVisitRecord(data, () => false)
		}
	}

	/**
	 * 保存列表所选项
	 * @return {[type]} [description]
	 */
	saveSelected() {
		const selected = this.state.gridApi.getSelectedNodes();
		let selectedFee = 0;
		selected.map(item => selectedFee += item.data.customer_spend);
		this.setState({
			selected,
			selectedFee
		});
		//修改过且应该保存的值
		const shouldEdit = selected.filter(item => this.state.editted[item.rowIndex]).map(item => item.data)
		this.editVisit(shouldEdit);
	}

	/**
	 * 校验传参
	 * @param  {Object} params [description]
	 * @return {[type]}        [description]
	 */
	verifyParams(params = {}) {
		return true;
	}

	/**
	 * 保存
	 * @return {[type]} [description]
	 */
	onOk() {
		console.log(this.state.selected)
		let params = {
			expense_user_id: this.state.selected.map(item => item.data.visit_record_id).join(','),
			expense_apply_money: this.state.selectedFee,
			expense_additional_fee: this.state.fee,
			expense_apply_statement: this.state.feeUsage,
			expense_apply_file: this.state.file,
			expense_apply_remark: this.state.note
		}
		if (!this.verifyParams(params))
			return false;
		const modalType = this.props.modalType;

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success(modalType === 0 ? '保存成功' : '编辑成功');
				this.props.over();
				this.props.closeAll();
			}
		}
		if (modalType === 0) {
			addCustomerApply(params, cb.bind(this))
		} else if (modalType === 1) {
			params.expense_apply_id = this.props.expense_apply_id;

			editCustomerApply(params, cb.bind(this))
		} else {
			params.expense_apply_id = this.props.expense_apply_id;
			reCustomerApply(params, cb.bind(this))
		}
	}

	render() {
		const modalType = this.props.modalType
		const columnDefs = {
			"customer_name": "拜访对象",
			"communicate_way": {
				headerName: "拜访方式",
				valueGetter: (params) => ['未拜访', '电话拜访', '上门拜访'][params.data.communicate_way]
			},
			"visit_date": {
				headerName: "拜访日期",
				valueGetter: (params) => formatDateWithOutYears(params.data.visit_date, '月', '日')
			},
			"customer_spend": {
				headerName: "客情支出",
				editable: true,
				onCellValueChanged: (params) => {
					const rowIndex = params.node.rowIndex;
					let editted = this.state.editted;
					editted[rowIndex] = true;
					this.setState({
						editted
					})
				}
			},
		}
		const uploadProps = {
			// action: '/expense/upload',
			name: 'daily_expense_file',
			action: '//jsonplaceholder.typicode.com/posts/',
			headers: {
				authorization: 'authorization-text',
			},
			defaultFileList: this.state.defaultFileList,
			onChange: (e) => {
				// if(e.file.status==='done'){
				if (e.file.status === 'uploading') {
					const res = e.file.response;
					// if (res.error_code === GLOBALSUCCESS) {
					this.setState({
						// file: res.data.daily_expense_file
						file: 'test.xml'
					});
					// }
				}
			},
			onRemove: () => this.setState({
				file: ''
			}),
			disabled: !!this.state.file
		}
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				width={width}
				onCancel={this.props.closeAll}
				title={(modalType === 0 ? '添加' : '编辑') + '客情费申请'}
				footer={null}>
				<div>
					<div className="shadowCard" style={shadowCard}>
						<Input
							placeholder='拜访对象姓名'
							style={{width:'30%'}}
							value={this.state.filter}
							onChange={(e)=>this.setState({filter:e.target.value})}/>
						<Button
							icon="search"
							style={{margin:'0 10px'}}
							className="mainButton"
							onClick={this.getVisitList.bind(this)}/>
						<DatePicker
							value={this.state.time}
							onChange={this.handleTimeChange.bind(this)}/>
						<Button
							className="mainButton"
							style={{float:'right'}}
							onClick={this.saveSelected.bind(this)}>
							保存
						</Button>
					</div>
					<div className="shadowCard" style={shadowCard}>
						<Grid
							rowData={this.state.visitList}
							containerStyle={{margin:'0'}}
							selection
							gridOptions={{stopEditingWhenGridLosesFocus:true,suppressRowClickSelection:true}}
							componentDidMount={(that)=>this.setState({gridApi:that.gridApi})}
							columnDefs={columnDefs}/>
					</div>
					<div
						className="shadowCard"
						style={Object.assign({},shadowCard,{paddingLeft:'40px'})}>
						<h3 style={{lineHeight:'40px',height:'40px'}}>报销核对</h3>
						<p style={{lineHeight:'40px',height:'40px'}}>
							<span style={{marginRight:'30px'}}>人数</span>
							<span>
								{this.state.selected.length}
							</span>
						</p>
						<p style={{lineHeight:'40px',height:'40px'}}>
							<span style={{marginRight:'30px'}}>金额</span>
							<span>
								{this.state.selectedFee}
							</span>
						</p>
					</div>
					<div
						className="shadowCard"
						style={Object.assign({},shadowCard,{paddingLeft:'40px'})}>
						<h3>报销核对</h3>
						<div style={{display:'inline-block',width:'45%',marginRight:'10%',height:'40px',lineHeight:'40px'}}>
							<p style={{display:'inline-block',width:'15%',textAlign:'left'}}>内容</p>
							<Input
								style={{width:'85%'}}
								placeholder="输入费用用途"
								value={this.state.feeUsage}
								onChange={(e)=>this.setState({feeUsage:e.target.value})}/>
						</div>
						<div style={{display:'inline-block',width:'45%'}}>
							<p style={{display:'inline-block',width:'15%',textAlign:'left'}}>费用</p>
							<InputNumber
								style={{width:'85%'}}
								placeholder="输入费用金额"
								value={this.state.fee}
								onChange={(fee)=>this.setState({fee})}/>
						</div>
					</div>
					<div
						className="shadowCard"
						style={Object.assign({},shadowCard,{paddingLeft:'40px'})}>
						<h3>附件与备注</h3>
						<div>
							<p style={{display:'inline-block',width:'15%',textAlign:'left',height:'40px',lineHeight:'40px'}}>
								附件
							</p>
							<Upload {...uploadProps}>
							    <Button className="mainButton" disabled={!!this.state.file}>点击上传</Button>
							</Upload>
						</div>
						<div>
							<p style={{display:'inline-block',width:'15%',textAlign:'left',verticalAlign:'top'}}>
								备注
							</p>
							<Input.TextArea
								style={{width:'85%'}}
								value={this.state.note}
								onChange={(e)=>this.setState({note:e.target.value})}/>
						</div>
					</div>
					<div style={{textAlign:'center'}}>
						<Button
							className="cancelButton"
							style={{marginRight:'20px'}}
							onClick={this.props.closeModal}>
							返回
						</Button>
						<Button
							className="mainButton"
							onClick={this.onOk.bind(this)}>
							保存
						</Button>
					</div>
				</div>
			</Modal>
		)
	}
}