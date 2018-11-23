/*
 * @Author: lcj
 * @Date:   2017-08-23 13:10:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 13:51:27
 * @Descriptions: 客户管理-产品意向Modal
 */

import React from 'react'
import {
	Modal,
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import Grid from './productWantedModal/ProductWantedModalGrid.jsx'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/productWantedModal.js'

let styles = {
	tip: {
		textAlign: 'center',
		fontSize: '14px',
		color: '#bababa'
	}
}

export class ProductWantedModal extends React.Component {
	constructor(props) {
		super(props);
	}

	cancelModal() {
		this.props.closeModal();
		this.props.clearModal();
	}

	render() {
		const width = window.screen.availWidth > 1000 ? 800 : '100%';
		return (
			<Modal
				width={width}
				title={this.props.customerName+"·产品意向"}
				footer={null}
				visible={this.props.visible}
				onCancel={this.cancelModal.bind(this)}>
				<p style={styles.tip}>友情提示:通过编辑医生可添加新的产品</p>
				<Grid/>
				<div style={{textAlign:'center'}}>
					<Button
						className="mainButton"
						onClick={this.cancelModal.bind(this)}
						style={{marginTop:'10px'}}>
						关闭
					</Button>
				</div>
			</Modal>
		)
	}
}

ProductWantedModal.defaultProps = {
	customerName: 'name'
}

function mapStateToProps(state) {
	return {
		visible: state.productWantedModal.visible,
		customerName: state.productWantedModal.customerName
	}
}

function mapDispatchToProps(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchProductWantedModalVisibleActionCreater(false)),
		clearModal: () => dispatch(actionCreater.clearModalActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductWantedModal)