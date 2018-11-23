  // 销售查询-产品目录
 import React from 'react'
 import {connect} from 'react-redux'
 import {Card} from 'antd'
 import PoductListSearch from './productList/productListSearch.jsx'
 import PoductListAll from './productList/productListAll.jsx'
 import {getProductListActionCreater} from '../../../../actions/applications/crm/saleCheck/productList/productListAll.js'
 import {getSaleProductListActionCreater} from '../../../../actions/applications/crm/saleCheck/saleDetail.js'

 export class PoductList extends React.Component {
 	componentWillMount() {
		this.props.getProductList()
	}
 	render(){
      return(
      	   <Card
        className="shadowCard"
        title="产品目录">
              <PoductListSearch getList={this.props.getProductList}/> 
              <PoductListAll refresh={this.props.refreshList} getSaleProduct={this.props.RefreshGetSale}/>
      	   </Card>
      	)
    }
 }
function mapDispatchToprops(dispatch) {
	return {
		getProductList: () => dispatch(getProductListActionCreater()),
    refreshList:()=>dispatch(getSaleProductListActionCreater())
	}
}

 export default connect(null, mapDispatchToprops)(PoductList)           