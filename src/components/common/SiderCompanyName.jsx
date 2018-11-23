/*
 * @Author: lcj
 * @Date:   2017-08-16 08:27:13
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-16 08:30:00
 * @Description : 左侧导航栏的最上方公司显示
 */

'use strict';
import React from 'react'
import {
	connect
} from 'react-redux'

export class SiderCompanyName extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const companyName = this.props.companyLoginedName
		const display = companyName ? 'block' : 'none'
		return (
			<h3 style={{display:display}} className="siderCompanyName" title={companyName}>{companyName}</h3>
		)
	}
}

function mapStateToProps(state) {
	return {
		companyLoginedName: state.global.companyLoginedName
	};
}


export default connect()(SiderCompanyName)           