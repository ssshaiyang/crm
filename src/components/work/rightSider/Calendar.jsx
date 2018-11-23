/*
 * @Author: lcj
 * @Date:   2017-08-01 18:25:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-01 18:31:57
 */

'use strict';

import React from 'react';
import {
	Calendar
} from 'antd'

export default class extends React.Component {
	constructor(props) {
		super(props);
	}

	onPanelChange(value, mode) {
		console.log(value, mode);
	}

	onSelect(value) {
		console.log(value)
	}

	render() {
		return (
			<div style={{background:'white'}}>
				<Calendar fullscreen={false} onPanelChange={this.onPanelChange} onSelect={this.onSelect}/>
			</div>
		)
	}
}