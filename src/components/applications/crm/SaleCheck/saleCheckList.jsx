// crm-SaleCheck-销售查询
import React from 'react'
import {connect}from 'react-redux'
import ProductList from './productList.jsx'
import SaleDetail from './saleDetail.jsx'
import {getSaleProductListActionCreater} from '../../../../actions/applications/crm/saleCheck/saleDetail.js'

let styles={
	flexbox:{
		'display':'flex',
		'WebkitJustifyContent':'space-between',
		'justifyContent':'space-between',
		'WebkitFlexWrap':'no-wrap',
		'flexWrap':'no-wrap',
	},
	productlist:{
          width:'240px',
         'marginRight':'30px'
	},
	saledetail:{
         'flex':'1',
	},
	title:{
		'fontSize':'14px',
		'lineHeight':'30px'
	}
}
export class SaleCheckList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div style={styles.flexbox}>
			   <div style={styles.productlist}>
			   	 <ProductList  RefreshGetSale={this.props.getSaleList}/>
			   </div>
			   <div style={styles.saledetail}>
			   	  <SaleDetail getSaleListAll={this.props.getSaleList}/>
			   </div>
			</div> 
		)
	}
}
function mapDispatchToprops(dispatch) {
	return {
		getSaleList: () => dispatch(getSaleProductListActionCreater()),
	}
}
export default connect(null,mapDispatchToprops)(SaleCheckList)