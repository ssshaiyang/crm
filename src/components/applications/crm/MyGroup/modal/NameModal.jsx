/*
 * @Author: lcj
 * @Date:   2017-08-08 11:15:10
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 10:40:35
 */

'use strict';

import React from 'react'
import {
	Col
} from 'antd'
let styles = {
	leftItem: {
		flex: 2,
		textAlign: 'right'
	},
	rightItem: {
		flex: 3,
		textAlign: 'left',
		paddingLeft: '10px'
	}
}

export default class NameModel extends React.Component {
	render() {
		let data = this.props.data || {};
		return (
			<div style={{width:'300px'}}>
				<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
					<div style={styles.leftItem}>
						<img src={data.head_picture} alt="avatar" style={{width:"50px",height:'50px',flex:1}}/>
					</div>
					<div style={styles.rightItem}>
						<p>{data.employee_name}</p>
						<p>{data.position}</p>
					</div>
				</div>
				<Inf title="部门" content={data.department}/>
				<Inf title="手机号码" content={data.telephone}/>
				<Inf title="分机号码" content={data.office_phone}/>
			</div>
		)
	}
}

class Inf extends React.Component {
	render() {
		return (
			<div style={{display:'flex',margin:'10px 0'}}>
				<p style={styles.leftItem}>{this.props.title+'：'}</p>
				<p style={styles.rightItem}>{this.props.content}</p>
			</div>
		)
	}
}