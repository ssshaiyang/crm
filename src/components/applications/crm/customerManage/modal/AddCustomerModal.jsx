/*
 * @Author: lcj
 * @Date:   2017-08-22 10:02:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:46:23
 * @Descriptions: 客户管理-添加客户modal
 */

import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Modal
} from 'antd'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/addCustomerModal.js'
import Steps from './addcustomerModal/Steps.jsx'
import StepOne from './addcustomerModal/StepOneBlock.jsx'
import StepTwo from './addcustomerModal/StepTwoBlock.jsx'
import StepThree from './addcustomerModal/StepThreeBlock.jsx'

let styles = {
	container: {
		width: '80%',
		margin: '0 auto'
	}
}

export class AddCustomerModal extends React.Component {
	constructor(props) {
		super(props);
	}

	closeModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				width={width}
				style={{top:0}}
				title={this.props.modalType?"修改客户信息":"添加客户"}
				onCancel={this.closeModal.bind(this)}
				footer={null}>
				<div style={Object.assign({},styles.container,{padding:'20px 0'})}>
					<Steps current={this.props.current}/>
				</div>
				<div style={styles.container}>
				{
					this.props.current===0?
						<StepOne
							closeModal={this.closeModal.bind(this)}
							changeStep={this.props.changeStep}/>
						:false
				}
				{
					this.props.current===1?
					<StepTwo
						changeStep={this.props.changeStep}/>
					:false	
				}
				{
					this.props.current===2?
					<StepThree
						closeModal={this.closeModal.bind(this)}
						changeStep={this.props.changeStep}
						initFilter={this.props.initFilter}
						initPagination={this.props.initPagination}
						refreshList={this.props.refreshList}/>
						:false	
				}
				</div>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	const modalState = state.addCustomerModal;
	return {
		visible: modalState.visible,
		//0为添加,1为修改
		modalType: modalState.modalType,
		current: modalState.current
	}
}

function mapDispatchToprops(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.closeAddCustomerModal()),
		clearModal: () => dispatch(actionCreater.clearModalActionCreater()),
		changeStep: (current) => dispatch(actionCreater.changeStepActionCreater(current))
	}
}

export default connect(mapStateToProps, mapDispatchToprops)(AddCustomerModal)