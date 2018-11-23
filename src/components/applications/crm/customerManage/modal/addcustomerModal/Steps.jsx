/*
 * @Author: lcj
 * @Date:   2017-08-22 10:34:13
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-22 10:41:25
 * @Descriptions: 客户管理-添加客户-上方步骤条
 */

import React from 'react'
import {
	Steps
} from 'antd'
const Step = Steps.Step

export default class SelfSteps extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Steps current={this.props.current}>
		    	<Step title="完善基本信息"/>
			    <Step title="填写意向产品" />
			    <Step title="核对信息" />
		  	</Steps>
		)
	}
}

SelfSteps.defaultProps = {
	current: 0
}