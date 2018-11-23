/*
 * @Author: lcj
 * @Date:   2017-08-10 11:01:08
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 15:52:09
 */

'use strict';
import React from 'react';
import {
	Row,
	Col
} from 'antd';
import {
	formatDate
} from '../../../../utils/common.js'
import Name from './Name.jsx'

let styles = {
	title: {
		color: '#585e6c',
	}
}

export class CardTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row style={styles.title}>
				<Col md={{span:6}} sm={{span:6}} xs={{span:6}}>
					审批号：{this.props.data.approval_id}
				</Col>
				<Col md={{span:6}} sm={{span:6}} xs={{span:6}}>
					发起人：<Name uid={this.props.data.applicant_uid}>{this.props.data.applicant}</Name>
				</Col>
				<Col md={{span:11}} sm={{span:11}} xs={{span:6}} style={{textAlign:'right'}}>
					发起时间：{formatDate(this.props.data.create_time)}
				</Col>
			</Row>
		)
	}
}

export default CardTitle;