/*
 * @Author: lcj
 * @Date:   2017-08-07 08:32:56
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-07 08:34:25
 */

'use strict';

import React from 'react'
import {
	Icon
} from 'antd'
import {
	Link
} from 'react-router-dom'

export default class StepTwo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{width:'100%',textAlign:'center'}}>
				<Icon type="check-circle-o" style={{fontSize:'72px',color:'#00b8ac',marginBottom:'3%'}}/>
				<p style={{fontSize:'32px',marginBottom:'5%',letterSpacing:'2px'}}>注册成功</p>
				<Link to='/' style={{fontSize:'25px',color:'#00b8ac'}}>&lt; 返回首页</Link>
			</div>
		)
	}
}