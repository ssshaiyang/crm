/*
 * @Author: lcj
 * @Date:   2017-08-24 14:37:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 15:05:38
 * @Descriptions: 客情支出render
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Input
} from 'antd'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'

export class CustomerSpendRender extends React.Component {
	constructor(props) {
		super(props)
	}

	handleChange(e) {
		this.props.onChange(this.props.rowIndex, 'customer_spend', e.target.value);
	}

	render() {
		let Style=null;
		/*let Style=null
		console.log("spend",this.props.data.customer_spend)
		if(!this.props.data.customer_spend){
			Style={border:"1px solid red"}
		}*/
		return (
			<Input style={Style} type="text" placeholder="输入金额" onChange={this.handleChange.bind(this)}/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (index, key, value) => dispatch(actionCreater.setVisitObjectActionCreater(index, key, value))
	}
}

export default connect(null, mapDispatchToProps)(CustomerSpendRender)