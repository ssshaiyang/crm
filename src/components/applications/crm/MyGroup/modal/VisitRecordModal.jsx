/*
 * @Author: lcj
 * @Date:   2017-08-30 14:15:46
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 14:23:05
 * @Descriptions: 
 */

import React from 'react'
import Grid from '../../../../common/Grid.jsx'
import {
	getCustomerVisitRecord
} from '../../../../../utils/interface.js'
import {
	formatDate
} from '../../../../../utils/common.js'

export default class VisitRecordModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentWillMount() {
		this.getProductWanted.call(this)
	}

	getProductWanted() {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				this.setState({
					data: res.data
				})
			}
		}
		let params = {
			customer_id: this.props.customer_id
		}
		getCustomerVisitRecord(params, cb.bind(this))
	}

	render() {

		const columnDefs = {
			"visit_record_id": {
				headerName: "序号",
				valueGetter: (params) => params.node.rowIndex + 1
			},
			"visit_date": {
				headerName: "跟进时间",
				valueGetter: (params) => formatDate(params.data.visit_date)
			},
			"communicate_way": {
				headerName: "沟通方式",
				valueGetter: (params) => ['未拜访', '电话沟通', '上门拜访'][params.data.communicate_way]
			},
			"customer_spend": "客情支出",
			"visit_content": "内容",
		}
		return (
			<div>
				<Grid rowData={this.state.data} columnDefs={columnDefs}/>
			</div>
		)
	}
}