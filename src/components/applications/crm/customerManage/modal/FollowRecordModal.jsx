/*
 * @Author: lcj
 * @Date:   2017-08-24 10:12:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 14:40:27
 * @Descriptions: 客户管理-批量导入-跟进记录
 */

import React from 'react'
import {
	Modal,
	Select,
	Input,
	Button,
	message
} from 'antd'
const Option = Select.Option
import {
	connect
} from 'react-redux'
import {
	saveVisitObject
} from '../../../../../utils/interface.js'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'
import Grid from './followRecordModal/Grid.jsx'
import AddCustomerButton from './followRecordModal/AddCustomerButton.jsx'

export class FollowRecordModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			limit: 5
		}
	}

	componentWillReceiveProps(props) {
		const visible = props.visible;
		if (visible!=this.props.visible) {
			if(visible){
                if (props.sellPlanOptions.length === 0)
                    this.props.getOptions(1, this.state.limit);
                }
			}

	}

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	makeOptions() {
		const options = this.props.sellPlanOptions;
		let keys = Object.keys(options);
		return keys.map(key =>
			<Option value={key} key={key}>
				{options[key]}
			</Option>
		)
	}

	handleChange(value) {
		if (value === 'more') {
			const limit = this.state.limit * 2;
			this.props.getOptions(0, limit)
			this.setState({
				limit
			})
			return;
		}
		this.props.changeSelect(value);
		this.props.getVisitObject(value);
	}

	save() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.cancelModal();
				message.success("保存成功!")
			}
		}
		const visitCustomers = this.props.visitCustomers;
		const execute_time = this.props.execute_time;
		let data = visitCustomers.filter((visitCustomer) => {
			return visitCustomer.communicate_way > 0 && visitCustomer.customer_spend !== undefined
		})
		data = data.map(e => ({
			customer_id: e.customer_id,
			communicate_way: e.communicate_way,
			customer_spend: e.customer_spend,
			visit_content: e.visit_content
		}))
		const params = {
			data: data,
			visit_date: execute_time
		}
		saveVisitObject(params, cb.bind(this))
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				width={width}
				title="批量导入-跟进记录"
				onCancel={this.cancelModal.bind(this)}
				footer={null}>
				<div>
					<div>
						<span style={{marginRight:'10px',color:'#5b616f'}}>选择计划</span>
						<Select
							style={{ width: 200 }}
							value={this.props.sellPlan}
							onChange={this.handleChange.bind(this)}>
							{this.makeOptions.call(this)}
							<Option key="more">更多</Option>
						</Select>
						<div style={{float:'right'}}>
							<Input
								placeholder="输入计划名称搜索"
								style={{width:"150px",marginRight:'10px'}}
								value={this.props.filter}
								onChange={this.props.changeFilter}/>
							<Button
								className="mainButton"
								onClick={()=>this.props.getOptions(1)}>搜索</Button>
						</div>
					</div>
				</div>
				<AddCustomerButton/>
				<Grid/>
				<div style={{textAlign:'center'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'20px'}}
						onClick={this.cancelModal.bind(this)}>
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

function mapStateToProps(state) {
	return {
		visible: state.followRecordModal.visible,
		sellPlanOptions: state.followRecordModal.sellPlanOptions,
		sellPlan: state.followRecordModal.sellPlan,
		filter: state.followRecordModal.filter,
		visitCustomers: state.followRecordModal.visitCustomers,
		execute_time: state.followRecordModal.execute_time,
		gridApi: state.followRecordModal.gridApi
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchFollowRecordModalActionCreater(false)),
		clearModal: () => dispatch(actionCreater.clearFollowRecordModalActionCreater()),
		getOptions: (isSelectFirst, limit = 5) => dispatch(actionCreater.initSellPlanOptionsActionCreater(isSelectFirst, limit)),
		changeSelect: (value) => dispatch(actionCreater.changeSelectOptionActionCreater(value)),
		changeFilter: (e) => dispatch(actionCreater.changeFilterActionCreater(e.target.value)),
		getVisitObject: (sale_plan_id) => dispatch(actionCreater.getVisitObjectActionCreater(sale_plan_id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowRecordModal)