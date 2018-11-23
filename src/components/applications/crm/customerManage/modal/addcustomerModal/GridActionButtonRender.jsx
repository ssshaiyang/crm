/*
 * @Author: lcj
 * @Date:   2017-08-22 18:58:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-22 19:01:18
 * @Descriptions: 表格最右侧按钮组件
 */

import React from 'react'
import {
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'

export class ActionButton extends React.Component {

	handleClick() {
		const drug = {
			drug_id: this.props.data.drug_id,
			drug_name: this.props.data.drug_name
		}
		this.props.addIntentionDrug(drug)
	}

	render() {
		return (
			<Button style={{height:'18px'}} icon="plus" onClick={this.handleClick.bind(this)}/>
		)
	}
}

function mapStateToprops() {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		addIntentionDrug: (drug) => dispatch(actionCreater.addIntentionDrugActionCreater(drug))
	}
}

export default connect(mapStateToprops, mapDispatchToProps)(ActionButton)