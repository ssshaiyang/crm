/*
 * @Author: lcj
 * @Date:   2017-08-24 19:54:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 20:53:49
 * @Descriptions: 客户管理-批量导入新用户-通过模板导入
 */

import React from 'react'
import {
	Modal,
	Button,
	Upload,
	message,
	Col,
	Row
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../../actions/applications/crm/customerManage/modal/importNewUserModal.js'
import {
	uploadCustomer,
	downloadCustomer,
	importCustomerByFile
} from '../../../../../utils/interface.js'

export class ImportNewuserModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: '',
			filePath: ''
		}
	}

	beforeUpload(file) {
		this.setState({
			file
		})
	}

	handleClose() {
		this.setState({
			file: '',
			filePath: ''
		})
		this.props.closeModal()
	}

	onRemove() {
		this.setState({
			file: '',
			filePath: ''
		})
	}

	import () {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					filePath: res.data
				})
			}
		}
		uploadCustomer(this.state.file, cb.bind(this))
	}

	onOk() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.closeModal();
				message.success("导入成功!")
				this.props.initFilter();
				this.props.initPagination();
				this.props.refreshList();
			}
		}
		let params = {
			file: this.state.filePath
		}
		importCustomerByFile(params, cb.bind(this))
	}

	render() {
		console.log(this.state.file)
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				footer={null}
				fileList= {[this.state.file]}
				onCancel={this.handleClose.bind(this)}
				title="批量导入新用户">
				<p style={{textAlign:'center',marginBottom:'10px'}}>
					注:请先下载
						<a
							target="_blank"
							href={GLOBALURL+"/customers/download"}>批量导入模板</a>
					,按模板格式录入数据后,在此导入
				</p>
				<Row>
					<Col span={18} offset={2}>
						<Upload
							beforeUpload={this.beforeUpload.bind(this)}
							onRemove={this.onRemove.bind(this)}>
					    	<Button disabled={!!this.state.file}>
					      		浏览
					    	</Button>
					  	</Upload>
					</Col>
					<Col span={4}>
				  		<Button onClick={this.import.bind(this)}>导入</Button>
				  	</Col>
				</Row>
				<div style={{textAlign:'center',margin:'10px 0'}}>
					<Button style={{marginRight:'20px'}} className="cancelButton" onClick={this.handleClose.bind(this)}>关闭</Button>
					<Button className="mainButton" onClick={this.onOk.bind(this)} disabled={!this.state.filePath}>确认</Button>
				</div>
			</Modal>
		)
	}
}

function mapStateToProps(state) {
	return {
		visible: state.importNewUserModal.visible,
	}
}

function mapDispatchToprops(dispatch) {
	return {
		closeModal: () => dispatch(actionCreater.switchModalVisibleActionCreater(false))
	}
}

export default connect(mapStateToProps, mapDispatchToprops)(ImportNewuserModal)