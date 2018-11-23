/*
 * @Author: lcj
 * @Date:   2017-08-30 13:57:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 14:10:15
 * @Descriptions: 产品意向modal
 */

import React from 'react'
import {
	getCustomerProductWantedList
} from '../../../../../utils/interface.js'
import Grid from '../../../../common/Grid.jsx'

export default class ProductWantted extends React.Component {

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
		getCustomerProductWantedList(params, cb.bind(this))
	}

	render() {

		const columnDefs = {
			"drug_id": "产品ID",
			"drug_name": "产品名称",
			"specifications": "产品规格",
			"dosage": "成品剂型",
			"": "计量单位",
			"manufacture_enterprise": "生产企业"
		}
		return (
			<div>
				<Grid rowData={this.state.data} columnDefs={columnDefs}/>
			</div>
		)
	}
}