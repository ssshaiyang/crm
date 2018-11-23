/*
 * @Author: lcj
 * @Date:   2017-08-15 14:10:32
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 15:34:51
 */

'use strict';

import React from 'react';
import {
	Button,
	message,
	Modal
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	unInstallApp
} from '../../../utils/interface.js'
import './css/unInstallButton.css'

export class UnInstallButton extends React.Component {

	handleClick() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.refreshApps();
				this.props.closeModel();
				message.success('卸载成功');
			}
		}
		const params = {
			application_id: this.props.application_id
		}
		unInstallApp(params, cb.bind(this))
	}

	confirm() {
		const content = <p style={{textAlign:'center'}}>{'您确认要卸载' + this.props.name + '应用吗?'}</p>
		Modal.confirm({
			content: content,
			iconType: null,
			onOk: this.handleClick.bind(this)
		})
	}

	render() {
		const display = this.props.status === 1 ? 'block' : 'none';
		return (
			<Button
				style={{float:'right',display:display}}
				onClick={this.confirm.bind(this)}>
				<p>卸载</p>
			</Button>
		)
	}
}

function mapStateToProps(state) {
	return {
		application_id: state.appDetailModel.id
	}
}

export default connect(mapStateToProps)(UnInstallButton)