/*
 * @Author: lcj
 * @Date:   2017-08-24 15:49:55
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 16:32:20
 * @Descriptions: 批量导入-跟进记录-添加客户按钮
 */

import React from 'react';
import {
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	switchModalVisibleActionCreater
} from '../../../../../../actions/applications/crm/customerManage/modal/addVisitCustomerModal.js'

export class AddCustomerButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{
				Object.keys(this.props.sellPlanOptions).length!=0?
				<Button
					className="mainButton"
					onClick={this.props.openModal}>
					添加客户
				</Button>:''
            }
			</div>

		)
	}
}
    function mapStateToprops(state) {
        return {
            sellPlanOptions: state.followRecordModal.sellPlanOptions,
        }
    }
function mapDispatchToprops(dispatch) {
	return {
		openModal: () => dispatch(switchModalVisibleActionCreater(true))
	}
}

export default connect(mapStateToprops, mapDispatchToprops)(AddCustomerButton)