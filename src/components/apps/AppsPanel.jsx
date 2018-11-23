/*
 * @Author: lcj
 * @Date:   2017-08-15 09:22:04
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 16:33:03
 */

'use strict';

import React from 'react'
import AppBlock from './AppBlock.jsx'
import {
	Row
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../actions/apps/appsPanel.js'
import AppDetailModel from './AppDetailModel.jsx'

const styles = {
	container: {
		marginTop: '35px',
		backgroundColor: 'white',
		border: '2px #e9ecf1 solid'
	}
}

export class AppsPanel extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const type = this.props.type;
		if ((type === 0 || type === 1) && !this.props.companyLogined) {
			this.props.clearApps();
			this.props.history.replace('/apps/allApps');
		} else {
			this.props.refreshApps(type);
		}
	}

	renderApps(apps) {
		return apps.map((app, i) => (
			<AppBlock key={i} {...app} appStatus={this.props.type}/>
		))
	}

	render() {
		return (
			<div style={styles.container}>
				<Row>
					{this.renderApps.call(this,this.props.apps)}
				</Row>
				<AppDetailModel refreshApps={()=>this.props.refreshApps(this.props.type)}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		companyLogined: state.global.companyLogined,
		apps: state.appsPanel.apps
	}
}

function mapDispatchToProps(dispatch) {
	return {
		clearApps: () => dispatch(actionCreater.clearAppsActionCreater()),
		refreshApps: (type) => dispatch(actionCreater.getAppsActionCreater(type)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AppsPanel)