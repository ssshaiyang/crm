// /*
//  * @Author: lcj
//  * @Date:   2017-08-25 18:47:36
//  * @Last Modified by:   lcj
//  * @Last Modified time: 2017-08-26 10:50:10
//  * @Descriptions: 销售计划-添加销售计划
//  */

// import React from 'react'
// import {
// 	Modal,
// 	Row,
// 	Col
// } from 'antd'
// import {
// 	connect
// } from 'react-redux'
// import {
// 		Route,
//        Link
//    } from 'react-router-dom'
// import * as actionCreater from '../../../../../actions/applications/crm/salePlan/salePlanList/salePlanListAddSalePlanModal.js'
// import {
// 	addModalLeftFormClearDataActionCreater
// } from '../../../../../actions/applications/crm/salePlan/salePlanList/addSalePlanModal/addModalLeftForm.js'
// import AddModalLeftForm from './addSalePlanModal/AddModalLeftForm.jsx'
// import Grid from './addSalePlanModal/AddModalRightGrid.jsx'
// import AddModalBottomButton from './addSalePlanModal/AddModalBottomButton.jsx'

// export class pushSubmitMeetingModal extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	cancelModal() {
// 		this.props.closeModal()
// 		this.props.clearLeftModal()
// 	}

// 	render() {
// 		const width = window.screen.availWidth > 1000 ? 800 : '100%';
// 		return (
// 			<Modal
// 				visible={this.props.visible}
// 				width={width}
// 				onCancel={this.cancelModal.bind(this)}
// 				footer={null}
// 				title={this.props.modalType===0?'添加销售计划':'修改销售计划'}
// 				key={this.props.visible}>
// 				<Row>
// 					<Col span={10}>
// 						<AddModalLeftForm/>
// 					</Col>
// 					<Col span={14}>
// 						<Grid/>
// 					</Col>
// 				</Row>
// 				<AddModalBottomButton
// 					refreshList={this.props.refreshList}
// 			 		initPagination={this.props.initPagination}/>
// 			</Modal>
// 		)
// 	}
// }

// function mapStateToProps(state) {
// 	const modalState = state.salePlanListAddSalePlanModal
// 	return {
// 		visible: modalState.visible,
// 		modalType: modalState.modalType
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		closeModal: () => dispatch(actionCreater.closeAddSalePlanModal()),
// 		clearLeftModal: () => dispatch(addModalLeftFormClearDataActionCreater())
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SalePlanListAddSalePlanModal)