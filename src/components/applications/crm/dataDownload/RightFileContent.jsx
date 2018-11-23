/*
 * @Author: lcj
 * @Date:   2017-08-30 16:43:25
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 17:10:21
 * @Descriptions: 
 */

import React from 'react'
import {
	Card,
	Input,
	Button
} from 'antd'
import Grid from '../../../common/Grid.jsx'

export class RightFileContent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			filter: ''
		}
	}

	componentWillMount() {
		this.getData.call(this);
	}

	componentWillReceiveProps(props) {
		console.log(props)
		this.getData.call(this)
	}

	getData() {
		const data = [{
			"id": Math.floor(Math.random() * 10),
			"code": 'XXX0002',
			"name": 'XX彩页2',
			"note": "内容...",
			"update_time": "2017-08-10",
			"action": ""
		}, {
			"id": Math.floor(Math.random() * 10),
			"code": 'XXX0002',
			"name": 'XX彩页2',
			"note": "内容...",
			"update_time": "2017-08-10",
			"action": ""
		}, {
			"id": Math.floor(Math.random() * 10),
			"code": 'XXX0003',
			"name": 'XX彩页3',
			"note": "内容...",
			"update_time": "2017-08-10",
			"action": ""
		}]
		this.setState({
			data
		})
	}

	renderExtra() {
		return (
			<div>
				<Input style={{width:'78%',margin:'0 2%'}} placeholder="输入名称" value={this.state.filter} onChange={(e)=>this.setState({filter:e.target.value})}/>
				<Button icon="search" style={{width:'18%'}} className="mainButton"/>
			</div>
		)
	}

	render() {
		const containerStyle = {
			height: window.screen.availHeight - 430 + 'px',
			margin: 0
		}
		const columnDefs = {
			"id": "序号",
			"code": "编号",
			"name": "名称",
			"note": "简介",
			"update_time": "更新日期",
			"action": "操作"
		}
		return (
			<Card 
				title="资料列表"
				extra={this.renderExtra.call(this)}
				noHovering>
				<Grid
					containerStyle={containerStyle}
					columnDefs={columnDefs}
					rowData={this.state.data}/>
			</Card>
		)
	}
}

export default RightFileContent