/*
 * @Author: lcj
 * @Date:   2017-08-15 13:52:23
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:35:09
 */

'use strict';
import React from 'react'
import {
	Icon,
	Button,
	message
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	installApp
} from '../../../utils/interface.js'

export class InstallButton extends React.Component {

	handleClick() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.props.refreshApps();
				this.props.closeModel();
				message.success('安装成功');
			}
		}
		const params = {
			application_id: this.props.application_id
		}
		installApp(params, cb.bind(this))
	}

	render() {
		const display = (this.props.status === 0 || this.props.status === 1) ? 'block' : 'none';
		console.log('',this.props.status)
		return (
			<div style={{position:'absolute',right:0,display:display}}>
				<Button 
					style={{background:'#04d7b7',color:'white'}}
					disabled={this.props.status===1}
					onClick={this.handleClick.bind(this)}>
				{
					this.props.status===0?'安装':
					<div style={{display:'flex',alignItems:'center'}}>
						<Icon type="check" style={{color:'white',fontSize:'20px'}}/>
						<span>已安装</span>
					</div>
				}
				</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		application_id: state.appDetailModel.id
	}
}

export default connect(mapStateToProps)(InstallButton)