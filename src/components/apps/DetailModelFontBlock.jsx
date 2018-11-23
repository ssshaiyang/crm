/*
 * @Author: lcj
 * @Date:   2017-08-15 13:12:35
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 13:22:20
 */

'use strict';
import React from 'react'
export default class DetailModelFontBlock extends React.Component {
	render() {
		return (
			<div style={{padding:'5px 0 10px',borderBottom:this.props.bottom?'1px #ebebeb solid':''}}>
				<h2 style={{lineHeight:'33px'}}>{this.props.title}</h2>
				<h3 style={{color:'4c4c4c'}}>{this.props.content}</h3>
			</div>
		)
	}
}