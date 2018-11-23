/*
 * @Author: lcj
 * @Date:   2017-08-24 14:40:03
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 15:05:42
 * @Descriptions: 拜访记录render
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Input
} from 'antd'
import * as actionCreater from '../../../../../../actions/applications/crm/customerManage/modal/followRecordModal.js'

export class VisitContentRender extends React.Component {

	handleChange(e) {
		this.props.onChange(this.props.rowIndex, 'visit_content', e.target.value)
	}

	render() {
		return (
			<Input type="text" placeholder="输入拜访记录" onChange={this.handleChange.bind(this)}/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onChange: (index, key, value) => dispatch(actionCreater.setVisitObjectActionCreater(index, key, value))
	}
}

export default connect(null, mapDispatchToProps)(VisitContentRender)