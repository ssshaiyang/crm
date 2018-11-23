/*
 * @Author: lcj
 * @Date:   2017-08-29 13:27:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 14:35:05
 * @Descriptions: 工作汇报-新增报表-底部
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Input,
	Button,
	Card,
	message
} from 'antd'
import * as actionCreater from '../../../../../actions/applications/crm/workReport/modal/addSaleReportModal.js'
import {
	addReport,
	editReport
} from '../../../../../utils/interface.js'

export class ModalFooter extends React.Component {

	save() {
		const type = this.props.modalType;
		let params = {
			sale_report_id: this.props.sale_report_id,
			visit_record_ids: this.props.visitData.map(data => data.visit_record_id).join(','),
			sale_report_name: this.props.reportName,
			sale_report_type: this.props.reportType,
			sale_report_start_time: Math.floor(this.props.startTime.valueOf() / 1000),
			sale_report_end_time: Math.floor(this.props.endTime.valueOf() / 1000),
			sale_report_remark: this.props.reportNote
		}

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				message.success(type === 0 ? '添加成功!' : '修改成功');
				this.props.initPagination()
				this.props.refreshList({
					page: 1,
					limit: 5
				});
				this.props.cancelModal();
			}
		}
		type === 0 ? addReport(params, cb.bind(this)) : editReport(params, cb.bind(this))
	}

	render() {
		return (
			<div style={{marginTop:'10px'}}>
				<Card noHovering>
					<div style={{display:'flex'}}>
						<h3 style={{width:'80px',lineHeight:'28px',height:'28px'}}>
							日报名称
						</h3>
						<Input
							placeholder="输入报告名称"
							onChange={(e)=>this.props.changeName(e.target.value)}
							value={this.props.reportName}/>
					</div>
				</Card>
				<Card noHovering style={{marginTop:'10px'}}>
					<h3>日报备注</h3>
					<Input.TextArea
						placeholder="输入报告名称"
						onChange={(e)=>this.props.changeNote(e.target.value)}
						value={this.props.reportNote}/>
				</Card>
				<div style={{textAlign:'center',marginTop:'10px'}}>
					<Button
						className="cancelButton"
						style={{marginRight:'40px'}}
						onClick={this.props.cancelModal}>
						取消
					</Button>
					<Button
						className="mainButton"
						onClick={this.save.bind(this)}>
						保存
					</Button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const modalState = state.addSaleReportModal;
	return {
		sale_report_id: modalState.sale_report_id,
		modalType: modalState.modalType,
		reportName: modalState.reportName,
		reportNote: modalState.reportNote,
		visitData: modalState.visitData,
		startTime: modalState.startTime,
		endTime: modalState.endTime,
		reportType: modalState.reportType
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeName: (name) => dispatch(actionCreater.changeNameActionCreater(name)),
		changeNote: (note) => dispatch(actionCreater.changeNoteActionCreater(note))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter)