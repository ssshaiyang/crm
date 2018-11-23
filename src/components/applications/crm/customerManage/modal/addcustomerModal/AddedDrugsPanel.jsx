/*
 * @Author: lcj
 * @Date:   2017-08-22 19:08:03
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:03:47
 * @Descriptions: 添加客户第二步-已经添加的药品展板
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Tag
} from 'antd'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'

export class AddedDrugsPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	makeTags() {
		const drugs = this.props.drugSelecteds;
		let tags = [];
		for (let key in drugs) {
			let drug = {
				drug_id: key,
				drug_name: drugs[key]
			}
			tags.push(
				<Tag closable key={key} style={{margin:'5px'}} onClose={()=>this.props.removeIntentionDrug(drug)}>
					{drugs[key]}
				</Tag>
			)
		}
		return tags;
	}

	render() {
		return (
			<div style={{height:'65px',overflowY:'auto'}}>
				{this.makeTags.call(this)}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		drugSelecteds: Object.assign({}, state.addCustomerModal.drugSelecteds)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		removeIntentionDrug: (drug) => dispatch(actionCreater.removeIntentionDrugActionCreater(drug))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedDrugsPanel)