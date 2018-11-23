/*
 * @Author: lcj
 * @Date:   2017-08-30 15:43:48
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 16:48:30
 * @Descriptions: crm-销量查询
 */

import React from 'react'
import {
	Card,
	Row,
	Col
} from 'antd'
import LeftFileContent from './dataDownload/LeftFileContent.jsx'
import RightFileContent from './dataDownload/RightFileContent.jsx'

export class DataDownload extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fileId: ''
		}
	}

	setFileId(id) {
		this.setState({
			fileId: id
		})
	}

	render() {
		return (
			<Card title="产品目录" noHovering>
				<Row gutter={20}>
					<Col span={6}>
						<LeftFileContent setFileId={this.setFileId.bind(this)}/>
					</Col>
					<Col span={17}>
						<RightFileContent fileId={this.state.fileId}/>
					</Col>
				</Row>
			</Card>
		)
	}
}

export default DataDownload