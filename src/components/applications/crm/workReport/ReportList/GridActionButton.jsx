/*
 * @Author: lcj
 * @Date:   2017-08-29 14:38:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:37:03
 * @Descriptions: 报表列表-操作按钮renderer
 */

import React from 'react'
import {
	Button,
	Modal,
	message
} from 'antd'
import moment from 'moment'
import {
	connect
} from 'react-redux'
import {
	deleteReport
} from '../../../../../utils/interface.js'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'

export class GridActionButton extends React.Component {

	delete() {
		const sale_report_id = this.props.data.sale_report_id;
		const name = this.props.data.sale_report_name;
		Modal.confirm({
			title: `删除·${name}`,
			content: `正在对报告${name}进行删除操作,请确认`,
			iconType: null,
			onOk: () => {
				function cb(res) {
					if (res.error_code === GLOBALSUCCESS) {
						this.props.api.updateRowData({
							remove: [this.props.data]
						})
						message.success(`删除报告${name}成功!`)
					}
				}
				deleteReport({
					sale_report_id
				}, cb.bind(this))
			}
		})
	}

	edit() {
		const sale_report_id = this.props.data.sale_report_id;
		const name = this.props.data.sale_report_name;
		const note = this.props.data.sale_report_remark;
		const startTime = moment(this.props.data.sale_report_start_time * 1000);
		const endTime = moment(this.props.data.sale_report_end_time * 1000);
		this.props.changeRange([startTime, endTime])
		this.props.changeName(name);
		this.props.changeNote(note);
		this.props.openModal(sale_report_id);

	}

	render() {
		return (
			<div>
				<Button icon='export' className='gridButton'/>
				<Button
					icon='edit'
					className='gridButton'
					style={{margin:'0 5px'}}
					onClick={this.edit.bind(this)}/>
				<Button
					icon='delete'
					className='gridButton'
					onClick={this.delete.bind(this)}/>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		openModal: (sale_report_id) => dispatch(actionCreater.openModalActionCreater(1, 0, sale_report_id)),
		changeName: (name) => dispatch(actionCreater.changeNameActionCreater(name)),
		changeNote: (note) => dispatch(actionCreater.changeNoteActionCreater(note)),
		changeRange: (range) => dispatch(actionCreater.changeModalRangeActionCreater(range))
	}
}

export default connect(null, mapDispatchToProps)(GridActionButton)