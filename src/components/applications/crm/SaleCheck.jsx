// crm-销量查询

import React from 'react'
import SaleCheckList from './SaleCheck/saleCheckList.jsx'

export class SaleCheck extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
			   <SaleCheckList/>
			</div> 
		)
	}
}
export default SaleCheck