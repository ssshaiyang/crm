/*
 * @Author: lcj
 * @Date:   2017-08-26 09:35:10
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:39:45
 * @Descriptions: 销售计划-销售计划列表-操作列按钮
 */

import React from 'react'
import {
	Button,
	message,
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	deleteSellPlan,
	copySellPlan
} from '../../../../../../utils/interface.js'
import {
	openAddSalePlanModal
} from '../../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'
import {
	getModalLeftFormChangeFormDataActionCreater
} from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'

export class ActionButton extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}

	copy(sale_plan_id) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.initPagination();
				this.props.refreshList({
					page: 1,
					limit: 5
				});
				message.success("复制成功!")
			}
		}
		const saleName = this.props.data.sale_plan_name;
		Modal.confirm({
			title: `复制·${saleName}`,
			content: `正在对\"${saleName}\"进行复制操作,复制后将新增一条销售计划记录却内容与该计划相同,确认复制吗`,
			onOk: () => {
				let params = {
					sale_plan_id
				}
				copySellPlan(params, cb.bind(this))
			}
		})
	}

	delete(sale_plan_id) {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.initPagination();
				this.props.refreshList({
					page: 1,
					limit: 5
				});
				message.success("删除成功!")
			}
		}
		const saleName = this.props.data.sale_plan_name;
		Modal.confirm({
			title: `删除·${saleName}`,
			content: `正在对\"${saleName}\"进行删除操作,删除后关联数据将被清除,请确认`,
			onOk: () => {
				let params = {
					sale_plan_id
				}
				deleteSellPlan(params, cb.bind(this))
			}
		})
	}

	edit(sale_plan_id) {
		console.log(sale_plan_id)
		this.props.getModalData(sale_plan_id)
		this.props.openModal(1, sale_plan_id)
	}

	render() {
		const sale_plan_id = this.props.data.sale_plan_id;
		return (
			<div>
				<Button icon="copy" className="gridButton" onClick={this.copy.bind(this,sale_plan_id)}/>
				<Button icon="revise" className="gridButton" style={{margin:'0 5px'}} onClick={this.edit.bind(this,sale_plan_id)}/>
				<Button icon="delete" className="gridButton" onClick={this.delete.bind(this,sale_plan_id)}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: (type, id) => dispatch(openAddSalePlanModal(type, id)),
		getModalData: (id) => dispatch(getModalLeftFormChangeFormDataActionCreater(id))
	}
}

export default connect(null, mapDispatchToProps)(ActionButton)