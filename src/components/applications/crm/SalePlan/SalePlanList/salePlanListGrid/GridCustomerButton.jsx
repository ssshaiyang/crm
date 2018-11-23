/*
 * @Author: lcj
 * @Date:   2017-08-25 15:43:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:57:53
 * @Descriptions: 销售计划-销售计划列表-拜访达成/指标按钮组件
 */

import React from 'react'
import * as actionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListVisitRecordModal.js'
import {
	formatDateWithOutYears
} from '../../../../../../utils/common.js'
import {
	connect
} from 'react-redux'

export class GridCumstomerButton extends React.Component {

	showVisitRecordModal() {
		const type = this.props.type;
		const sale_plan_id = this.props.data.sale_plan_id;
		const title = formatDateWithOutYears(this.props.data.execute_time, '月', '日') + ['电话', '上门'][type]
		this.props.getModalData(sale_plan_id, type, title);
		this.props.openModal();
	}

	render() {
		//0为电话,1为上门
		const type = this.props.type;
		const data = this.props.data;
		const prefix = ['phone_customer_', 'onsite_customer_'][type];
		return (
			<div
				style={{cursor:'pointer'}}
				onClick={this.showVisitRecordModal.bind(this)}>
				{data[prefix+'complete']+'/'+data[prefix+'target']}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: () => dispatch(actionCreater.switchSalePlanListVisitRecordModalVisible(true)),
		getModalData: (id, type, title) => dispatch(actionCreater.getSalePlanListVisitRecordModalData(id, type, title))
	}
}

export default connect(null, mapDispatchToProps)(GridCumstomerButton)