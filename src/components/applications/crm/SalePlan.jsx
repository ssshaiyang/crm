/*
 * @Author: lcj
 * @Date:   2017-08-25 08:57:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 09:30:27
 * @Descriptions: CRM-销售计划
 */

import React from 'react'
import GoalReachedGeneralMap from './SalePlan/GoalReachedGeneralMap.jsx'
import SalePlanList from './SalePlan/SalePlanList.jsx'

export class SalePlan extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<GoalReachedGeneralMap/>
				<SalePlanList/>
			</div>
		)
	}
}
     
export default SalePlan