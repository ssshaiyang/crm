/*
 * @Author: lcj
 * @Date:   2017-08-22 16:37:51
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:01:26
 * @Descriptions: 添加客户-第二步
 */

import React from 'react'
import {
	Select,
	Input,
	Button,
	Row,
	Col
} from 'antd'
const Option = Select.Option
import {
	connect
} from 'react-redux'
import {
	getDrugs
} from '../../../../../../utils/interface.js'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
import Grid from './Grid.jsx'
import AddedDrugsPanel from './AddedDrugsPanel.jsx'

export class StepTwoBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterType: "0",
			filter: ""
		}
	}

	searchDrugs() {
		let params = {
			filter_type: this.state.filterType,
			filter: this.state.filter,
			page:-1,
			limit:0
		}

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.updateDrugDatas(res.data.data)
			}
		}
		getDrugs(params, cb.bind(this))
	}

	lastStep() {
		this.props.changeStep(0)
	}

	nextStep() {
		this.props.changeStep(2)
	}

	addDrugs() {
		const drugs = this.props.stepTwoGridApi.getSelectedRows();
		for (let i in drugs) {
			this.props.addIntentionDrug(drugs[i])
		}
	}
	render() {
		return (
			<div>
				<Row style={{marginBottom:'10px'}}>
					<Col span={4} offset={4}>
						<Select
							value={this.state.filterType}
							style={{width:"100%"}}
							onChange={(filterType)=>this.setState({filterType})}>
							<Option value="0">产品名称</Option>
							<Option value="1">产品ID</Option>
							{/*<Option value="2">药监批文编号</Option>*/}
						</Select>
					</Col>
					<Col span={8} offset={1}>
						<Input
							placeholder="关键字搜索"
							value={this.state.filter}
							onChange={(e)=>this.setState({filter:e.target.value})}/>
					</Col>
					<Col span={6} offset={1}>
						<Button
							className="mainButton"
							onClick={this.searchDrugs.bind(this)}>搜索</Button>
					</Col>
				</Row>
				<div className="shadowCard">
					<Button
						className="mainButton"
						style={{margin:'10px 5px 5px'}}
						onClick={this.addDrugs.bind(this)}>
							批量添加
					</Button>
					<Grid/>
				</div>
				<div className="shadowCard" style={{marginTop:'10px'}}>
					<AddedDrugsPanel/>
				</div>
				<div style={{textAlign:'center',marginTop:'18px'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'80px'}}
						onClick={this.lastStep.bind(this)}>
						上一步
					</Button>
					<Button
						className="mainButton"
						onClick={this.nextStep.bind(this)}>
						下一步
					</Button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		durg_ids: state.addCustomerModal.data.durg_ids,
		stepTwoGridApi: state.addCustomerModal.stepTwoGridApi,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateDrugDatas: (data) => dispatch(actionCreater.updateDrugDatasActionCreater(data)),
		addIntentionDrug: (drug) => dispatch(actionCreater.addIntentionDrugActionCreater(drug))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StepTwoBlock)