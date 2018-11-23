/*
 * @Author: lcj
 * @Date:   2017-09-07 19:34:09
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:31:53
 * @Descriptions: 日常报销modal
 */

import React from 'react'
import {
	Modal,
	Select,
	Input,
	Button,
	Upload,
	message
} from 'antd'
const Option = Select.Option
import Grid from '../../../../common/Grid.jsx'
import {
	addDailyApply,
	editDailyApply,
	reDailyApply,
	getApplyInformation
} from '../../../../../utils/interface.js'
const width = window.screen.availWidth > 1000 ? 800 : '100%';

export default class DailyFeeModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			gridApi: undefined,
			data: [{
				"expense_type_id": '',
				"expense_apply_statement": '',
				"expense_apply_amount": '',
				"expense_apply_money": '',
			}],
			file: '',
			defaultFileList: [],
			note: ''
		}
	}

	componentWillReceiveProps(props) {
		if (props.visible && !this.props.visible && props.modalType !== 0) {
			function cb(res) {
				if (res.error_code === GLOBALSUCCESS) {
					const data = res.data;
					this.setState({
						data: [{
							"expense_type_id": data.expense_type_id.toString(),
							"expense_apply_statement": data.expense_apply_statement,
							"expense_apply_amount": data.expense_apply_amount,
							"expense_apply_money": data.expense_apply_money,
						}],
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
	}

	/**
	 * 如果需要列表有行数据没有填完时,不能添加新的一行,则把注释取消
	 */
	addRow() {
		// const datas = this.state.gridApi.getModel().rowsToDisplay.map(item => item.data)
		// const emptyDatas = datas.filter(item => (
		// 	item.expense_type_id === '' || item.expense_apply_statement === '' || item.expense_apply_amount === '' || item.expense_apply_amount === ''
		// ))
		// if (emptyDatas.length === 0)
		this.state.gridApi.updateRowData({
			add: [{
				"expense_type_id": '',
				"expense_apply_statement": '',
				"expense_apply_amount": '',
				"expense_apply_money": '',
			}]
		})
	}

	/**
	 * 校验传参
	 * @param  {Object} params [description]
	 * @return {[type]}        [description]
	 */
	verifyParams(params = {}) {
		return true;
	}

	onOk() {
		const datas = this.state.gridApi.getModel().rowsToDisplay.map(item => item.data)
		const notEmptyDatas = datas.filter(item => (
			item.expense_type_id !== '' && item.expense_apply_statement !== '' && item.expense_apply_amount !== '' && item.expense_apply_amount !== ''
		))
		let params = {
			data: notEmptyDatas,
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
			addDailyApply(params, cb.bind(this))
		} else if (modalType === 1) {
			params.expense_apply_id = this.props.expense_apply_id;
			editDailyApply(params, cb.bind(this))
		} else {
			params.expense_apply_id = this.props.data.expense_apply_id;
			reDailyApply(params, cb.bind(this))
		}
	}

	render() {
		const modalType = this.props.modalType
		const columnDefs = {
			"index": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"expense_type_id": {
				headerName: "报销类型",
				cellRendererFramework: GridSelecter,
				cellRendererParams: {
					typeOptions: this.props.typeOptions,
					onChange: (value, data) => {
						data.expense_type_id = value;
						this.state.gridApi.updateRowData({
							update: [data]
						})
					}
				}
			},
			"expense_apply_statement": {
				headerName: "用途说明",
				editable: true
			},
			"expense_apply_amount": {
				headerName: "凭证数量",
				editable: true
			},
			"expense_apply_money": {
				headerName: "凭证金额",
				editable: true
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
				title={(modalType===0?'添加':'编辑')+'日常报销申请'}
				footer={null}
				onCancel={this.props.closeAll}>
				<Grid
					rowData={this.state.data}
					gridOptions={{stopEditingWhenGridLosesFocus:true}}
					containerStyle={{margin:'0 0 5px'}}
					componentDidMount={(that)=>this.setState({gridApi:that.gridApi})}
					columnDefs={columnDefs}/>
				<Button
					icon="plus"
					className="mainButton"
					onClick={this.addRow.bind(this)}
					/>
				<div style={{borderTop:'1px solid #eaeaea',margin:'20px 0'}}>
					<h3>附件与备注</h3>
					<div>
						<p  style={{display:'inline-block',width:'15%',lineHeight:'40px',height:'40px'}}>附件</p>
						<Upload {...uploadProps}>
						    <Button className="mainButton" disabled={!!this.state.file}>点击上传</Button>
						</Upload>
					</div>
					<div>
						<p style={{display:'inline-block',width:'15%',verticalAlign:'top'}}>内容</p>
						<Input.TextArea
							style={{width:'85%'}}
							placeholder="输入备注内容"
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
			</Modal>
		)
	}
}

class GridSelecter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Select
				style={{width:'100%',height:'18px'}}
				value={this.props.data.expense_type_id}
				onChange={(value)=>this.props.onChange(value,this.props.data)}>
				{makeOptions(this.props.typeOptions)}
			</Select>
		)
	}
}

function makeOptions(options) {
	let keys = Object.keys(options);
	return keys.map(key => (
		<Option key={key.toString()}>
				{options[key]}
			</Option>
	))
}