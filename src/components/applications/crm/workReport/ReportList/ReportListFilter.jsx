/*
 * @Author: lcj
 * @Date:   2017-08-29 09:52:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:53:09
 * @Descriptions: 工作汇报-工作汇报-报表列表头部过滤
 */

import React from 'react'
import {
	Button,
	Input,
	Select
} from 'antd'
import {
	connect
} from 'react-redux'
const Option = Select.Option;
import * as actionCreater from '../../../../../actions/applications/crm/workReport/reportList/reportListFilter.js'
import WorkReportChooseTypeModal from '../modal/WorkReportChooseTypeModal.jsx'

export class ReportListFilter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
	}

	handleChange(value) {
		this.props.changeSelect(value);
		this.props.initPagination();
		this.props.refreshList({
			sale_report_type: value,
			page: 1,
			limit: 5
		});
	}

	onSearch() {
		this.props.initPagination();
		this.props.refreshList({
			filter: this.props.filter,
			page: 1,
			limit: 5
		});
	}

	changeVisible(visible = true) {
		this.setState({
			visible: visible
		})
	}

	render() {
		return (
			<div>
				<div style={{display:'inline-block'}}>
					<span>报表类型 </span>
					<Select
						value={this.props.reportType}
						style={{width:'100px'}}
						onChange={this.handleChange.bind(this)}>
						<Option value="-1">所有</Option>
						<Option value="1">日报</Option>
						<Option value="2">自定义</Option>
					</Select>
				</div>
				<div style={{display:'inline-block',float:'right'}}>
					<Input
						placeholder="输入报表名称进行查询"
						value={this.props.filter}
						style={{width:'150px'}}
						onChange={(e)=>this.props.changeFilter(e.target.value)}/>
					<Button 
						icon="search"
						className="mainButton"
						style={{margin:'0 20px 0 10px',width:'40px',fontSize:'16px'}}
						onClick={this.onSearch.bind(this)}/>
					<Button
						icon="plus"
						className="mainButton"
						style={{fontSize:'16px'}}
						onClick={()=>this.changeVisible.call(this,true)}/>
				</div>
				<WorkReportChooseTypeModal
					visible={this.state.visible}
					closeModal={()=>this.changeVisible.call(this,false)}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		reportType: state.reportListFilter.reportType,
		filter: state.reportListFilter.filter
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeSelect: (value) => dispatch(actionCreater.reportListFilterChangeSelect(value)),
		changeFilter: (filter) => dispatch(actionCreater.reportListFilterChangeFilter(filter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportListFilter)