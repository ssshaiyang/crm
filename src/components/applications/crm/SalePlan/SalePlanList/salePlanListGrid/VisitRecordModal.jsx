/*
 * @Author: lcj
 * @Date:   2017-08-25 16:28:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 17:26:40
 * @Descriptions: 销售计划-销售计划列表-拜访记录modal
 */

import React from 'react'
import {
	Modal,
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListVisitRecordModal.js'
import Grid from './VisitRecordModalGrid.jsx'

export class VisitRecordModal extends React.Component {

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				visible={this.props.visible}
				width={width}
				onCancel={this.cancelModal.bind(this)}
				key={this.props.visible}
				title={this.props.title+'拜访记录'}
				footer={null}>
				<Grid/>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.salePlanListVisitRecordModal.visible,
		data: state.salePlanListVisitRecordModal.data,
		title: state.salePlanListVisitRecordModal.title

	}
}

function mapDispatchToprops(dispatch) {
	return {
		clearModal: () => dispatch(actionCreater.clearModal()),
		closeModal: () => dispatch(actionCreater.switchSalePlanListVisitRecordModalVisible(false)),
	}
}

export default connect(mapStateToProps, mapDispatchToprops)(VisitRecordModal)