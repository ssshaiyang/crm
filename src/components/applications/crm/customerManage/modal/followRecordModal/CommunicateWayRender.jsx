/*
 * @Author: lcj
 * @Date:   2017-08-24 14:28:04
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 14:14:42
 * @Descriptions: 批量导入-跟进记录-拜访方式render
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Select
} from 'antd'
const Option = Select.Option
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'

export class CommunicateWayRender extends React.Component {

	handleChange(value) {
		this.props.onChange(this.props.rowIndex, 'communicate_way', value);
	}

	render() {
		return (
			<Select
				size="small"
				defaultValue={"0"}
				onChange={this.handleChange.bind(this)}>
				<Option value={"0"}>未拜访</Option>
				<Option value={"1"}>电话拜访</Option>
				<Option value={"2"}>上门拜访</Option>
			</Select>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (index, key, value) => dispatch(actionCreater.setVisitObjectActionCreater(index, key, value))
	}
}

export default connect(null, mapDispatchToProps)(CommunicateWayRender)