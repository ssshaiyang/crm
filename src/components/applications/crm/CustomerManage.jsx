/*
 * @Author: lcj
 * @Date:   2017-08-21 11:32:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 09:40:26
 * @Descriptions: 
 */

import React from 'react'
import CustomerDataReview from './customerManage/CustomerDataReview.jsx'
import CustomerList from './customerManage/CustomerList.jsx'

export class CustomerManage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="shadowCard">
					<CustomerDataReview/>
				</div>
				<div className="shadowCard" style={{marginTop:'26px'}}>
					<CustomerList/>
				</div>
			</div>
		)
	}
}

export default CustomerManage