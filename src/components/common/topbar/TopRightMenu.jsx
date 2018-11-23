/*
 * @Author: lcj
 * @Date:   2017-08-10 16:09:11
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 10:25:47
 */

'use strict';
import React from 'react'
import {get,
    post,
    put,
    del,
    uploadFile
} from '../../../utils/interfaces/setup.js'
import {
	Menu,
	Dropdown,
	Icon,
	Avatar
} from 'antd'
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../actions/global.js'

let styles = {
	bell: {
		fontSize: '16px',
		color: 'white',
		background: 'rgb(61,75,95)',
		padding: "7px",
		borderRadius: "2px",
		cursor: 'pointer'
	}
}

export class TopRightMenu extends React.Component {
	render() {
		const Overlay = this.props.companyLogined ? CompanyDropDownMenu : DropDownMenu;
		return (
			<div>
				<Dropdown overlay={<Overlay logout={this.props.companyLogOut}/>} placement="bottomCenter">
					<div style={{display:'flex',alignItems:'center'}}>
						<Avatar shape="square" size="large" icon="user"/>
						<p style={{marginLeft:'2px'}}>{sessionStorage.getItem('nickname')||localStorage.getItem('nickname')}</p>
						<Icon type="caret-down"/>
					</div>
				</Dropdown>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		companyLogOut: () => dispatch(actionCreater.globalChangeCompanyLogined(false, null))
	}
}

function mapStateToprops(state) {
	return {
		companyLogined: state.global.companyLogined
	}
}

export default connect(mapStateToprops, mapDispatchToProps)(TopRightMenu)

class DropDownMenu extends React.Component {

	handleClick(params) {
		let key = params.key;
		switch (key) {
			case 'outLogin':
				localStorage.clear();
				sessionStorage.clear();
				break;
		}
	}

	render() {
		return (
			<Menu onClick={this.handleClick.bind(this)}>
		    	<Menu.Item>
		     		<Link to='/selfSetting'>个人设置</Link>
		    	</Menu.Item>
		    	<Menu.Item key='outLogin'>
		     		<Link to='/login'>退出登录</Link>
		    	</Menu.Item>
		  </Menu>
		)
	}
}

class CompanyDropDownMenu extends React.Component {
	handleClick(params) {
		let key = params.key;
		switch (key) {
			case 'outLogin':
				sessionStorage.removeItem('epluscompanyName');
				sessionStorage.removeItem("adminLogedPass");
                var company_id = sessionStorage.getItem("company_id");
                function cb(res){
                    if (res.error_code === GLOBALSUCCESS) {
                        console.log(111)
					}
                }
                get('/companies/logout?company_id='+company_id,null,cb)
				this.props.logout();
				break;
		}
	}

	render() {
		return (
			<Menu onClick={this.handleClick.bind(this)}>
		    	<Menu.Item>
		     		<Link to='/companySetting'>员工设置</Link>
		    	</Menu.Item>
		    	<Menu.Item key='outLogin'>
		     		<Link to='/'>退出企业</Link>
		    	</Menu.Item>
		  </Menu>
		)
	}
}