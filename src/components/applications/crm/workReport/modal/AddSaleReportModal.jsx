/*
 * @Author: lcj
 * @Date:   2017-08-29 10:53:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 14:34:34
 * @Descriptions: 工作汇报-添加销售日报
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Button,
	Input,
	Modal,
	Row
} from 'antd'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'
import ModalDatePicker from './ModalDatePicker.jsx'
import PlanDataPanel from './PlanDataPanel.jsx'
import VisitRecordPanel from './VisitRecordPanel.jsx'
import ModalFooter from './ModalFooter.jsx'

export class AddSaleReport extends React.Component {
	constructor(props) {
		super(props)
	}

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 1000 : '100%';
		const reportType = ['','销售日报', '自定义销售报表'][this.props.reportType]
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				width={width}
				onCancel={this.cancelModal.bind(this)}
				footer={null}
				title={this.props.modalType===0?`添加${reportType}`:`编辑${reportType}`}>
				<Row>
					<ModalDatePicker/>
					<PlanDataPanel/>
				</Row>
				<VisitRecordPanel/>
				<ModalFooter
					cancelModal={this.cancelModal.bind(this)}
					refreshList={this.props.refreshList}
					initPagination={this.props.initPagination}/>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.addSaleReportModal.visible,
		sale_report_id: state.addSaleReportModal.sale_report_id,
		modalType: state.addSaleReportModal.modalType,
		reportType: state.addSaleReportModal.reportType,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.closeModalActionCreater()),
		clearModal: () => dispatch(actionCreater.clearModalActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSaleReport)