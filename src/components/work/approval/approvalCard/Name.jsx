/*
 * @Author: lcj
 * @Date:   2017-08-08 12:32:18
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 13:36:25
 */

'use strict';

import React from 'react'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/work/approval/approvalCard/nameModel.js'

export class Name extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		this.props.updateNameModelData(this.props.uid);
		this.props.showNameModel();
	}

	render() {
		let style = this.props.noColor ? {
			cursor: 'pointer'
		} : {
			cursor: 'pointer',
			color: '#02d3b3'
		};
		return (
			<span style={style} onClick={this.handleClick.bind(this)}>
				{this.props.children}
			</span>
		)
	}
}

function mapStateToProps() {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		showNameModel: () => dispatch(actionCreater.onNameModelSwitchActionCreater(true)),
		updateNameModelData:
			(id) => dispatch(actionCreater.updateNameModelDataActionCreater(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Name)