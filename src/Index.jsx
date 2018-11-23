/*
 * @Author: lcj
 * @Date:   2017-08-01 14:06:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 17:18:59
 * @Description : 进行页面级别的路由控制
 */
'use strict';

import React from 'react';
import {
	connect
} from 'react-redux'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import "antd/dist/antd.less";
import "./utils/custom.less"
import * as actionCreater from './actions/global.js'
import TopBar from './components/common/TopBar.jsx'
import Work from './containers/Work.jsx'
import SelfSetting from './containers/SelfSetting.jsx'
import CompanySetting from './containers/CompanySetting.jsx'
import Link from './components/common/Link.jsx'
import Apps from './containers/Apps.jsx'
import Crm from './containers/applications/Crm.jsx'
import Admin from './containers/Admin.jsx'
import Files from './containers/files.jsx'
import CapitalAdmin from "./containers/capitalAdmin"
import Invoicing from "./containers/invoicing"

class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	//让所有的子组件可以拿到history
	getChildContext() {
		return {
			history: this.props.history
		}
	}

	componentWillMount() {
		const companyLoginedName = sessionStorage.getItem('epluscompanyName')
		if (companyLoginedName) {
			this.props.onLoginCompany(companyLoginedName)
		}
	}

	render() {
		return (
			<div style={{minHeight:'100%',display:'flex',flexDirection:'column'}}>
				<TopBar />
			 	<div>
					<Route path='/' exact component={Work}/>
					<Route path='/work' component={Work}/>
					<Route path='/apps' component={Apps}/>
					<Route path='/selfSetting' component={SelfSetting}/>
					<Route path='/companySetting' component={CompanySetting}/>
					<Route path='/admin' component={Admin}/>
					<Route path='/crm' component={Crm}/>
					<Route path='/files' component={Files}/>
					<Route path='/capitalAdmin' component={CapitalAdmin}/>
					<Route path='/invoicing' component={Invoicing}/>
				</div>
			</div>
		)
	}
}

Index.childContextTypes = {
	history: React.PropTypes.object.isRequired
}

function mapStateToProps() {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		onLoginCompany: (name) => dispatch(actionCreater.globalChangeCompanyLogined(true, name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);