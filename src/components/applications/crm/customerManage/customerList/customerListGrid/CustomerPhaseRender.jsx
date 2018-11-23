/*
 * @Author: lcj
 * @Date:   2017-08-24 18:49:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 19:17:09
 * @Descriptions: 客户管理-客户列表-客情阶段render
 */

import React from 'react'
import {
	Select
} from 'antd'
import {
	connect
} from 'react-redux'
import {
	changeCustomerPhase
} from '../../../../../../utils/interface.js'
const Option = Select.Option

export class CustomerPhaseRender extends React.Component {

	renderOptions() {
		console.log( this.props.customerPhaseOptions)
		if(this.props.data.customer_stage!==1){
			// if (this.props) {}
			var options = this.props.customerPhaseOptions;
			
			delete options[1]
			const keys = Object.keys(options);
			return keys.map(key => (
				<Option value={key} key={key}>{options[key]}</Option>
			))
		}
		else{
			var options = this.props.customerPhaseOptions;
			const keys = Object.keys(options);
			return keys.map(key => (
				<Option value={key} key={key}>{options[key]}</Option>
			))
		}
	}

	handleChange(value) {
		let params = {
			customer_id: this.props.data.customer_id,
			stage_id: value
		}
		changeCustomerPhase(params, () => false)
	}

	render() {
		return (
			this.props.value === 1 ?
			<p>新开发客户</p> :
				<div style={{textAlign:"center"}}>
					<Select
						style={{width:'100px'}}
						onChange={this.handleChange.bind(this)}
						defaultValue={this.props.value.toString()}>
                        {this.renderOptions.call(this)}
					</Select>
				</div>

		)
	}
}

function mapStateToProps(state) {
	return {
		customerPhaseOptions: state.customerListFilter.customerPhaseOptions
	}
}

export default connect(mapStateToProps)(CustomerPhaseRender)