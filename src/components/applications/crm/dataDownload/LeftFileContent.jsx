/*
 * @Author: lcj
 * @Date:   2017-08-30 16:08:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 16:50:53
 * @Descriptions: 资料下载-左侧产品目录
 */

import React from 'react'
import Grid from '../../../common/Grid.jsx'
import {
	Card,
	Input,
	Button
} from 'antd'

export class LeftFileContent extends React.Component {
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

	getData() {
		const data = [{
			name: '目录1',
			folder: true,
			open: true,
			children: [{
				name: '文件1',
				id: 1
			}, {
				name: '文件2',
				id: 2
			}]
		}, {
			name: '目录2',
			folder: true,
			children: [{
				name: '文件1',
				id: 3
			}, {
				name: '文件2',
				id: 4
			}]
		}, {
			name: '目录3',
			folder: true,
			children: [{
				name: '文件1',
				id: 5
			}, {
				name: '文件2',
				id: 6
			}]
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

	changeId(params) {
		if (!params.data.folder) {
			this.props.setFileId(params.data.id)
		}
	}

	render() {
		const columnDefs = {
			"name": {
				headerName: "",
				cellRenderer: 'group',
			}
		}
		const gridOptions = {
			animateRows: true,
			getNodeChildDetails: function(file) {
				if (file.folder) {
					return {
						group: true,
						children: file.children,
						expanded: file.open
					};
				} else {
					return null;
				}
			},
			onRowClicked: (params) => this.changeId.call(this, params)
		}
		const containerStyle = {
			height: window.screen.availHeight - 430 + 'px',
			margin: 0
		}
		return (
			<Card
				title=" "
				extra={this.renderExtra.call(this)}>
				<Grid
					rowData={this.state.data}
					columnDefs={columnDefs}
					gridOptions={gridOptions}
					containerStyle={containerStyle}/>
			</Card>
		)
	}
}

export default LeftFileContent         