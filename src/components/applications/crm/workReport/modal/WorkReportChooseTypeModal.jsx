/*
 * @Author: lcj
 * @Date:   2017-08-29 10:40:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 14:12:34
 * @Descriptions: 工作汇报-选择报表类型
 */

import React from 'react'
import {
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'

let buttonStyle = {
	width: '70px',
	height: '70px',
	lineHeight: '70px',
	textAlign: 'center',
	display: 'inline-block',
	margin: '40px'
}

export class WorkReportChooseTypeModal extends React.Component {
	constructor(props) {
		super(props)
	}

	openModal(reportType) {
		this.props.closeModal();
		this.props.openModal(reportType)
	}

	render() {
		return (
			<Modal
				visible={this.props.visible}
				footer={null}
				onCancel={this.props.closeModal}
				title="选择报表类型">
				<div style={{textAlign:'center'}}>
					<div style={buttonStyle} className="hoverButton" onClick={this.openModal.bind(this,1)}>
						日报
					</div>
					<div style={buttonStyle} className="hoverButton" onClick={this.openModal.bind(this,2)}>
						自定义
					</div>
				</div>
			</Modal>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: (reportType) => dispatch(actionCreater.openModalActionCreater(0, reportType))
	}
}

export default connect(null, mapDispatchToProps)(WorkReportChooseTypeModal)