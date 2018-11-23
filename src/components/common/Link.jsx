/*
 * @Author: lcj
 * @Date:   2017-08-10 20:35:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 14:23:39
 */

'use strict';
import React from 'react'
import {
	Link
} from 'react-router-dom'
import {
	connect
} from 'react-redux'

export class SelfLink extends React.Component {
	constructor(props) {
		super(props)
		this.getShowAbled = this.getShowAbled.bind(this)
	}

	handleClick(e) {
		// if (this.props.needCompanyLogined)
		// 	e.preventDefault();
	}

	getShowAbled() {
		if (this.props.needCompanyLogined && !this.props.companyLogined)
			return false;
		return true;
	}

	render() {
		let style = {
			display: this.getShowAbled() ? 'block' : 'none'
		}
		return (
			<Link
				to={this.props.to}
				onClick={this.handleClick.bind(this)}
				style={Object.assign({},style,this.props.style)}>
				{this.props.children}
			</Link>
		)
	}
}

function mapStateToProps(state) {
	return {
		companyLogined: state.global.companyLogined
	}
}

export default connect(mapStateToProps)(SelfLink)