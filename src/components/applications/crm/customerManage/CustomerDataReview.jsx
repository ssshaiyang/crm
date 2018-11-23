/*
 * @Author: lcj
 * @Date:   2017-08-21 14:13:33
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 16:44:46
 * @Descriptions: 客户管理-客情数据一览
 */

import React from 'react'
import {
	Row,
	Col,
	Card
} from 'antd'
import {
	connect
} from 'react-redux'
import * as actionCreater from '../../../../actions/applications/crm/customerManage/customerDataReview.js'
import CustomerDataDisplayPieChart from '../common/CustomerDataDisplayPieChart.jsx'

const colSpan = {
	md: {
		span: 8
	},
	sm: {
		span: 12
	},
	xs: {
		span: 24
	}
}

export class CustomerDateReview extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getCustomerData();
	}

	makeChart(data ,key) {
		const color = ["#f32122", "#e7b870", "#3090f6", "#01d8b7", "#56d222"]
		let params = {
			willFinishedNumber: data.stageNumber,
			finishedNumber: data.stageNumber,
			label: data.stageName,
			finishedColor: color[data.stageId - 1],
			stageId: data.stageId,
			overFinishedColor: 'blue',
			remainFilishedColor: '#dcdcdc',
		}
		return (
		   <Col {...colSpan} key={key}>
               {/*<Col {...colSpan} key={data.stageId}>*/}
				<CustomerDataDisplayPieChart {...params} />
			</Col>
		)
	}

	render() {
		return (
			<Card 
				title="客情数据一览">
				<Row>
					{this.props.data.map((item,index)=>(
						this.makeChart(item,index)
					))}
				</Row>
			</Card>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.customerDataReview.data
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getCustomerData: () => dispatch(actionCreater.getCustomerDataActionCreater())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDateReview);