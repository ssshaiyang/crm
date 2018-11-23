// 存放产品列表
import React from 'react'
import {connect}from 'react-redux'
import Grid from '../../../../common/Grid.jsx'
import * as actionCreator from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleCheckpage.js'
import * as actionValueTimeCreater from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleDetailTime.js'
import * as actionPeriodCreater from '../../../../../actions/applications/crm/saleCheck/saleDetailList/saleTable.js'
import moment from 'moment'
let first=true;
 export class PoductListAll extends React.Component {
 	componentWillMount(){
 		// this.props.refreshLisT()
 	}
     makeColumnDefs() {
		return {
			"drug_name": {
				headerName: "产品名称",
				valueGetter: (params) =>{
					 if(first){
					 	console.log('fir',params.data.drug_id)
					 	this.props.getDrugId(params.data.drug_id)
					 	this.props.getSaleProduct()
					 	first=false;
					 }
					
					return params.data.drug_name+'（'+params.data.specifications+'/'+params.data.dosage+'）'
				},
				onCellClicked:(params)=>{
					// console.log(params.data.drug_id)
					//初始化filter和时间
					this.props.InitValueTime()
					this.props.InitHistory('未搜索')
					this.props.getDrugId(params.data.drug_id)
					this.props.refresh({
						 "drugId":this.props.drugid,
						 'limit':5,
						 'page':1,
					})
					 this.props.InitPeriod([
					 	moment(),
					 	moment(),
					 ])
				}
			}
		}
	}

 	
 	render(){
 		const containerStyle={
 			 minHeight: window.screen.availHeight - 530 + 'px',
 		}
      return(
	      	<div>
	      		<Grid
				rowData={this.props.rowData}
				columnDefs={this.makeColumnDefs.call(this)}
				containerStyle={containerStyle}
				/>
	      	</div>
      	)
    }
 }

function mapStateToProps(state) {
	return {
		rowData: state.productAll.data,
		drugid:state.saleProductPage.drugId
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getDrugId : (id)=>dispatch(actionCreator.setSaleCheckListDrugId(id)), //改变drugid
		// initDrugId:()=>dispatch(actionCreator.setSaleCheckInitListDrugId()),
	    InitValueTime:()=>dispatch(actionValueTimeCreater.InitSaleValueTimeActionCreater()),
	    InitPeriod:(val)=>dispatch(actionPeriodCreater.SaleTablePeriod(val)),
	    InitHistory:(val)=>dispatch(actionPeriodCreater.InitSaleTableHospital(val))
	}
}
 export default connect(mapStateToProps,mapDispatchToProps)(PoductListAll)