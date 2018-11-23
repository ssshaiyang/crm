/*
 * @Author: lcj
 * @Date:   2017-09-07 19:13:57
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-07 19:39:20
 * @Descriptions: 选择报销类型modal
 */

import React from 'react'
import {
	Modal
} from 'antd'
const width = window.screen.availWidth > 1000 ? 800 : '100%';

export default class SelectModal extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const hoverButton = {
			display: 'inline-block',
			width: '100px',
			height: '100px',
			lineHeight: '100px',
			margin: '0 10%'
		}
		return (
			<Modal
				visible={this.props.visible}
				key={this.props.visible}
				title='选择报销类型'
				width={width}
				footer={null}
				onCancel={this.props.closeModal}>
				<div style={{textAlign:'center',padding:'80px 0'}}>
					<div className="hoverButton" style={hoverButton} onClick={this.props.openCustomerModal}>
						客情费
					</div>
					<div className="hoverButton" style={hoverButton} onClick={this.props.openDailyModal}>
						日常报销
					</div>
				</div>
			</Modal>
		)
	}
}