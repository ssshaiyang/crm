/*
 * @Author: lcj
 * @Date:   2017-08-25 10:38:21
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 20:28:22
 * @Descriptions: 销售计划-目标达成一览图-饼图组件
 */

import React from 'react'
import PieChart from '../../common/CustomerDataDisplayPieChart.jsx'
import {
	Col
} from 'antd'

export default class GeneralMapPieChart extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const data = this.props.data;
		if (!data)
			return false;
		const stage = this.props.stage;
		const prefix = ['new_customer_', 'phone_customer_', 'onsite_customer_'][stage]
		const willFinishedNumber = data[prefix + 'target']
		const finishedNumber = data.customer_complete
		const finishedColor = ['#f12121', '#ef950b', '#2f93f5'][stage]
		return (
			<Col
				md={{span:8}} sm={{span:12}} xs={{span:24}}
				style={{borderRight:stage!=3?'1px #cdcdcd solid':'',margin:'20px 0',padding:'20px 0'}}>
				<PieChart
					willFinishedNumber={willFinishedNumber}
					finishedNumber={finishedNumber}
					finishedColor={finishedColor}
					label={<Label
						stage={stage}
						willdo={willFinishedNumber}
						done={finishedNumber}/>}/>
			</Col>
		)
	}
}

const textStyle = {
	lineHeight: '30px',
	// height: '30px',
	letterSpacing: '1px',
	fontSize: '14px'
}

const rateStyle = {
	border: '2px #cdcdcd solid',
	padding: '0px 10px',
	marginBottom: '10px',
	marginLeft: '-20px',
	borderRadius: '20px',
	boxSizing:"border-box",

}

const spanStyle = {
	fontWeight: 'bold',
	fontSize: '16px',
	display:"inline-block",
}

class Label extends React.Component {
	render() {
		const type = ['新开发客户', '电话拜访客户', '上门拜访客户']
		const doneRate = this.props.willdo === 0 ? 100 : Math.floor(this.props.done / this.props.willdo * 100)
		return (
			<div style={{marginLeft:"10px"}}>
				<p style={Object.assign({},textStyle,rateStyle)}>
					达成率:
					<span style={spanStyle}>{doneRate}</span>
					%</p>
				<p style={textStyle}>{type[this.props.stage]}</p>
				<p style={textStyle}>
					目标值:
					<span style={spanStyle}>{this.props.willdo}</span>
				</p>
			</div>
		)
	}
}