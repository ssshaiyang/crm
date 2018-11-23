/*
 * @Author: lcj
 * @Date:   2017-08-26 09:11:06
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 10:50:59
 * @Descriptions: 添加销售计划modal-底部按钮
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
import * as modalActionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'
import * as leftActionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'
import {
	exportDate
} from '../../../../../../utils/common.js'
import {
	saveSellPlan,
	editSellPlan
} from '../../../../../../utils/interface.js'

export class AddModalButtomButton extends React.Component {

	cancelModal() {
		this.props.closeModal();
		this.props.clearLeftModal();
	}

	save() {
		const props = this.props;
		const modalType = this.props.modalType;
		const params = {
			sale_plan_id: props.sale_plan_id,
			sale_plan_name: props.sale_plan_name,
			new_customer_target: props.new_customer_target,
			phone_customer_target: props.phone_customer_ids.length,
			phone_customer_ids: props.phone_customer_ids.map(e => e.customer_id).join(','),
			onsite_customer_target: props.onsite_customer_ids.length,
			onsite_customer_ids: props.onsite_customer_ids.map(e => e.customer_id).join(','),
			sale_plan_remark: props.sale_plan_remark,
			execute_time: exportDate(props.execute_time)
		}

        if(params.sale_plan_name&&params.new_customer_target&&params.phone_customer_target&&params.onsite_customer_target&&params.sale_plan_remark&&params.execute_time){
            function cb(res) {
                if (res.error_code === GLOBALSUCCESS) {
                    this.props.initPagination();
                    this.props.refreshList({
                        page: 1,
                        limit: 5
                    })
                    this.cancelModal();
                    message.success(modalType === 0 ? "保存成功" : "修改成功")
                }
            }
            modalType === 0 ? saveSellPlan(params, cb.bind(this)) : editSellPlan(params, cb.bind(this));
		}else{
            message.error("保存失败,请填写完整")
		}






	}

	render() {
		return (
			<div style={{textAlign:'center'}}>
				<Button
					className="cancelButton"
					onClick={this.cancelModal.bind(this)}
					style={{marginRight:'20px'}}>
					取消
				</Button>
				<Button
					className="mainButton"
					onClick={this.save.bind(this)}>
					保存
				</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const formState = state.addModalLeftForm;
	return {
		modalType: state.salePlanListAddSalePlanModal.modalType,
		sale_plan_id: state.salePlanListAddSalePlanModal.sale_plan_id,
		sale_plan_name: formState.sale_plan_name,
		new_customer_target: formState.new_customer_target,
		phone_customer_ids: formState.phone_customer_ids,
		onsite_customer_ids: formState.onsite_customer_ids,
		sale_plan_remark: formState.sale_plan_remark,
		execute_time: formState.execute_time
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(modalActionCreater.closeAddSalePlanModal()),
		clearLeftModal: () => dispatch(leftActionCreater.addModalLeftFormClearDataActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModalButtomButton)