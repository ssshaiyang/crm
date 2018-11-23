import React from 'react'
import {connect} from 'react-redux'
import {
	Input,
	Button
} from 'antd'
import {saleCheckFilterActionCreater} from '../../../../../actions/applications/crm/saleCheck/productList/productListFilter.js'

         
 export class PoductListSearch extends React.Component {
 	constructor(props) {
		super(props)
	}

	handleChange(e){
		this.props.refreshList.call(this,e);
		this.props.getList();
	}
    handleBth(){
    	this.props.getList({
    		filter:this.props.filter
    	});
    }
 	render(){
      return(
	      	<div style={{'textAlign':'center'}}>
	      		<Input 
						style={{width:'150px'}}
						onChange={this.handleChange.bind(this)}
						value={this.props.filter}
						placeholder="输入产品名称"/>
				<Button
						className="mainButton"
					     icon="plus"
					    onClick={this.handleBth.bind(this)}
						style={{margin:'0 0px 0 10px'}}>
				</Button>
	      	</div>
      	)
    }
 }
  function mapStateToProps(state) {
      let filterState=state.productAllFilter;
      return {
      	 filter:filterState.filterValue
      }
  }
  function mapDispatchToProps(dispatch) {
  	 return {
  	 	     refreshList:(e)=>{
  	 	     	dispatch(saleCheckFilterActionCreater(e.target.value))
  	 	     }
  	 }
  }
 export default connect(mapStateToProps, mapDispatchToProps)(PoductListSearch)