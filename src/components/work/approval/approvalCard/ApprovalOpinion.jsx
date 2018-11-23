/*
 * @Author: lcj
 * @Date:   2017-08-10 11:20:21
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 13:37:55
 */

'use strict';

import React from 'react'
import {
	Button
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/work/approval/approvalCard/approvalOpinionModel.js'

let styles = {
	dataContainer: {
		display: 'flex',
		margin: '20px 0',
		fontSize: '14px'
	},
	yesButton: {
		background: '#02d9b8',
		color: 'white',
		margin: "0 10px"
	},
	noButton: {
		background: '#d4d5d7',
		color: '#838584'
	}
}

export class ApprovalOpinion extends React.Component {

	handleClick(state) {
		this.props.openOpinionModel()
		this.props.changeOpinionModelState(state)
		this.props.changeOpinionModelApprovalid(this.props.approvalId)
	}

	render() {
		let display = this.props.type === 1 ? 'flex' : 'none';
		return (
			<div style={Object.assign({},styles.dataContainer,{marginBottom:0,display:display})}>
				<p>审核意见:</p>
				<Button
					style={styles.yesButton}
					onClick={()=>this.handleClick.call(this,1)}>
					同意
				</Button>
				<Button
					style={styles.noButton}
					onClick={()=>this.handleClick.call(this,0)}>
					拒绝
				</Button>
			</div>
		)
	}

}

let mapStateToProps = () => ({})

function mapDispatchToProps(dispatch) {
	return {
		openOpinionModel:
			() => dispatch(actionCreater.onApprovalOpinionModelSwitchVisibleActionCreater(true)),
		changeOpinionModelState:
			(state) => dispatch(actionCreater.changeApprovalOpinionStateActionCreater(state)),
		changeOpinionModelApprovalid:
			(approvalId) => dispatch(actionCreater.changeApprovalOpinionApprovalIdActionCreater(approvalId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovalOpinion)